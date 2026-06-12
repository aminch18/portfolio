"use client";
import React, { useMemo, useState } from "react";
import { skills } from "../../data/profileData";

// Ring by proficiency: inner = core mastery, outer = familiar.
// level >= 90 -> core | 80-89 -> proficient | < 80 -> familiar
const RING_RADIUS = { core: 58, proficient: 108, familiar: 158 };
const CENTER = 200;
const VIEW = 400;

const QUADRANT_COLORS = ["#818cf8", "#c084fc", "#34d399", "#f472b6"];

type Blip = {
  key: string;
  name: string;
  level: number;
  category: string;
  categoryIndex: number;
  x: number;
  y: number;
  color: string;
};

function ringFor(level: number): keyof typeof RING_RADIUS {
  if (level >= 90) return "core";
  if (level >= 80) return "proficient";
  return "familiar";
}

function buildBlips(): Blip[] {
  const blips: Blip[] = [];
  skills.forEach((group, qi) => {
    const baseAngle = qi * 90; // each category owns a 90° quadrant
    const n = group.items.length;
    group.items.forEach((item, k) => {
      // Spread items across the quadrant, leaving padding at the edges
      const angleDeg = baseAngle + ((k + 1) / (n + 1)) * 90;
      const angle = ((angleDeg - 90) * Math.PI) / 180; // -90 so quadrant 0 starts at top
      const r = RING_RADIUS[ringFor(item.level)];
      blips.push({
        key: `${group.category}-${item.name}`,
        name: item.name,
        level: item.level,
        category: group.category,
        categoryIndex: qi,
        x: CENTER + r * Math.cos(angle),
        y: CENTER + r * Math.sin(angle),
        color: QUADRANT_COLORS[qi % QUADRANT_COLORS.length],
      });
    });
  });
  return blips;
}

export function TechRadar({ isVisible }: { isVisible: boolean }) {
  const blips = useMemo(buildBlips, []);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const hoveredBlip = blips.find((b) => b.key === hovered) || null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,260px] gap-8 items-center">
      {/* Radar */}
      <div className="relative mx-auto w-full max-w-[420px]">
        <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="w-full h-auto">
          {/* Rings */}
          {Object.values(RING_RADIUS).map((r, i) => (
            <circle
              key={r}
              cx={CENTER}
              cy={CENTER}
              r={r}
              fill="none"
              stroke="var(--border-primary)"
              strokeWidth={1}
              style={{ opacity: 0.8 - i * 0.15 }}
            />
          ))}
          {/* Quadrant separators */}
          <line x1={CENTER} y1={CENTER - 165} x2={CENTER} y2={CENTER + 165} stroke="var(--border-primary)" strokeWidth={1} />
          <line x1={CENTER - 165} y1={CENTER} x2={CENTER + 165} y2={CENTER} stroke="var(--border-primary)" strokeWidth={1} />

          {/* Ring labels */}
          <text x={CENTER} y={CENTER - RING_RADIUS.core + 4} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" className="mono">core</text>
          <text x={CENTER} y={CENTER - RING_RADIUS.proficient + 4} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" className="mono">strong</text>
          <text x={CENTER} y={CENTER - RING_RADIUS.familiar + 4} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" className="mono">familiar</text>

          {/* Blips */}
          {blips.map((b) => {
            const dim = activeCategory !== null && activeCategory !== b.categoryIndex;
            const isHovered = hovered === b.key;
            return (
              <g
                key={b.key}
                style={{
                  opacity: isVisible ? (dim ? 0.18 : 1) : 0,
                  transition: "opacity 0.6s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHovered(b.key)}
                onMouseLeave={() => setHovered(null)}
              >
                <circle cx={b.x} cy={b.y} r={isHovered ? 9 : 6} fill={b.color}>
                  {isHovered && (
                    <animate attributeName="r" from="6" to="9" dur="0.2s" fill="freeze" />
                  )}
                </circle>
                <text
                  x={b.x}
                  y={b.y - 11}
                  textAnchor="middle"
                  fontSize="9"
                  fill="var(--text-primary)"
                  style={{ fontWeight: isHovered ? 700 : 400, pointerEvents: "none" }}
                >
                  {b.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover detail */}
        <div className="h-6 text-center mono text-sm" style={{ color: "var(--accent-primary)" }}>
          {hoveredBlip ? `${hoveredBlip.name} — ${hoveredBlip.category}` : ""}
        </div>
      </div>

      {/* Legend / categories */}
      <div className="space-y-3">
        {skills.map((group, qi) => (
          <button
            key={group.category}
            onMouseEnter={() => setActiveCategory(qi)}
            onMouseLeave={() => setActiveCategory(null)}
            onClick={() => setActiveCategory(activeCategory === qi ? null : qi)}
            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200"
            style={{
              background: activeCategory === qi ? "var(--chip-bg)" : "transparent",
              border: "1px solid",
              borderColor: activeCategory === qi ? "var(--chip-border)" : "transparent",
            }}
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: QUADRANT_COLORS[qi % QUADRANT_COLORS.length] }}
            />
            <span className="text-sm font-display" style={{ color: "var(--text-primary)" }}>
              {group.category}
            </span>
            <span className="ml-auto text-xs" style={{ color: "var(--text-secondary)" }}>
              {group.items.length}
            </span>
          </button>
        ))}
        <p className="text-xs leading-relaxed pt-2" style={{ color: "var(--text-secondary)" }}>
          Closer to the center = deeper mastery. Hover a category to isolate it.
        </p>
      </div>
    </div>
  );
}

"use client";
import React, { useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { SectionHeader } from "../ui/SectionHeader";

type NodeKind = "client" | "service" | "stream" | "store" | "observability";

const KIND_COLOR: Record<NodeKind, string> = {
  client: "#94a3b8",
  service: "#818cf8",
  stream: "#f472b6",
  store: "#34d399",
  observability: "#fbbf24",
};

type ArchNodeData = {
  label: string;
  tech: string;
  kind: NodeKind;
  detail: string;
};

function ArchNode({ data, selected }: NodeProps) {
  const d = data as unknown as ArchNodeData;
  const color = KIND_COLOR[d.kind];
  return (
    <div
      className="rounded-xl px-4 py-3 min-w-[150px]"
      style={{
        background: "var(--bg-secondary)",
        border: `1px solid ${selected ? color : "var(--border-primary)"}`,
        borderLeft: `4px solid ${color}`,
        boxShadow: selected ? `0 0 0 2px ${color}55` : "0 4px 14px rgba(0,0,0,0.18)",
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: color, border: "none" }} />
      <div className="text-sm font-display font-semibold" style={{ color: "var(--text-primary)" }}>
        {d.label}
      </div>
      <div className="mono text-[10px] mt-0.5" style={{ color: "var(--text-secondary)", background: "transparent", padding: 0 }}>
        {d.tech}
      </div>
      <Handle type="source" position={Position.Right} style={{ background: color, border: "none" }} />
    </div>
  );
}

const nodeTypes = { arch: ArchNode };

function n(
  id: string,
  x: number,
  y: number,
  label: string,
  tech: string,
  kind: NodeKind,
  detail: string
): Node {
  return { id, type: "arch", position: { x, y }, data: { label, tech, kind, detail } };
}

function e(source: string, target: string, label?: string): Edge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    label,
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "var(--accent-primary)", strokeWidth: 1.5 },
    labelStyle: { fill: "var(--text-secondary)", fontSize: 10 },
    labelBgStyle: { fill: "var(--bg-primary)" },
  };
}

const DIAGRAMS: Record<
  string,
  { title: string; blurb: string; nodes: Node[]; edges: Edge[] }
> = {
  ratelimiter: {
    title: "Rate Limiter",
    blurb: "Distributed rate limiting with a token-bucket algorithm and shared state.",
    nodes: [
      n("clients", 0, 140, "Clients", "many callers", "client", "Concurrent clients hitting the API. Each is identified by an API key or IP used as the bucket key."),
      n("gw", 220, 140, "API Gateway", "edge", "service", "Terminates requests at the edge and delegates the allow/deny decision to the limiter before any work is done."),
      n("limiter", 440, 140, "Rate Limiter", "token bucket", "service", "Token-bucket allows short bursts while bounding the sustained rate. The decision is a single atomic check-and-decrement."),
      n("redis", 440, 0, "Redis", "atomic counters", "store", "Shared bucket state across all gateway instances. A Lua script makes refill + consume atomic, avoiding race conditions under load."),
      n("svc", 680, 60, "Upstream Service", "business logic", "service", "Only receives traffic that passed the limiter, so it stays within its capacity budget."),
      n("reject", 680, 220, "429 Too Many", "Retry-After", "client", "Rejected requests get HTTP 429 with a Retry-After hint, turning overload into graceful backpressure instead of a crash."),
      n("metrics", 440, 280, "Metrics", "Prometheus", "observability", "Allow/deny rates and bucket saturation are exported so thresholds can be tuned from real traffic."),
    ],
    edges: [
      e("clients", "gw"),
      e("gw", "limiter", "check"),
      e("limiter", "redis", "incr/ttl"),
      e("limiter", "svc", "allow"),
      e("limiter", "reject", "deny"),
      e("limiter", "metrics"),
    ],
  },
  urlshortener: {
    title: "URL Shortener",
    blurb: "Write-once / read-heavy service — the classic split-path design.",
    nodes: [
      n("client", 0, 140, "Client", "browser / API", "client", "Two very different paths: a rare write (create a short link) and a hot read (resolve and redirect)."),
      n("write", 220, 40, "Shorten API", "POST /urls", "service", "Validates the long URL, requests a unique code, and persists the mapping."),
      n("idgen", 440, 40, "ID Generator", "base62 counter", "service", "A monotonic counter encoded in base62 yields short, collision-free codes without coordination on every request."),
      n("db", 680, 140, "Datastore", "Postgres + KV", "store", "Source of truth for code → URL mappings. Reads are served from cache, so the DB mostly takes writes."),
      n("read", 220, 240, "Redirect API", "GET /:code", "service", "Looks up the code and returns a 301/302. This path must be fast and cheap because it dominates traffic."),
      n("cache", 440, 240, "Cache", "Redis", "store", "Hot codes are cached to keep redirects sub-millisecond; a miss falls through to the datastore and back-fills."),
    ],
    edges: [
      e("client", "write"),
      e("write", "idgen", "next id"),
      e("idgen", "db", "store"),
      e("client", "read"),
      e("read", "cache", "lookup"),
      e("cache", "db", "on miss"),
    ],
  },
  chat: {
    title: "Realtime Chat",
    blurb: "Fan-out messaging over WebSockets with pub/sub across stateless nodes.",
    nodes: [
      n("clients", 0, 120, "Clients", "WebSocket", "client", "Persistent WebSocket connections. The hard part is that any two users may be connected to different gateway nodes."),
      n("gw", 220, 120, "WS Gateway", "sticky sessions", "service", "Holds live connections. Stateless beyond the socket itself, so it can scale horizontally behind a sticky load balancer."),
      n("pubsub", 440, 120, "Pub/Sub", "Redis / Kafka", "stream", "Decouples senders from receivers. A message published on a channel fans out to every gateway holding a subscriber."),
      n("msgsvc", 680, 40, "Message Service", "ordering · persistence", "service", "Persists messages and assigns per-channel ordering so history is consistent and replayable."),
      n("db", 900, 40, "Datastore", "Cassandra", "store", "Write-optimised, partitioned by channel — a good fit for append-heavy chat history."),
      n("presence", 680, 220, "Presence", "Redis", "store", "Heartbeats track who is online; TTLs expire stale connections without an explicit disconnect."),
    ],
    edges: [
      e("clients", "gw"),
      e("gw", "pubsub", "publish"),
      e("pubsub", "msgsvc", "persist"),
      e("msgsvc", "db"),
      e("gw", "presence", "heartbeat"),
      e("pubsub", "gw", "deliver"),
    ],
  },
};

interface Props {
  isVisible: (id: string) => boolean;
}

export function SystemDesignSection({ isVisible }: Props) {
  const [active, setActive] = useState<keyof typeof DIAGRAMS>("ratelimiter");
  const [selected, setSelected] = useState<ArchNodeData | null>(null);
  const diagram = DIAGRAMS[active];

  const nodes = useMemo(() => diagram.nodes, [diagram]);
  const edges = useMemo(() => diagram.edges, [diagram]);

  return (
    <section id="architecture" className="relative py-20 px-6" data-section="architecture">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="System Design"
          description="Canonical architectures I reason about — click any node for the trade-off"
          isVisible={isVisible("architecture")}
        />

        {/* Diagram switcher */}
        <div className="flex justify-center gap-2 mb-6">
          {(Object.keys(DIAGRAMS) as (keyof typeof DIAGRAMS)[]).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                setSelected(null);
              }}
              className="px-5 py-2 rounded-full text-sm font-display font-semibold transition-all duration-200"
              style={{
                background: active === key ? "var(--accent-primary)" : "var(--bg-secondary)",
                color: active === key ? "#fff" : "var(--text-secondary)",
                border: "1px solid var(--border-primary)",
              }}
            >
              {DIAGRAMS[key].title}
            </button>
          ))}
        </div>

        <p className="text-center text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
          {diagram.blurb}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-6">
          {/* Canvas */}
          <div
            className="card rounded-2xl overflow-hidden p-0"
            style={{ height: 460 }}
          >
            <ReactFlow
              key={active}
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              nodesDraggable={false}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
              onNodeClick={(_, node) => setSelected(node.data as unknown as ArchNodeData)}
              onPaneClick={() => setSelected(null)}
            >
              <Background color="var(--border-primary)" gap={20} />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>

          {/* Detail panel */}
          <div className="card rounded-2xl p-6 flex flex-col">
            {selected ? (
              <>
                <span
                  className="chip self-start mb-3"
                  style={{ borderColor: KIND_COLOR[selected.kind], color: KIND_COLOR[selected.kind] }}
                >
                  {selected.kind}
                </span>
                <h3 className="text-xl font-display font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {selected.label}
                </h3>
                <p className="mono text-xs mb-4" style={{ color: "var(--text-secondary)", background: "transparent", padding: 0 }}>
                  {selected.tech}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {selected.detail}
                </p>
              </>
            ) : (
              <div className="m-auto text-center">
                <p className="text-[var(--text-secondary)] text-sm">
                  Click a node to read the technical decision behind it.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

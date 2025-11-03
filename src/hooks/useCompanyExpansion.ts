"use client";
import { useState } from "react";

export function useCompanyExpansion() {
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(
    new Set()
  );

  const toggleCompany = (index: number) => {
    setExpandedCompanies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return { expandedCompanies, toggleCompany };
}

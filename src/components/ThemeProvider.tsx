"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeSwitcher />
      {children}
    </>
  );
}

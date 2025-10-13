"use client";

import { useState } from "react";
import Header from "../ui/header";
import Nav from "../ui/nav";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="h-screen grid grid-cols-[auto_1fr] grid-rows-1">
      <Nav collapsed={collapsed} />
      <div>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="px-5 pt-4 pb-2">{children}</div>
      </div>
    </main>
  );
}

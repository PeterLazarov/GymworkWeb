import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/shared";
import "./base.css";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col h-screen min-h-screen overflow-hidden">
      <header className="bg-primary text-white p-4 border-b border-gray-700 flex justify-between items-center">
        <Button variant="ghost" asChild>
          <Link to="/">
            <h1 className="text-xl font-bold">Gymwork</h1>
          </Link>
        </Button>
      </header>

      <main className="flex flex-col flex-1 p-4 gap-4 items-stretch overflow-hidden">
        {children}
      </main>
    </div>
  );
}

import { SettingsIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/shared";
import "./base.css";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const location = useLocation();

  const isWorkoutPage =
    location.pathname === "/" ||
    !!location.pathname.match(/^\/\d{4}-\d{2}-\d{2}$/);

  return (
    <div className="flex flex-col h-screen min-h-screen overflow-hidden">
      <header className="bg-primary text-white p-4 border-b border-gray-700 grid grid-cols-3">
        <div>
          <Button variant="ghost" asChild>
            <Link to="/">
              <h1 className="text-xl font-bold">Gymwork</h1>
            </Link>
          </Button>
        </div>

        <div className="flex gap-2 justify-center">
          <Button variant={isWorkoutPage ? "secondary" : "ghost"} asChild>
            {isWorkoutPage ? (
              <span className="cursor-default">Workouts</span>
            ) : (
              <Link to="/">Workouts</Link>
            )}
          </Button>
          <Button
            variant={location.pathname === "/history" ? "secondary" : "ghost"}
            asChild
          >
            {location.pathname === "/history" ? (
              <span className="cursor-default">History</span>
            ) : (
              <Link to="/history">History</Link>
            )}
          </Button>
          <Button
            variant={
              location.pathname === "/statistics" ? "secondary" : "ghost"
            }
            asChild
          >
            {location.pathname === "/statistics" ? (
              <span className="cursor-default">Statistics</span>
            ) : (
              <Link to="/statistics">Statistics</Link>
            )}
          </Button>
        </div>

        <div>
          <Button className="float-right" variant="ghost" asChild>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-col flex-1 p-4 gap-4 overflow-hidden">
        {children}
      </main>
    </div>
  );
}

import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    // Using flex pattern for the main container
    <div className="flex flex-col min-h-screen">
      {/* Using css function for custom styles */}
      <header className="bg-gray-800 text-white p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">GymworkWeb</h1>
      </header>

      {/* Using vstack pattern for main content */}
      <main className="flex flex-col flex-1 p-4 gap-4 items-stretch">
        {children}
      </main>

      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        © {new Date().getFullYear()} GymworkWeb
      </footer>
    </div>
  );
}

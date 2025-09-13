import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    // Using flex pattern for the main container
    <div className="flex flex-col min-h-screen">
      {/* Using css function for custom styles */}
      <header className="bg-primary text-white p-4 border-b border-gray-700">
        <a href="/">
          <h1 className="text-xl font-bold">Gymwork</h1>
        </a>
      </header>

      {/* Using vstack pattern for main content */}
      <main className="flex flex-col flex-1 p-4 gap-4 items-stretch">
        {children}
      </main>
    </div>
  );
}

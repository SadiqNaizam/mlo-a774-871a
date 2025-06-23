import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout defines the primary structure for the application dashboard.
 * It orchestrates a fixed sidebar, a fixed header, and a scrollable main content area.
 * This pattern uses padding on the main content wrapper to prevent content from
 * being obscured by the fixed sidebar and header elements.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Renders the fixed sidebar. It's taken out of the normal document flow. */}
      <Sidebar />

      {/* Wrapper for content to the right of the sidebar. `pl-64` makes space for the fixed sidebar. */}
      <div className="pl-64">
        {/* Renders the fixed header, which will be positioned within this padded space. */}
        <Header />

        {/* The main content area where page-specific components are rendered. */}
        <main
          className={cn(
            'min-h-screen p-6 pt-16', // p-6 for content padding, pt-16 for header height offset
            className
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;

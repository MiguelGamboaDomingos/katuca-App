import React from 'react';
import { Layout } from 'lucide-react';
import { DashboardNavbar } from './DashboardNavbar';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
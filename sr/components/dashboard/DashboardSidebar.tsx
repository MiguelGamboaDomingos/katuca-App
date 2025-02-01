import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Blocks, Activity, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Blocks, label: 'Blocks', path: '/dashboard/blocks' },
  { icon: Activity, label: 'Transactions', path: '/dashboard/transactions' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              location.pathname === path
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
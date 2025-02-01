import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Layout } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function DashboardNavbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold text-white">
              Blockchain Monitor
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-300 mr-4">{user?.name}</span>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
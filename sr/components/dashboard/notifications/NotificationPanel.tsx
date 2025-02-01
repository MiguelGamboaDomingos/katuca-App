import React from 'react';
import { Bell } from 'lucide-react';

interface Notification {
  id: string;
  type: 'block' | 'transaction' | 'network';
  message: string;
  timestamp: number;
}

interface NotificationPanelProps {
  notifications: Notification[];
}

export function NotificationPanel({ notifications }: NotificationPanelProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        <Bell className="h-5 w-5 text-blue-400" />
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-600"
          >
            <div className="flex-1">
              <p className="text-sm text-white">{notification.message}</p>
              <p className="text-xs text-gray-400">
                {new Date(notification.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
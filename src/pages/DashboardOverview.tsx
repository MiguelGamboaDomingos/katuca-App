import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { BlockList } from '../components/dashboard/blocks/BlockList';
import { NetworkStatsCard } from '../components/dashboard/stats/NetworkStatsCard';
import { BlockTimeChart } from '../components/dashboard/charts/BlockTimeChart';
import { NotificationPanel } from '../components/dashboard/notifications/NotificationPanel';

// Mock data - Substituir por chamadas API reais
const mockBlocks = [
  {
    number: 1000000,
    hash: '0x1234567890abcdef',
    size: 1024,
    timestamp: Date.now(),
    weight: 4000,
    merkleRoot: '0xabcdef1234567890',
    nonce: '123456',
    transactions: []
  },
];

const mockStats = {
  hashRate: 150e15,
  difficulty: 23456789,
  lastBlock: 1000000,
  avgBlockTime: 600,
  pendingTransactions: 150
};

const mockNotifications = [
  {
    id: '1',
    type: 'block',
    message: 'Novo bloco #1000000 minerado',
    timestamp: Date.now()
  },
];

export function DashboardOverview() {
  const handleSort = (field: string) => {
    console.log('Ordenando por:', field);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <NetworkStatsCard stats={mockStats} />
          <div className="lg:col-span-2">
            <BlockTimeChart blocks={mockBlocks} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Últimos Blocos</h2>
              <BlockList blocks={mockBlocks} onSort={handleSort} />
            </div>
          </div>
          <div>
            <NotificationPanel notifications={mockNotifications} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
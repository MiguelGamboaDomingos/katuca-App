import React from 'react';
import { Activity } from 'lucide-react';
import { NetworkStats } from '../../../types/blockchain';
import { formatHashRate } from '../../../utils/format';

interface NetworkStatsCardProps {
  stats: NetworkStats;
}

export function NetworkStatsCard({ stats }: NetworkStatsCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Network Status</h3>
        <Activity className="h-5 w-5 text-blue-400" />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400">Hash Rate</p>
          <p className="text-lg font-medium text-white">{formatHashRate(stats.hashRate)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Network Difficulty</p>
          <p className="text-lg font-medium text-white">{stats.difficulty.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Average Block Time</p>
          <p className="text-lg font-medium text-white">{stats.avgBlockTime.toFixed(2)} seconds</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Pending Transactions</p>
          <p className="text-lg font-medium text-white">{stats.pendingTransactions}</p>
        </div>
      </div>
    </div>
  );
}
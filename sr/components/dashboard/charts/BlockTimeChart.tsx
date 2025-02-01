import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Block } from '../../../types/blockchain';

interface BlockTimeChartProps {
  blocks: Block[];
}

export function BlockTimeChart({ blocks }: BlockTimeChartProps) {
  const data = blocks.map((block) => ({
    number: block.number,
    time: block.timestamp,
  }));

  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Block Time Evolution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="number" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: '#374151', border: 'none' }}
              labelStyle={{ color: '#F3F4F6' }}
            />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
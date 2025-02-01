import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpDown, ExternalLink } from 'lucide-react';
import { Block } from '../../../types/blockchain';
import { formatDate } from '../../../utils/format';

interface BlockListProps {
  blocks: Block[];
  onSort: (field: keyof Block) => void;
}

export function BlockList({ blocks, onSort }: BlockListProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase bg-gray-700">
          <tr>
            <th className="px-6 py-3 cursor-pointer" onClick={() => onSort('number')}>
              <div className="flex items-center">
                Block Number
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </div>
            </th>
            <th className="px-6 py-3">Hash</th>
            <th className="px-6 py-3 cursor-pointer" onClick={() => onSort('size')}>
              <div className="flex items-center">
                Size
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </div>
            </th>
            <th className="px-6 py-3 cursor-pointer" onClick={() => onSort('timestamp')}>
              <div className="flex items-center">
                Timestamp
                <ArrowUpDown className="ml-1 h-4 w-4" />
              </div>
            </th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <tr key={block.hash} className="border-b border-gray-700 hover:bg-gray-600">
              <td className="px-6 py-4">{block.number}</td>
              <td className="px-6 py-4 font-mono text-xs">
                {block.hash.substring(0, 16)}...
              </td>
              <td className="px-6 py-4">{block.size} bytes</td>
              <td className="px-6 py-4">{formatDate(block.timestamp)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => navigate(`/dashboard/blocks/${block.number}`)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
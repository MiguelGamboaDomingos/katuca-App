import React from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Hash, Clock, Database, Binary } from 'lucide-react';

export function BlockDetails() {
  const { blockNumber } = useParams();

  // Mock data - Substituir por chamada API real
  const blockDetails = {
    number: parseInt(blockNumber || '0'),
    hash: '0x1234567890abcdef',
    timestamp: Date.now(),
    size: 1024,
    merkleRoot: '0xabcdef1234567890',
    nonce: '123456',
    transactions: [
      {
        id: '0xtx1',
        amount: 1.5,
        fee: 0.0001,
        status: 'confirmed',
        timestamp: Date.now()
      }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">
          Detalhes do Bloco #{blockNumber}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Informações Básicas
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Hash className="h-5 w-5 text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Hash do Bloco</p>
                  <p className="text-white font-mono">{blockDetails.hash}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Timestamp</p>
                  <p className="text-white">
                    {new Date(blockDetails.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Tamanho</p>
                  <p className="text-white">{blockDetails.size} bytes</p>
                </div>
              </div>
              <div className="flex items-center">
                <Binary className="h-5 w-5 text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Nonce</p>
                  <p className="text-white font-mono">{blockDetails.nonce}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Transações
            </h2>
            <div className="space-y-4">
              {blockDetails.transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  <p className="text-sm text-gray-400">ID da Transação</p>
                  <p className="text-white font-mono mb-2">{tx.id}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Valor</p>
                      <p className="text-white">{tx.amount} BTC</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Taxa</p>
                      <p className="text-white">{tx.fee} BTC</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
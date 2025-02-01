import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, MapPin, Star } from 'lucide-react';

interface Transaction {
  id: number;
  type: 'venda' | 'compra';
  material: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  counterparty: {
    name: string;
    image: string;
  };
  details: {
    weight: number;
    quality: string;
    location: string;
    description: string;
    images: string[];
  };
}

const mockTransactions: Transaction[] = [
  {
    id: 1,
    type: 'venda',
    material: 'Alumínio',
    amount: 250000,
    date: '15 Mar 2024',
    status: 'completed',
    counterparty: {
      name: 'Maria Santos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    details: {
      weight: 500,
      quality: 'Bom',
      location: 'Luanda, Angola',
      description: 'Lote de alumínio em excelente estado',
      images: [
        'https://images.unsplash.com/photo-1605557202138-097824c36ed3?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500'
      ]
    }
  },
  {
    id: 2,
    type: 'compra',
    material: 'Ferro',
    amount: 420000,
    date: '10 Mar 2024',
    status: 'completed',
    counterparty: {
      name: 'João Silva',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    details: {
      weight: 1000,
      quality: 'Regular',
      location: 'Viana, Angola',
      description: 'Ferro fundido para reciclagem',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500'
      ]
    }
  }
];

export function HistoryScreen() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  if (selectedTransaction) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-card border-b border-border px-4 py-6 flex items-center">
          <button
            onClick={() => setSelectedTransaction(null)}
            className="mr-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Detalhes da Transação</h1>
        </div>

        <div className="p-4 space-y-6">
          {/* Transaction Header */}
          <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedTransaction.counterparty.image}
                alt={selectedTransaction.counterparty.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-foreground">{selectedTransaction.counterparty.name}</p>
                <p className="text-sm text-muted-foreground">{selectedTransaction.date}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className={`text-sm font-medium ${
                selectedTransaction.type === 'venda' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
              }`}>
                {selectedTransaction.type === 'venda' ? 'Venda de' : 'Compra de'} {selectedTransaction.material}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {selectedTransaction.amount.toLocaleString('pt-AO')} Kz
              </p>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="bg-card rounded-lg p-4 shadow-sm border border-border space-y-4">
            <h2 className="font-semibold text-foreground">Detalhes do Material</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Peso</p>
                <p className="font-medium text-foreground">{selectedTransaction.details.weight} kg</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Qualidade</p>
                <p className="font-medium text-foreground">{selectedTransaction.details.quality}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Localização</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <p className="font-medium text-foreground">{selectedTransaction.details.location}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Descrição</p>
              <p className="mt-1 text-foreground">{selectedTransaction.details.description}</p>
            </div>
          </div>

          {/* Images */}
          <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
            <h2 className="font-semibold mb-4 text-foreground">Fotos do Material</h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedTransaction.details.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Material ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card px-4 py-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">Histórico</h1>
      </div>

      <div className="p-4 space-y-4">
        {mockTransactions.map(transaction => (
          <div
            key={transaction.id}
            className="bg-card rounded-lg shadow-sm p-4 border border-border flex items-center gap-4 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => setSelectedTransaction(transaction)}
          >
            <img
              src={transaction.counterparty.image}
              alt={transaction.counterparty.name}
              className="w-12 h-12 rounded-full"
            />
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className={`text-sm font-medium ${
                    transaction.type === 'venda' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {transaction.type === 'venda' ? 'Venda de' : 'Compra de'} {transaction.material}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {transaction.amount.toLocaleString('pt-AO')} Kz
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{transaction.date}</span>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  {transaction.type === 'venda' ? 'Vendido para' : 'Comprado de'}{' '}
                  {transaction.counterparty.name}
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
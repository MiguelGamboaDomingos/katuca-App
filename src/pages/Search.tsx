import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de busca
    if (searchQuery.match(/^\d+$/)) {
      navigate(`/dashboard/blocks/${searchQuery}`);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">
          Buscar Blocos e Transações
        </h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite o número do bloco, hash do bloco ou ID da transação"
              className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Buscar
          </button>
        </form>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Como Buscar
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>Você pode buscar por:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Número do bloco (ex: 680000)</li>
              <li>Hash do bloco (ex: 0x...)</li>
              <li>ID da transação (ex: 0x...)</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
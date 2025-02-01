import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Bell, Clock, Database } from 'lucide-react';

export function Settings() {
  const [settings, setSettings] = useState({
    updateInterval: 30,
    notifications: {
      newBlocks: true,
      largeTransactions: true,
      networkChanges: false
    },
    apiEndpoint: 'public'
  });

  const handleSave = () => {
    // Implementar lógica para salvar configurações
    console.log('Salvando configurações:', settings);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">
          Configurações
        </h1>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">
                Intervalo de Atualização
              </h2>
            </div>
            <select
              value={settings.updateInterval}
              onChange={(e) => setSettings({
                ...settings,
                updateInterval: parseInt(e.target.value)
              })}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value={10}>10 segundos</option>
              <option value={30}>30 segundos</option>
              <option value={60}>1 minuto</option>
            </select>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">
                Notificações
              </h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.notifications.newBlocks}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      newBlocks: e.target.checked
                    }
                  })}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-white">Novos Blocos</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.notifications.largeTransactions}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      largeTransactions: e.target.checked
                    }
                  })}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-white">Transações Grandes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.notifications.networkChanges}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      networkChanges: e.target.checked
                    }
                  })}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-white">Mudanças na Rede</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="h-5 w-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">
                Fonte de Dados
              </h2>
            </div>
            <select
              value={settings.apiEndpoint}
              onChange={(e) => setSettings({
                ...settings,
                apiEndpoint: e.target.value
              })}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="public">API Pública</option>
              <option value="local">Node Local</option>
            </select>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Salvar Configurações
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
import React from 'react';
import { MapPin, Package } from 'lucide-react';

const scrapCategories = [
  { name: 'Ferro', price: 800, icon: Package },
  { name: 'Alumínio', price: 3500, icon: Package },
  { name: 'Cobre', price: 12000, icon: Package },
];

export function Dashboard() {
  return (
    <div className="pb-16">
      {/* Welcome Banner */}
      <div 
        className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover'
        }}
      >
        <h1 className="text-2xl font-bold mb-2">Bem-vindo ao Katuca</h1>
        <p className="text-green-50">Compre e venda sucata de forma sustentável</p>
      </div>

      {/* Categories */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
        <div className="space-y-4">
          {scrapCategories.map((category) => (
            <div
              key={category.name}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-green-100"
            >
              <category.icon className="w-8 h-8 text-green-600 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">
                  R$ {category.price}/tonelada
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Map */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Compradores Próximos</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-gray-500">Mapa será carregado aqui</span>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Star, Settings, X, Edit } from 'lucide-react';
import { SettingsScreen } from './SettingsScreen';

interface ProfileScreenProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  onLogout: () => void;
}

const mockListings = [
  {
    id: 1,
    title: 'Lote de Ferro Fundido',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    title: 'Sucata de Alumínio',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1605557202138-097824c36ed3?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    title: 'Cobre Industrial',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1605557202138-097824c36ed3?auto=format&fit=crop&q=80&w=500'
  }
];

export function ProfileScreen({ theme, onThemeChange, onLogout }: ProfileScreenProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const profileImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80";

  if (showSettings) {
    return (
      <SettingsScreen
        theme={theme}
        onThemeChange={onThemeChange}
        onBack={() => setShowSettings(false)}
        onLogout={onLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="w-full relative">
        <img
          src={profileImage}
          alt="Profile"
          onClick={() => setShowFullImage(true)}
          className="w-full h-64 object-cover cursor-pointer"
        />
      </div>

      {showFullImage && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowFullImage(false)}
              className="absolute -top-12 right-0 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={profileImage}
              alt="Profile"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="p-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">João Silva</h1>
            <p className="text-sm text-muted-foreground">Tipo de Usuário: Vendedor</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3 text-foreground">Histórico de Transações</h2>
            <div className="space-y-3">
              <div className="bg-card p-3 rounded-lg">
                <p className="font-medium text-foreground">Venda de Alumínio</p>
                <p className="text-sm text-muted-foreground">Recebido: Kz 5040,00</p>
              </div>
              <div className="bg-card p-3 rounded-lg">
                <p className="font-medium text-foreground">Compra de Ferro</p>
                <p className="text-sm text-muted-foreground">Pago: Kz 2000,00</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3 text-foreground">Avaliações e Comentários</h2>
            <div className="bg-card p-3 rounded-lg">
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-foreground">4.8</span>
              </div>
              <p className="font-medium text-foreground">Leonel Francisco</p>
              <p className="text-sm text-muted-foreground">Ótimo vendedor!</p>
            </div>
          </div>

          {/* User Listings */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-foreground">Meus Anúncios</h2>
            <div className="grid grid-cols-2 gap-4">
              {mockListings.map(listing => (
                <div
                  key={listing.id}
                  className="bg-card rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-2">
                    <h3 className="font-medium text-sm text-foreground line-clamp-1">{listing.title}</h3>
                    <p className="text-sm font-bold text-primary">
                      {listing.price.toLocaleString('pt-AO')} Kz
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {/* Handle edit profile */}}
              className="w-full flex items-center justify-center gap-2 bg-card text-card-foreground py-3 rounded-lg border border-border"
            >
              <Edit className="w-5 h-5" />
              <span>Editar Perfil</span>
            </button>

            <button
              onClick={() => setShowSettings(true)}
              className="w-full flex items-center justify-center gap-2 bg-card text-card-foreground py-3 rounded-lg border border-border"
            >
              <Settings className="w-5 h-5" />
              <span>Definições</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
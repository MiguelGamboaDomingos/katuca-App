import React, { useState } from 'react';
import { MapPin, Star, MessageCircle, Search, Bell, SlidersHorizontal, Map, X, Filter, ChevronRight } from 'lucide-react';

const mockListings = [
  {
    id: 1,
    title: 'Lote de Ferro Fundido',
    type: 'Ferro',
    weight: 500,
    price: 150000,
    quality: 'good',
    distance: 2.5,
    location: { lat: -8.838333, lng: 13.234444 },
    seller: {
      id: 1,
      name: 'João Silva',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500',
    ],
    description: 'Lote de ferro fundido em ótimo estado, ideal para reciclagem.'
  },
  {
    id: 2,
    title: 'Sucata de Alumínio',
    type: 'Alumínio',
    weight: 200,
    price: 580000,
    quality: 'fair',
    distance: 3.8,
    location: { lat: -8.848333, lng: 13.244444 },
    seller: {
      id: 2,
      name: 'Maria Santos',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    images: [
      'https://images.unsplash.com/photo-1605557202138-097824c36ed3?auto=format&fit=crop&q=80&w=500',
    ],
    description: 'Alumínio reciclável, preço negociável.'
  },
  {
    id: 3,
    title: 'Cobre Industrial',
    type: 'Cobre',
    weight: 150,
    price: 890000,
    quality: 'good',
    distance: 1.2,
    location: { lat: -8.828333, lng: 13.224444 },
    seller: {
      id: 3,
      name: 'Pedro Costa',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    images: [
      'https://images.unsplash.com/photo-1605557202138-097824c36ed3?auto=format&fit=crop&q=80&w=500',
    ],
    description: 'Cobre de alta qualidade, origem industrial verificada.'
  },
  {
    id: 4,
    title: 'Latão Misto',
    type: 'Latão',
    weight: 300,
    price: 420000,
    quality: 'fair',
    distance: 4.5,
    location: { lat: -8.858333, lng: 13.254444 },
    seller: {
      id: 4,
      name: 'Ana Oliveira',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500',
    ],
    description: 'Lote misto de latão, várias origens.'
  }
];

const mockNotifications = [
  {
    id: 1,
    type: 'new_listing',
    title: 'Novo anúncio de Ferro',
    message: 'Um novo lote de ferro foi publicado próximo a você',
    time: '5 min'
  },
  {
    id: 2,
    type: 'price_update',
    title: 'Atualização de preço',
    message: 'O preço do lote de alumínio foi reduzido',
    time: '1h'
  },
  {
    id: 3,
    type: 'message',
    title: 'Nova mensagem',
    message: 'João Silva respondeu sua proposta',
    time: '2h'
  }
];

interface Filters {
  type: string;
  minPrice: string;
  maxPrice: string;
  quality: string;
  maxDistance: string;
}

export function BuyScreen() {
  const [showMap, setShowMap] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedListing, setSelectedListing] = useState<typeof mockListings[0] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    type: '',
    minPrice: '',
    maxPrice: '',
    quality: '',
    maxDistance: ''
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  if (selectedListing) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border sticky top-0 z-10">
          <div className="p-4 flex items-center">
            <button
              onClick={() => setSelectedListing(null)}
              className="mr-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-foreground">Detalhes do Anúncio</h1>
          </div>
        </div>

        {/* Content */}
        <div className="pb-16">
          {/* Images */}
          <div className="aspect-square relative">
            <img
              src={selectedListing.images[0]}
              alt={selectedListing.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Listing Info */}
          <div className="p-4 space-y-6">
            <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground">{selectedListing.title}</h2>
                  <p className="text-2xl font-bold text-primary mt-2">
                    {selectedListing.price.toLocaleString('pt-AO')} Kz/ton
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium text-foreground">{selectedListing.seller.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Peso</p>
                  <p className="font-medium text-foreground">{selectedListing.weight} kg</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Qualidade</p>
                  <p className="font-medium text-foreground">
                    {selectedListing.quality === 'good' ? 'Bom' :
                     selectedListing.quality === 'fair' ? 'Regular' : 'Ruim'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{selectedListing.distance} km de distância</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedListing.seller.image}
                    alt={selectedListing.seller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-foreground">{selectedListing.seller.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-foreground">{selectedListing.seller.rating}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {/* Navigate to seller profile */}}
                  className="text-primary"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
              <h3 className="font-semibold text-foreground mb-2">Descrição</h3>
              <p className="text-muted-foreground">{selectedListing.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Negociar
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      {/* Search and Filter Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Explorar materiais..."
                className="w-full p-3 pl-10 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-3 text-muted-foreground hover:text-primary relative"
              >
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-60 bg-card rounded-lg shadow-lg border border-border z-20">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Notificações</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.map(notification => (
                      <div
                        key={notification.id}
                        className="p-4 border-b border-border hover:bg-accent transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-foreground">{notification.title}</h4>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="p-3 text-muted-foreground hover:text-primary"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
              {['Todos', 'Ferro', ' Alumínio', 'Cobre', 'Latão'].map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    filter === 'Todos'
                      ? 'bg-primary text-primary-foreground transform scale-105'
                      : 'bg-accent text-foreground hover:bg-accent/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`ml-2 p-2 rounded-full transition-all duration-300 ${
                showMap ? 'bg-primary text-primary-foreground' : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              <Map className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Filtros</h2>
              <button onClick={() => setShowFilters(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Material
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                >
                  <option value="">Todos</option>
                  <option value="ferro">Ferro</option>
                  <option value="aluminio">Alumínio</option>
                  <option value="cobre">Cobre</option>
                  <option value="latao">Latão</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Faixa de Preço (Kz)
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Mín"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="flex-1 p-3 bg-background border border-border rounded-lg text-foreground"
                  />
                  <input
                    type="number"
                    placeholder="Máx"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="flex-1 p-3 bg-background border border-border rounded-lg text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Qualidade
                </label>
                <select
                  value={filters.quality}
                  onChange={(e) => handleFilterChange('quality', e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                >
                  <option value="">Todas</option>
                  <option value="good">Boa</option>
                  <option value="fair">Regular</option>
                  <option value="poor">Ruim</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Distância Máxima (km)
                </label>
                <input
                  type="number"
                  value={filters.maxDistance}
                  onChange={(e) => handleFilterChange('maxDistance', e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                  placeholder="Ex: 10"
                />
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}

      {showMap ? (
        <div className="h-[calc(100vh-180px)] bg-background p-4">
          <div className="w-full h-full bg-card rounded-lg shadow-sm flex items-center justify-center border border-border">
            <div className="text-center text-muted-foreground">
              <Map className="w-12 h-12 mx-auto mb-2" />
              <p>Mapa com localização dos vendedores</p>
              <p className="text-sm">Em breve</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {mockListings.map(listing => (
              <div
                key={listing.id}
                className="bg-card rounded-lg shadow-sm border border-border overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                onClick={() => setSelectedListing(listing)}
              >
                {/* Image */}
                <div className="aspect-square relative">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-foreground">
                    {listing.distance} km
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="mb-2">
                    <h3 className="font-semibold text-sm line-clamp-1 text-foreground">{listing.title}</h3>
                    <p className="text-sm font-bold text-primary">
                      {listing.price.toLocaleString('pt-AO')} Kz/ton
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={listing.seller.image}
                        alt={listing.seller.name}
                        className="w-6 h-6 rounded-full mr-1"
                      />
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                        <span className="text-xs text-muted-foreground">{listing.seller.rating}</span>
                      </div>
                    </div>

                    <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
                      Negociar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
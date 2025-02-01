import React, { useState } from 'react';
import { Camera, MapPin, Upload, X, Search } from 'lucide-react';

interface SellFormData {
  type: string;
  weight: string;
  quality: 'good' | 'fair' | 'poor';
  description: string;
  images: string[];
  location: {
    address: string;
    lat: number;
    lng: number;
  };
}

export function SellScreen() {
  const [formData, setFormData] = useState<SellFormData>({
    type: '',
    weight: '',
    quality: 'good',
    description: '',
    images: [],
    location: {
      address: 'Luanda, Angola',
      lat: -8.838333,
      lng: 13.234444
    }
  });
  const [showLocationSearch, setShowLocationSearch] = useState(false);

  const materialTypes = ['Ferro', 'Alumínio', 'Cobre', 'Latão', 'Inox'];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleLocationSelect = (address: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        address
      }
    }));
    setShowLocationSearch(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Vender Sucata</h1>

      <form className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Fotos do Material</label>
          <div className="grid grid-cols-3 gap-2">
            {formData.images.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <img src={img} alt="Material" className="w-full h-full object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-destructive rounded-full text-destructive-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            {formData.images.length < 6 && (
              <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-card">
                <Camera className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground mt-1">Adicionar</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
          </div>
        </div>

        {/* Material Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Tipo de Material</label>
          <select
            value={formData.type}
            onChange={e => setFormData(prev => ({ ...prev, type: e.target.value }))}
            className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
          >
            <option value="">Selecione o material</option>
            {materialTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Peso Estimado (kg)</label>
          <input
            type="number"
            value={formData.weight}
            onChange={e => setFormData(prev => ({ ...prev, weight: e.target.value }))}
            className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
            placeholder="Ex: 100"
          />
        </div>

        {/* Quality */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Qualidade do Material</label>
          <div className="grid grid-cols-3 gap-2">
            {(['good', 'fair', 'poor'] as const).map(quality => (
              <button
                key={quality}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, quality }))}
                className={`p-2 rounded-lg border ${
                  formData.quality === quality
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary bg-card text-foreground'
                }`}
              >
                {quality === 'good' && 'Bom'}
                {quality === 'fair' && 'Regular'}
                {quality === 'poor' && 'Ruim'}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Descrição</label>
          <textarea
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
            rows={4}
            placeholder="Descreva o material, estado de conservação, etc."
          />
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-1">Localização</label>
          <div className="relative">
            <input
              type="text"
              value={formData.location.address}
              onClick={() => setShowLocationSearch(true)}
              className="w-full p-3 pl-10 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              placeholder="Buscar endereço..."
              readOnly
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          {showLocationSearch && (
            <div className="absolute z-10 mt-1 w-full bg-card rounded-lg shadow-lg border border-border">
              <div className="p-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-2 pl-8 bg-card border border-border rounded-lg text-foreground"
                    placeholder="Pesquisar endereço..."
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              <div className="border-t border-border">
                {[
                  'Luanda, Angola',
                  'Viana, Luanda',
                  'Talatona, Luanda',
                  'Benfica, Luanda'
                ].map((address) => (
                  <button
                    key={address}
                    className="w-full text-left px-4 py-2 hover:bg-accent transition-colors text-foreground"
                    onClick={() => handleLocationSelect(address)}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{address}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Publicar Anúncio
        </button>
      </form>
    </div>
  );
}
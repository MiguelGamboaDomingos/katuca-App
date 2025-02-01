import React from 'react';
import { Search, PlusSquare, History, MessageCircle, User } from 'lucide-react';

interface BottomNavProps {
  active: 'explore' | 'sell' | 'history' | 'chat' | 'profile';
  onNavigate: (page: 'explore' | 'sell' | 'history' | 'chat' | 'profile') => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems = [
    { icon: Search, label: 'Explorar', value: 'explore' },
    { icon: PlusSquare, label: 'Vender', value: 'sell' },
    { icon: History, label: 'Histórico', value: 'history' },
    { icon: MessageCircle, label: 'Chat', value: 'chat' },
    { icon: User, label: 'Perfil', value: 'profile' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, value }) => (
          <button
            key={value}
            onClick={() => onNavigate(value)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
              active === value
                ? 'text-primary transform scale-110'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Icon className={`w-6 h-6 transition-transform duration-300 ${
              active === value ? 'transform -translate-y-1' : ''
            }`} />
            <span className={`text-xs mt-1 transition-opacity duration-300 ${
              active === value ? 'opacity-100' : 'opacity-70'
            }`}>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
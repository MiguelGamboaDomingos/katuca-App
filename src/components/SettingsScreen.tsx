import React, { useState } from 'react';
import {
  ArrowLeft,
  Sun,
  Moon,
  CreditCard,
  Shield,
  LogOut,
  Trash2,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

interface SettingsScreenProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  onBack: () => void;
  onLogout: () => void;
  showHeader?: boolean;
}

export function SettingsScreen({
  theme,
  onThemeChange,
  onBack,
  onLogout,
  showHeader = true
}: SettingsScreenProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="bg-background">
      {showHeader && (
        <div className="bg-card px-4 py-6 flex items-center border-b border-border">
          <button
            onClick={onBack}
            className="mr-4 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Definições</h1>
        </div>
      )}

      {/* Settings List */}
      <div className="p-4 space-y-6">
        {/* Theme Toggle */}
        <div className="bg-card rounded-lg shadow-sm border">
          <button
            onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
            className="w-full p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
              <div className="text-left">
                <p className="font-medium">Tema</p>
                <p className="text-sm text-muted-foreground">
                  {theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Payment Methods */}
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Métodos de Pagamento</h2>
          </div>
          <div className="divide-y">
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Cartões de Pagamento</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>Pagamentos Seguros</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Policies */}
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Políticas e Privacidade</h2>
          </div>
          <div className="divide-y">
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <span>Termos de Uso</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <span>Política de Privacidade</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <span>Sobre o Katuca</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="space-y-4">
          <button
            onClick={onLogout}
            className="w-full p-4 bg-card rounded-lg shadow-sm border flex items-center justify-center gap-2 hover:bg-accent/50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair da Conta</span>
          </button>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full p-4 bg-destructive text-destructive-foreground rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
            <span>Eliminar Conta</span>
          </button>
        </div>
      </div>

      {/* Delete Account Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-destructive/10 rounded-full">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold">Eliminar Conta</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Esta ação é irreversível. Todos os seus dados serão permanentemente eliminados.
              Tem certeza que deseja continuar?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 px-4 border border-input rounded-lg hover:bg-accent transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  onLogout();
                }}
                className="flex-1 py-2 px-4 bg-destructive text-destructive-foreground rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
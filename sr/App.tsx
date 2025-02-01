import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { SellScreen } from './components/SellScreen';
import { BuyScreen } from './components/BuyScreen';
import { ChatScreen } from './components/ChatScreen';
import { BottomNav } from './components/BottomNav';
import { SplashScreen } from './components/SplashScreen';
import { AuthScreen } from './components/AuthScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { SettingsScreen } from './components/SettingsScreen';

type Page = 'explore' | 'sell' | 'history' | 'chat' | 'profile';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('explore');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [splashStep, setSplashStep] = useState(1);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if user has seen splash screens
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }

    // Simulate splash screen loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSplashComplete = () => {
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('explore');
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  if (showSplash) {
    return (
      <div className="min-h-screen bg-background">
        {splashStep === 1 && (
          <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=300"
                alt="Recycle"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">Bem-vindo ao Katuca</h1>
            <p className="text-muted-foreground mb-8">
              A plataforma que conecta compradores e vendedores de materiais recicláveis
            </p>
            <button
              onClick={() => setSplashStep(2)}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Próximo
            </button>
          </div>
        )}

        {splashStep === 2 && (
          <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=300"
                alt="Sustainability"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">Negociação Segura</h1>
            <p className="text-muted-foreground mb-8">
              Compre e venda materiais recicláveis de forma segura e transparente
            </p>
            <button
              onClick={() => setSplashStep(3)}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Próximo
            </button>
          </div>
        )}

        {splashStep === 3 && (
          <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=300"
                alt="Community"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">Impacto Ambiental</h1>
            <p className="text-muted-foreground mb-8">
              Contribua para um mundo mais sustentável através da reciclagem
            </p>
            <button
              onClick={handleSplashComplete}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Começar
            </button>
          </div>
        )}

        {/* Progress Dots */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                step === splashStep ? 'bg-primary w-4' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="pb-16">
        {currentPage === 'explore' && <BuyScreen />}
        {currentPage === 'sell' && <SellScreen />}
        {currentPage === 'history' && <HistoryScreen />}
        {currentPage === 'chat' && <ChatScreen />}
        {currentPage === 'profile' && (
          <ProfileScreen
            theme={theme}
            onThemeChange={setTheme}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav active={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
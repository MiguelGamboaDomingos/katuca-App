import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { SellScreen } from './components/SellScreen';
import { BuyScreen } from './components/BuyScreen';
import { ChatScreen } from './components/ChatScreen';
import { BottomNav } from './components/BottomNav';
import { SplashScreen } from './components/SplashScreen';
import { WelcomeScreens } from './components/WelcomeScreens';
import { AuthScreen } from './components/AuthScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { HistoryScreen } from './components/HistoryScreen';

type Page = 'explore' | 'sell' | 'history' | 'chat' | 'profile';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('explore');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }

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

  const handleWelcomeComplete = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  if (showWelcome) {
    return <WelcomeScreens onComplete={handleWelcomeComplete} />;
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-16">
        {currentPage === 'explore' && <BuyScreen />}
        {currentPage === 'sell' && <SellScreen />}
        {currentPage === 'history' && <HistoryScreen />}
        {currentPage === 'chat' && <ChatScreen />}
        {currentPage === 'profile' && (
          <ProfileScreen
            theme={theme}
            onThemeChange={setTheme}
            onLogout={() => setIsAuthenticated(false)}
          />
        )}
      </main>
      <BottomNav active={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
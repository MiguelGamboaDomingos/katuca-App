import React from 'react';
import { Recycle } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-600 flex flex-col items-center justify-center p-4">
      <div className="animate-[bounce_2s_infinite]">
        <Recycle className="w-24 h-24 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-white mt-6 animate-[fadeIn_1s_ease-in]">Katuca</h1>
      <p className="text-green-50 mt-2 text-center animate-[fadeIn_1s_ease-in_0.5s]">
        Compra e venda de sucata de forma sustentável
      </p>
    </div>
  );
}
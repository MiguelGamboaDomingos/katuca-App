import React, { useState } from 'react';
import { Mail, Apple, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface AuthScreenProps {
  onLogin: () => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [authMethod, setAuthMethod] = useState<'select' | 'email' | 'email-password' | 'phone' | 'phone-verify'>('select');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (authMethod === 'email') {
    return (
      <div className="min-h-screen bg-background p-6">
        <button
          onClick={() => setAuthMethod('select')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-foreground mb-6">Entre com seu email</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          setAuthMethod('email-password');
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                placeholder="Digite seu email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (authMethod === 'email-password') {
    return (
      <div className="min-h-screen bg-background p-6">
        <button
          onClick={() => setAuthMethod('email')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-foreground mb-6">Digite sua senha</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground pr-10"
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (authMethod === 'phone') {
    return (
      <div className="min-h-screen bg-background p-6">
        <button
          onClick={() => setAuthMethod('select')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-foreground mb-6">Entre com seu telefone</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          setAuthMethod('phone-verify');
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Número de Telefone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                placeholder="+244"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (authMethod === 'phone-verify') {
    return (
      <div className="min-h-screen bg-background p-6">
        <button
          onClick={() => setAuthMethod('phone')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-foreground mb-6">Verificação</h1>
        <p className="text-muted-foreground mb-6">
          Digite o código de verificação enviado para {phone}
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Código de Verificação
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full p-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                placeholder="Digite o código"
                maxLength={6}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium"
            >
              Verificar
            </button>

            <button
              type="button"
              onClick={() => setVerificationCode('')}
              className="w-full text-primary py-2 text-sm"
            >
              Reenviar código
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-foreground mb-2">Conecte-se a nós</h1>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setAuthMethod('email')}
          className="w-full bg-card text-card-foreground py-4 rounded-lg font-medium border border-border hover:bg-accent transition-colors"
        >
          Usar o email
        </button>

        <button
          onClick={() => setAuthMethod('phone')}
          className="w-full bg-card text-card-foreground py-4 rounded-lg font-medium border border-border hover:bg-accent transition-colors"
        >
          Usar telefone
        </button>

        <button className="w-full bg-card text-card-foreground py-4 rounded-lg font-medium border border-border hover:bg-accent transition-colors">
          Continuar com Facebook
        </button>

        <button className="w-full bg-card text-card-foreground py-4 rounded-lg font-medium border border-border hover:bg-accent transition-colors">
          Continuar com Apple
        </button>

        <button className="w-full bg-card text-card-foreground py-4 rounded-lg font-medium border border-border hover:bg-accent transition-colors">
          Continuar com Google
        </button>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Escolhendo continuar, você concorda com os nossos termos e serviços, a aprender como recolhemos e usamos os seus dados
        </p>
      </div>
    </div>
  );
}
import React from 'react';
import { Send, Phone, MoreVertical, ArrowLeft, Clock } from 'lucide-react';

const mockChats = [
  {
    id: 1,
    user: {
      name: 'João Silva',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
      online: true
    },
    lastMessage: 'Olá, tenho interesse no seu material',
    timestamp: '10:30',
    unread: 2,
    history: [
      { type: 'purchase', date: '2024-03-10', item: 'Ferro Fundido', amount: '150000 Kz' },
      { type: 'sale', date: '2024-02-15', item: 'Alumínio', amount: '580000 Kz' }
    ]
  },
  {
    id: 2,
    user: {
      name: 'Maria Santos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80',
      online: false
    },
    lastMessage: 'Qual o menor preço?',
    timestamp: 'Ontem',
    unread: 0,
    history: [
      { type: 'purchase', date: '2024-03-01', item: 'Cobre', amount: '890000 Kz' }
    ]
  }
];

const mockMessages = [
  {
    id: 1,
    sender: 'other',
    content: 'Olá, tenho interesse no seu material',
    timestamp: '10:30'
  },
  {
    id: 2,
    sender: 'me',
    content: 'Oi! Qual material te interessa?',
    timestamp: '10:31'
  },
  {
    id: 3,
    sender: 'other',
    content: 'O lote de ferro fundido. Ainda está disponível?',
    timestamp: '10:32'
  },
  {
    id: 4,
    sender: 'me',
    content: 'Sim, está! São 500kg no total. Podemos negociar o preço.',
    timestamp: '10:33'
  }
];

export function ChatScreen() {
  const [activeChat, setActiveChat] = React.useState<number | null>(null);
  const [message, setMessage] = React.useState('');
  const [showHistory, setShowHistory] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);

  const handleChatAction = (action: 'accept' | 'reject' | 'end') => {
    // Handle chat actions
    setShowOptions(false);
  };

  if (!activeChat) {
    return (
      <div className="h-screen bg-background">
        <div className="bg-card p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Mensagens</h2>
        </div>
        <div className="divide-y divide-border">
          {mockChats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className="bg-card p-4 flex items-center space-x-4 cursor-pointer hover:bg-accent transition-colors duration-200"
            >
              <div className="relative">
                <img
                  src={chat.user.image}
                  alt={chat.user.name}
                  className="w-12 h-12 rounded-full"
                />
                {chat.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium truncate">{chat.user.name}</h3>
                  <span className="text-sm text-gray-500">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="bg-green-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const chat = mockChats.find(c => c.id === activeChat)!;

  if (showHistory) {
    return (
      <div className="h-screen bg-background">
        <div className="bg-card p-4 border-b border-border flex items-center">
          <button
            onClick={() => setShowHistory(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold">Histórico de Transações</h2>
        </div>
        <div className="p-4 space-y-4">
          {chat.history.map((transaction, index) => (
            <div key={index} className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${
                  transaction.type === 'purchase' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {transaction.type === 'purchase' ? 'Compra' : 'Venda'}
                </span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </div>
              <p className="font-medium">{transaction.item}</p>
              <p className="text-gray-600">{transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Chat Header */}
      <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setActiveChat(null)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center flex-1 ml-4">
          <img
            src={mockChats.find(c => c.id === activeChat)?.user.image}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="font-medium text-foreground">
              {mockChats.find(c => c.id === activeChat)?.user.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {mockChats.find(c => c.id === activeChat)?.user.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowHistory(true)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Clock className="w-5 h-5" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            
            {showOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border z-50">
                <div className="py-1">
                  <button
                    onClick={() => handleChatAction('accept')}
                    className="w-full px-4 py-2 text-left text-foreground hover:bg-accent transition-colors"
                  >
                    Aceitar Negociação
                  </button>
                  <button
                    onClick={() => handleChatAction('reject')}
                    className="w-full px-4 py-2 text-left text-foreground hover:bg-accent transition-colors"
                  >
                    Rejeitar Negociação
                  </button>
                  <button
                    onClick={() => handleChatAction('end')}
                    className="w-full px-4 py-2 text-left text-destructive hover:bg-accent transition-colors"
                  >
                    Terminar Conversa
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 transform transition-all duration-300 animate-[slideIn_0.3s_ease-out] ${
                msg.sender === 'me'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground'
              }`}
            >
              <p>{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
          />
          <button className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

const WelcomeScreen = ({ 
  step, 
  title, 
  description, 
  onNext, 
  onComplete, 
  imageIndex 
}: {
  step: number;
  title: string;
  description: string;
  onNext: () => void;
  onComplete: () => void;
  imageIndex: number;
}) => {
  const images = [
    {
      title: "Transformando Sucata em Valor",
      image: (
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 bg-green-50 rounded-lg">
            <div className="h-full w-full flex items-center justify-center">
              <div className="w-full h-full bg-[url('/welcome-1.png')] bg-cover bg-center rounded-lg" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Encontre Sucatas Perto de Você",
      image: (
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 bg-green-50 rounded-lg">
            <div className="h-full w-full flex items-center justify-center">
              <div className="w-full h-full bg-[url('/welcome-2.png')] bg-cover bg-center rounded-lg" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Localize Catadores em Instantes",
      image: (
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 bg-green-50 rounded-lg">
            <div className="h-full w-full flex items-center justify-center">
              <div className="w-full h-full bg-[url('/welcome-3.png')] bg-cover bg-center rounded-lg" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 p-6">
        {images[imageIndex].image}
        <h1 className="text-2xl font-bold mb-2 text-foreground mt-8">
          {title}
        </h1>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="p-6">
        <button
          onClick={step === 3 ? onComplete : onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition-colors"
        >
          {step === 3 ? 'Começar' : 'Próximo'}
        </button>
      </div>
      
      {/* Progress Dots */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-2">
        {[1, 2, 3].map((dotStep) => (
          <div
            key={dotStep}
            className={`h-2 rounded-full transition-all duration-300 ${
              dotStep === step ? 'bg-green-600 w-4' : 'bg-green-200 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const WelcomeScreens = ({ onComplete }) => {
  const [step, setStep] = React.useState(1);

  const welcomeContent = [
    {
      title: "Transformando Sucata em Valor",
      description: "Conectamos você aos catadores mais próximos para negociar materiais recicláveis"
    },
    {
      title: "Encontre Sucatas Perto de Você",
      description: "Venda seus materiais recicláveis de forma rápida e segura"
    },
    {
      title: "Venda Sucata de Forma Segura e Transparente",
      description: "Negocie diretamente com compradores verificados"
    }
  ];

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <WelcomeScreen
      step={step}
      imageIndex={step - 1}
      title={welcomeContent[step - 1].title}
      description={welcomeContent[step - 1].description}
      onNext={handleNext}
      onComplete={onComplete}
    />
  );
};

export default WelcomeScreens;

import { useState, useEffect } from "react";

export const AnimatedCharacters = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-60 mx-auto">
      {/* Speech Therapist - 25 year old girl */}
      <div className="absolute left-8 bottom-8">
        <div className="relative">
          {/* Head */}
          <div className="w-16 h-16 bg-warm rounded-full relative border-2 border-warm-foreground/20">
            {/* Hair */}
            <div className="absolute -top-2 -left-2 w-20 h-12 bg-amber-600 rounded-full"></div>
            {/* Face features */}
            <div className="absolute top-4 left-3 w-2 h-2 bg-foreground rounded-full"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-foreground rounded-full"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-rose-400 rounded-full"></div>
          </div>
          
          {/* Body */}
          <div className="w-12 h-20 bg-primary rounded-lg mx-auto mt-2 relative">
            {/* Arms */}
            <div className={`absolute -left-6 top-4 w-4 h-12 bg-warm rounded-full transition-transform duration-500 ${
              isAnimating ? 'rotate-12' : 'rotate-0'
            }`}></div>
            <div className={`absolute -right-6 top-4 w-4 h-12 bg-warm rounded-full transition-transform duration-500 ${
              isAnimating ? '-rotate-12' : 'rotate-0'
            }`}></div>
          </div>
          
          {/* Legs */}
          <div className="flex gap-2 justify-center mt-1">
            <div className="w-3 h-16 bg-gray-600 rounded-lg"></div>
            <div className="w-3 h-16 bg-gray-600 rounded-lg"></div>
          </div>
        </div>
        
        {/* Speech bubble from therapist */}
        <div className={`absolute -top-8 -right-4 bg-accent px-3 py-2 rounded-lg shadow-soft transition-opacity duration-500 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-xs font-medium text-accent-foreground whitespace-nowrap">Say "Hello"!</p>
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent"></div>
        </div>
      </div>

      {/* Child */}
      <div className="absolute right-8 bottom-8">
        <div className="relative">
          {/* Head */}
          <div className="w-12 h-12 bg-warm rounded-full relative border-2 border-warm-foreground/20">
            {/* Hair */}
            <div className="absolute -top-1 -left-1 w-14 h-8 bg-orange-500 rounded-full"></div>
            {/* Face features */}
            <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-foreground rounded-full"></div>
            <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-foreground rounded-full"></div>
            <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1.5 rounded-full transition-colors duration-300 ${
              isAnimating ? 'bg-rose-400' : 'bg-muted'
            }`}></div>
          </div>
          
          {/* Body */}
          <div className="w-8 h-14 bg-secondary rounded-lg mx-auto mt-1 relative">
            {/* Arms */}
            <div className={`absolute -left-4 top-2 w-3 h-8 bg-warm rounded-full transition-transform duration-500 ${
              isAnimating ? 'rotate-45' : 'rotate-0'
            }`}></div>
            <div className={`absolute -right-4 top-2 w-3 h-8 bg-warm rounded-full transition-transform duration-500 ${
              isAnimating ? '-rotate-45' : 'rotate-0'
            }`}></div>
          </div>
          
          {/* Legs */}
          <div className="flex gap-1 justify-center mt-1">
            <div className="w-2 h-12 bg-blue-600 rounded-lg"></div>
            <div className="w-2 h-12 bg-blue-600 rounded-lg"></div>
          </div>
        </div>
        
        {/* Speech bubble from child */}
        <div className={`absolute -top-6 -left-6 bg-primary px-2 py-1 rounded-lg shadow-soft transition-all duration-700 delay-300 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-xs font-medium text-primary-foreground">Hello!</p>
          <div className="absolute bottom-0 right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className={`flex gap-2 transition-all duration-1000 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-60'
        }`}>
          <div className="w-6 h-6 bg-accent/30 rounded-full animate-float"></div>
          <div className="w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-5 h-5 bg-warm/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Sound waves */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 border-2 border-primary/30 rounded-full transition-all duration-1000 ${
              isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{ 
              animationDelay: `${i * 0.2}s`,
              transform: `translate(-50%, -50%) scale(${isAnimating ? 1.5 + (i * 0.3) : 1})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

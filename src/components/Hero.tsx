
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { theme } = useTheme();
  const terminalRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  
  const fullText = `Welcome to C++ Reference\nThe ultimate resource for modern C++ programming.\nExplore tutorials, references, and more.`;
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`relative pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 ${
      theme === 'modern' ? 'bg-gradient-to-b from-background to-secondary/30' : 'bg-nostalgic-background'
    }`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`space-y-6 ${theme === 'nostalgic' ? 'font-mono' : ''}`}>
            <div className="inline-block">
              <span className={`text-sm px-3 py-1 rounded-full ${
                theme === 'modern'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-nostalgic-border text-nostalgic-text'
              }`}>
                Since 1979
              </span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
              theme === 'modern' ? 'leading-tight' : 'leading-tight text-nostalgic-text'
            }`}>
              The Complete <span className={theme === 'modern' ? 'text-primary' : 'text-nostalgic-highlight'}>C++</span> Resource
            </h1>
            
            <p className={`text-xl ${
              theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
            }`}>
              Learn, reference, and master modern C++ programming with comprehensive tutorials, references, and community resources.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/tutorials"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
                  ${theme === 'modern'
                    ? 'bg-primary text-primary-foreground button-glow'
                    : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow'}
                `}
              >
                Start Learning
                <ArrowRight size={16} />
              </Link>
              
              <Link
                to="/reference"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
                  ${theme === 'modern'
                    ? 'border border-border hover:border-primary/50 hover:text-primary'
                    : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow'}
                `}
              >
                View Reference
              </Link>
            </div>
          </div>
          
          <div>
            <div
              ref={terminalRef}
              className={`
                h-[300px] sm:h-[400px] rounded-lg p-6 overflow-hidden
                ${theme === 'modern'
                  ? 'bg-card/80 backdrop-blur-sm border border-border shadow-xl'
                  : 'bg-nostalgic-background border-2 border-nostalgic-border nostalgic-shadow'}
              `}
            >
              <div className={`mb-4 ${theme === 'nostalgic' ? 'hidden' : 'flex'} items-center space-x-2`}>
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              {theme === 'nostalgic' && (
                <div className="mb-4 bg-nostalgic-border text-nostalgic-text py-1 px-2">
                  C++ Terminal
                </div>
              )}
              
              <div className={`
                font-mono text-sm sm:text-base whitespace-pre-line
                ${theme === 'modern' ? 'text-foreground' : 'text-nostalgic-text'}
              `}>
                <span className="text-primary">&gt;</span> {displayedText}
                <span className="animate-blink-cursor">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {theme === 'modern' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-3xl"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;

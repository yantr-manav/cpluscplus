
import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline: React.FC = () => {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const timelineEvents: TimelineEvent[] = [
    {
      year: '1979',
      title: 'C with Classes',
      description: 'Bjarne Stroustrup begins work on "C with Classes", the predecessor to C++.'
    },
    {
      year: '1983',
      title: 'The Name C++',
      description: 'The name "C++" is coined, representing the evolutionary nature of the language from C.'
    },
    {
      year: '1985',
      title: 'First Commercial Release',
      description: 'The first commercial implementation of C++ is released.'
    },
    {
      year: '1989',
      title: 'C++ 2.0',
      description: 'C++ 2.0 is released, adding features like multiple inheritance and abstract classes.'
    },
    {
      year: '1998',
      title: 'C++98',
      description: 'The first ISO standardized version of C++ is published, known as C++98.'
    },
    {
      year: '2003',
      title: 'C++03',
      description: 'A minor update to C++98, fixing issues and clarifying certain features.'
    },
    {
      year: '2011',
      title: 'C++11',
      description: 'A major update introducing many modern features like auto, lambda expressions, and smart pointers.'
    },
    {
      year: '2014',
      title: 'C++14',
      description: 'A minor update to C++11, adding features like generic lambdas and improved constexpr.'
    },
    {
      year: '2017',
      title: 'C++17',
      description: 'Added features like filesystem, std::variant, parallel algorithms, and structured bindings.'
    },
    {
      year: '2020',
      title: 'C++20',
      description: 'Major features including concepts, ranges, modules, and coroutines.'
    },
    {
      year: '2023',
      title: 'C++23',
      description: 'The most recent update with improved support for modules, constexpr, and more.'
    }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section 
      className={`py-12 sm:py-16 ${
        theme === 'modern' ? 'bg-background' : 'bg-nostalgic-background'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            theme === 'nostalgic' ? 'font-mono text-nostalgic-text' : ''
          }`}>
            C++ Evolution Timeline
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'modern' ? 'text-foreground/80' : 'font-mono text-nostalgic-text'
          }`}>
            Explore the rich history and evolution of the C++ programming language from its inception to today.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className={`
            relative overflow-x-auto pb-8 hide-scrollbar
            ${theme === 'nostalgic' ? 'font-mono' : ''}
          `}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="inline-flex space-x-8 px-4 min-w-max">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`
                  w-80 flex-shrink-0 transition-all duration-300 transform hover:translate-y-[-8px]
                  ${theme === 'modern'
                    ? 'bg-card border border-border rounded-lg p-6 shadow-md'
                    : 'bg-nostalgic-background border-2 border-nostalgic-border p-4 nostalgic-shadow'
                  }
                `}
              >
                <div className={`text-sm font-medium mb-2 ${
                  theme === 'modern' ? 'text-primary' : 'text-nostalgic-highlight'
                }`}>
                  {event.year}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'nostalgic' ? 'text-nostalgic-text' : ''
                }`}>
                  {event.title}
                </h3>
                <p className={
                  theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                }>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Timeline line */}
          <div 
            className={`
              absolute left-0 right-0 h-1 bottom-4
              ${theme === 'modern' 
                ? 'bg-border' 
                : 'bg-nostalgic-border'
              }
            `}
          ></div>
        </div>
        
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className={`
              p-2 rounded-full transition-all duration-300
              ${theme === 'modern'
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                : 'bg-nostalgic-background border border-nostalgic-border text-nostalgic-text nostalgic-shadow'}
            `}
            aria-label="Scroll left"
          >
            &larr;
          </button>
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className={`
              p-2 rounded-full transition-all duration-300
              ${theme === 'modern'
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                : 'bg-nostalgic-background border border-nostalgic-border text-nostalgic-text nostalgic-shadow'}
            `}
            aria-label="Scroll right"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

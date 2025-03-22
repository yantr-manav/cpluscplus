
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search } from 'lucide-react';

const Reference = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    document.title = 'C++ Reference - Documentation';
  }, []);

  // Sample reference data structure
  const referenceItems = [
    {
      name: 'std::vector',
      type: 'Container',
      description: 'A sequence container that encapsulates dynamic size arrays.',
      category: 'Standard Library'
    },
    {
      name: 'std::string',
      type: 'String',
      description: 'A specialized container used to store and manipulate sequences of characters.',
      category: 'Standard Library'
    },
    {
      name: 'std::map',
      type: 'Container',
      description: 'An associative container that stores elements formed by a key value and a mapped value.',
      category: 'Standard Library'
    },
    {
      name: 'std::unique_ptr',
      type: 'Smart Pointer',
      description: 'Smart pointer that owns and manages another object and deletes that object when it is deleted.',
      category: 'Memory Management'
    },
    {
      name: 'std::thread',
      type: 'Concurrency',
      description: 'A class that represents a single thread of execution.',
      category: 'Concurrency'
    },
    {
      name: 'std::function',
      type: 'Functional',
      description: 'A general-purpose polymorphic function wrapper.',
      category: 'Functional'
    }
  ];

  // Filter items based on search query
  const filteredItems = referenceItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen pt-16 ${theme === 'nostalgic' ? 'font-mono' : ''}`}>
      <div 
        className={`py-16 px-4 ${
          theme === 'modern' 
            ? 'bg-gradient-to-b from-primary/10 to-background' 
            : 'bg-nostalgic-background border-b border-nostalgic-border'
        }`}
      >
        <div className="container mx-auto text-center">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'nostalgic' ? 'text-nostalgic-text' : ''
          }`}>
            C++ Reference
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
          }`}>
            Complete reference documentation for the C++ language and standard library.
          </p>
          
          <div className="max-w-lg mx-auto mt-8">
            <div className={`
              flex items-center rounded-lg overflow-hidden
              ${theme === 'modern'
                ? 'bg-card border border-border'
                : 'bg-nostalgic-background border border-nostalgic-border'}
            `}>
              <div className="pl-4">
                <Search size={20} className={theme === 'nostalgic' ? 'text-nostalgic-text' : ''} />
              </div>
              <input
                type="text"
                placeholder="Search the C++ reference..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`
                  w-full p-4 focus:outline-none
                  ${theme === 'modern'
                    ? 'bg-card text-foreground placeholder:text-foreground/50'
                    : 'bg-nostalgic-background text-nostalgic-text border-none placeholder:text-nostalgic-text/50'}
                `}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className={`
              sticky top-20 p-4 rounded-lg
              ${theme === 'modern'
                ? 'bg-card border border-border'
                : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
            `}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
              }`}>
                Categories
              </h3>
              <nav>
                <ul className="space-y-2">
                  {[
                    'Language Basics',
                    'Standard Library',
                    'Memory Management',
                    'Concurrency',
                    'Functional',
                    'Input/Output',
                    'Containers',
                    'Algorithms',
                    'Iterators',
                    'Utilities',
                    'Strings',
                    'Numerics',
                    'Exceptions'
                  ].map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`
                          block py-2 px-3 rounded transition-colors duration-200
                          ${theme === 'modern'
                            ? 'hover:bg-secondary/30 hover:text-primary'
                            : 'hover:bg-nostalgic-border/30 text-nostalgic-text hover:text-nostalgic-highlight'}
                          ${index === 1 ? (theme === 'modern' ? 'bg-secondary/50 text-primary' : 'bg-nostalgic-border text-nostalgic-highlight') : ''}
                        `}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className={`rounded-lg overflow-hidden ${
              theme === 'modern'
                ? 'border border-border'
                : 'border border-nostalgic-border'
            }`}>
              <div className={`p-4 font-medium ${
                theme === 'modern'
                  ? 'bg-secondary/30 border-b border-border'
                  : 'bg-nostalgic-border/50 border-b border-nostalgic-border'
              }`}>
                <h2 className={`text-xl ${
                  theme === 'nostalgic' ? 'text-nostalgic-text' : ''
                }`}>
                  Standard Library
                </h2>
              </div>
              
              <div className={theme === 'modern' ? 'bg-card' : 'bg-nostalgic-background'}>
                {filteredItems.length > 0 ? (
                  <ul>
                    {filteredItems.map((item, index) => (
                      <li 
                        key={index}
                        className={`
                          p-4 transition-colors duration-200 hover:cursor-pointer
                          ${theme === 'modern'
                            ? 'hover:bg-secondary/20 border-b border-border last:border-b-0'
                            : 'hover:bg-nostalgic-border/20 border-b border-nostalgic-border last:border-b-0'}
                        `}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className={`text-lg font-semibold ${
                              theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                            }`}>
                              {item.name}
                            </h3>
                            <p className={theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'}>
                              {item.description}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className={`
                              inline-block px-2 py-1 text-xs rounded
                              ${theme === 'modern'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-nostalgic-border text-nostalgic-text'}
                            `}>
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={`p-8 text-center ${
                    theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                  }`}>
                    No items found for "{searchQuery}".
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;

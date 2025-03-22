
import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import CodeBlock from '../components/CodeBlock';

const Tutorials = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = 'C++ Reference - Tutorials';
  }, []);

  const variablesCode = `#include <iostream>

int main() {
    // Integer variable
    int age = 25;
    
    // Floating-point variable
    double pi = 3.14159;
    
    // Character variable
    char grade = 'A';
    
    // Boolean variable
    bool isProgramming = true;
    
    // String (C++ style)
    std::string name = "John Doe";
    
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Pi: " << pi << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Is Programming: " << std::boolalpha << isProgramming << std::endl;
    
    return 0;
}`;

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
            C++ Tutorials
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
          }`}>
            Learn C++ programming with our comprehensive tutorial series, from beginner to advanced topics.
          </p>
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
                Tutorial Topics
              </h3>
              <nav>
                <ul className="space-y-2">
                  {[
                    'Getting Started',
                    'Variables & Data Types',
                    'Control Flow',
                    'Functions',
                    'Arrays & Strings',
                    'Pointers & References',
                    'Classes & Objects',
                    'Inheritance',
                    'Polymorphism',
                    'Templates',
                    'Exception Handling',
                    'STL Containers',
                    'STL Algorithms',
                    'Modern C++ Features'
                  ].map((topic, index) => (
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
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className={`
              p-6 rounded-lg mb-8
              ${theme === 'modern'
                ? 'bg-card border border-border'
                : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
            `}>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'nostalgic' ? 'text-nostalgic-text' : ''
              }`}>
                Variables & Data Types
              </h2>
              
              <div className="space-y-6">
                <p className={theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'}>
                  In C++, variables are containers for storing data values. Before you use a variable, you must declare it specifying the data type. C++ offers various data types to efficiently store different kinds of values.
                </p>
                
                <h3 className={`text-xl font-semibold ${
                  theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                }`}>
                  Basic Data Types
                </h3>
                
                <ul className={`list-disc pl-6 space-y-2 ${
                  theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'
                }`}>
                  <li><strong>int</strong>: Integer type, stores whole numbers</li>
                  <li><strong>float</strong>: Floating-point type, stores numbers with decimal points (single precision)</li>
                  <li><strong>double</strong>: Double floating-point type (higher precision than float)</li>
                  <li><strong>char</strong>: Character type, stores a single character</li>
                  <li><strong>bool</strong>: Boolean type, stores either true or false</li>
                  <li><strong>void</strong>: Represents the absence of type</li>
                </ul>
                
                <h3 className={`text-xl font-semibold ${
                  theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                }`}>
                  Type Modifiers
                </h3>
                
                <p className={theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'}>
                  C++ includes type modifiers that alter the meaning of base types:
                </p>
                
                <ul className={`list-disc pl-6 space-y-2 ${
                  theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'
                }`}>
                  <li><strong>signed</strong>: Can represent both positive and negative values</li>
                  <li><strong>unsigned</strong>: Can only represent positive values</li>
                  <li><strong>short</strong>: Reduces the size of the data type</li>
                  <li><strong>long</strong>: Increases the size of the data type</li>
                </ul>
                
                <h3 className={`text-xl font-semibold ${
                  theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                }`}>
                  Example: Working with Variables
                </h3>
                
                <p className={theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'}>
                  Here's an example that demonstrates how to declare and use different variable types in C++:
                </p>
                
                <CodeBlock code={variablesCode} title="Variables Example" />
                
                <div className={`
                  p-4 rounded-lg mt-6
                  ${theme === 'modern'
                    ? 'bg-secondary/30 border border-border'
                    : 'bg-nostalgic-background border border-nostalgic-border'}
                `}>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                  }`}>
                    Pro Tip
                  </h4>
                  <p className={theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'}>
                    In modern C++, you can use the <code className="font-mono">auto</code> keyword to let the compiler deduce the type of a variable from its initializer.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <a
                href="#"
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded
                  ${theme === 'modern'
                    ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    : 'bg-nostalgic-background border border-nostalgic-border text-nostalgic-text nostalgic-shadow'}
                `}
              >
                ← Getting Started
              </a>
              
              <a
                href="#"
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded
                  ${theme === 'modern'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/80'
                    : 'bg-nostalgic-background border border-nostalgic-border text-nostalgic-text nostalgic-shadow'}
                `}
              >
                Control Flow →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;

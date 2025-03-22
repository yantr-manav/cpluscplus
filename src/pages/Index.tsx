
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import CodeBlock from '../components/CodeBlock';
import { useTheme } from '../contexts/ThemeContext';
import { BookOpen, Code, MessageSquare, FileText, ArrowRight } from 'lucide-react';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = 'C++ Reference - Home';
  }, []);

  const helloWorldCode = `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`;

  const modernCppCode = `#include <iostream>
#include <vector>
#include <algorithm>
#include <string_view>

int main() {
    auto print = [](const auto& message) {
        std::cout << message << std::endl;
    };
    
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::for_each(numbers.begin(), numbers.end(), 
                 [](const auto& n) { 
                     std::cout << n * n << " "; 
                 });
                 
    return 0;
}`;

  const featuredResources = [
    {
      icon: <BookOpen className={theme === 'nostalgic' ? 'text-nostalgic-text' : ''} />,
      title: 'Tutorials',
      description: 'Step-by-step guides for beginners and advanced users.',
      link: '/tutorials'
    },
    {
      icon: <Code className={theme === 'nostalgic' ? 'text-nostalgic-text' : ''} />,
      title: 'Reference',
      description: 'Complete C++ language and standard library documentation.',
      link: '/reference'
    },
    {
      icon: <FileText className={theme === 'nostalgic' ? 'text-nostalgic-text' : ''} />,
      title: 'Articles',
      description: 'In-depth articles on C++ features and best practices.',
      link: '/articles'
    },
    {
      icon: <MessageSquare className={theme === 'nostalgic' ? 'text-nostalgic-text' : ''} />,
      title: 'Forums',
      description: 'Join discussions and get help from the community.',
      link: '/forums'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'nostalgic' ? 'font-mono' : ''}`}>
      <Hero />
      
      {/* Features Section */}
      <section 
        className={`py-16 ${
          theme === 'modern' ? 'bg-background' : 'bg-nostalgic-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <Link 
                key={index}
                to={resource.link}
                className={`
                  group p-6 transition-all duration-300
                  ${theme === 'modern'
                    ? 'bg-card hover:bg-card/80 border border-border rounded-lg hover:shadow-lg'
                    : 'bg-nostalgic-background border-2 border-nostalgic-border nostalgic-shadow hover:bg-nostalgic-border/10'}
                `}
              >
                <div className={`
                  p-2 inline-flex rounded-lg mb-4
                  ${theme === 'modern'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-nostalgic-border text-nostalgic-text'}
                `}>
                  {resource.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'nostalgic' ? 'text-nostalgic-text' : ''
                }`}>
                  {resource.title}
                </h3>
                <p className={
                  theme === 'modern' ? 'text-foreground/80 mb-4' : 'text-nostalgic-text mb-4'
                }>
                  {resource.description}
                </p>
                <div className={`
                  flex items-center font-medium
                  ${theme === 'modern'
                    ? 'text-primary group-hover:translate-x-1 transition-transform duration-300'
                    : 'text-nostalgic-highlight'}
                `}>
                  Explore <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Timeline />
      
      {/* Code Examples Section */}
      <section 
        className={`py-16 ${
          theme === 'modern' ? 'bg-gradient-to-b from-background to-secondary/20' : 'bg-nostalgic-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === 'nostalgic' ? 'text-nostalgic-text' : ''
            }`}>
              C++ Code Examples
            </h2>
            <p className={`max-w-2xl mx-auto ${
              theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
            }`}>
              From the classic "Hello World" to modern C++ features, explore code examples to enhance your skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
              }`}>
                Classic Hello World
              </h3>
              <CodeBlock code={helloWorldCode} title="Hello World Example" />
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
              }`}>
                Modern C++ Features
              </h3>
              <CodeBlock code={modernCppCode} title="Modern C++ Example" />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              to="/tutorials/examples"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
                ${theme === 'modern'
                  ? 'bg-primary text-primary-foreground button-glow'
                  : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow'}
              `}
            >
              Browse More Examples
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section 
        className={`py-16 ${
          theme === 'modern' 
            ? 'bg-gradient-to-r from-secondary/50 to-primary/20' 
            : 'bg-nostalgic-background border-y border-nostalgic-border'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
            theme === 'nostalgic' ? 'text-nostalgic-text' : ''
          }`}>
            Ready to Master C++?
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 text-lg ${
            theme === 'modern' ? 'text-foreground/90' : 'text-nostalgic-text'
          }`}>
            Dive into our comprehensive tutorials, explore the detailed reference documentation, and join our community forums to accelerate your learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tutorials"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
                ${theme === 'modern'
                  ? 'bg-primary text-primary-foreground button-glow'
                  : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow'}
              `}
            >
              Start with Tutorials
              <ArrowRight size={16} />
            </Link>
            
            <Link
              to="/reference"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
                ${theme === 'modern'
                  ? 'border border-primary/50 hover:bg-primary/10'
                  : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow'}
              `}
            >
              Browse References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

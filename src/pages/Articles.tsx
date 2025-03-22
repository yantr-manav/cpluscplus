
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Tag, User } from 'lucide-react';

const Articles = () => {
  const { theme } = useTheme();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'C++ Reference - Articles';
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Understanding Move Semantics in Modern C++',
      summary: 'This article explains the concept of move semantics in C++11 and beyond, helping you write more efficient code by avoiding unnecessary copies.',
      author: 'Jane Smith',
      date: 'May 15, 2023',
      tags: ['Modern C++', 'Performance', 'C++11']
    },
    {
      id: 2,
      title: 'A Deep Dive into C++ Templates',
      summary: 'Templates are one of the most powerful features in C++. Learn how to use them effectively to write generic, reusable code.',
      author: 'John Doe',
      date: 'April 3, 2023',
      tags: ['Templates', 'Generic Programming']
    },
    {
      id: 3,
      title: 'Memory Management Best Practices in C++',
      summary: 'Memory management in C++ can be challenging. This article provides practical tips and best practices to avoid memory leaks and optimize performance.',
      author: 'Robert Johnson',
      date: 'March 18, 2023',
      tags: ['Memory Management', 'Best Practices', 'Performance']
    },
    {
      id: 4,
      title: 'C++20: Exploring Coroutines',
      summary: 'Coroutines are a major new feature in C++20. Learn how they work and how they can simplify asynchronous programming.',
      author: 'Lisa Chen',
      date: 'February 22, 2023',
      tags: ['C++20', 'Coroutines', 'Modern C++']
    },
    {
      id: 5,
      title: 'RAII: Resource Acquisition Is Initialization',
      summary: 'RAII is a fundamental C++ pattern that ensures proper resource management. This article explains the concept and its practical applications.',
      author: 'Michael Wilson',
      date: 'January 10, 2023',
      tags: ['RAII', 'Best Practices', 'Resource Management']
    }
  ];

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));
  
  const filteredArticles = selectedTag
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

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
            C++ Articles
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
          }`}>
            In-depth articles on C++ programming, best practices, and advanced techniques.
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
                Filter by Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`
                    px-3 py-1 rounded-full text-sm mb-2 transition-colors duration-200
                    ${selectedTag === null
                      ? (theme === 'modern'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-nostalgic-border text-nostalgic-highlight')
                      : (theme === 'modern'
                          ? 'bg-secondary/30 hover:bg-secondary/50'
                          : 'bg-nostalgic-background border border-nostalgic-border hover:bg-nostalgic-border/30 text-nostalgic-text')}
                  `}
                >
                  All
                </button>
                
                {allTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTag(tag)}
                    className={`
                      px-3 py-1 rounded-full text-sm mb-2 transition-colors duration-200
                      ${selectedTag === tag
                        ? (theme === 'modern'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-nostalgic-border text-nostalgic-highlight')
                        : (theme === 'modern'
                            ? 'bg-secondary/30 hover:bg-secondary/50'
                            : 'bg-nostalgic-background border border-nostalgic-border hover:bg-nostalgic-border/30 text-nostalgic-text')}
                    `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredArticles.length > 0 ? (
              <div className="space-y-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className={`
                      p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1
                      ${theme === 'modern'
                        ? 'bg-card border border-border hover:shadow-lg'
                        : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
                    `}
                  >
                    <h2 className={`text-2xl font-bold mb-3 ${
                      theme === 'modern' ? 'hover:text-primary' : 'text-nostalgic-text hover:text-nostalgic-highlight'
                    }`}>
                      <a href="#">{article.title}</a>
                    </h2>
                    
                    <div className={`
                      flex flex-wrap items-center gap-4 mb-4 text-sm
                      ${theme === 'modern' ? 'text-foreground/70' : 'text-nostalgic-text/80'}
                    `}>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Tag size={16} />
                        <span>{article.tags.join(', ')}</span>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${
                      theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                    }`}>
                      {article.summary}
                    </p>
                    
                    <a
                      href="#"
                      className={`
                        inline-block transition-colors duration-200
                        ${theme === 'modern'
                          ? 'text-primary hover:text-primary/80'
                          : 'text-nostalgic-highlight hover:underline'}
                      `}
                    >
                      Read More →
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className={`
                p-8 text-center rounded-lg
                ${theme === 'modern'
                  ? 'bg-card border border-border'
                  : 'bg-nostalgic-background border border-nostalgic-border'}
              `}>
                <p className={theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'}>
                  No articles found for the selected tag.
                </p>
              </div>
            )}
            
            <div className="mt-8 flex justify-center">
              <div className={`
                inline-flex rounded-md overflow-hidden
                ${theme === 'modern'
                  ? 'border border-border'
                  : 'border border-nostalgic-border'}
              `}>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`
                      px-4 py-2
                      ${page === 1
                        ? (theme === 'modern'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-nostalgic-border text-nostalgic-text')
                        : (theme === 'modern'
                            ? 'bg-card hover:bg-secondary/30'
                            : 'bg-nostalgic-background hover:bg-nostalgic-border/30 text-nostalgic-text')}
                      ${theme === 'modern'
                        ? 'border-r border-border last:border-r-0'
                        : 'border-r border-nostalgic-border last:border-r-0'}
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

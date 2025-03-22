
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MessageSquare, User, Calendar, Heart, MessageCircle, Search } from 'lucide-react';

const Forums = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    document.title = 'C++ Reference - Forums';
  }, []);

  const categories = [
    'All',
    'General',
    'Beginners',
    'Standard Library',
    'Templates',
    'Performance',
    'Concurrency',
    'Modern C++',
    'Help Needed'
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Understanding virtual functions in inheritance',
      author: 'CppLearner',
      date: 'Today at 14:23',
      category: 'Beginners',
      replies: 12,
      likes: 5,
      summary: "I'm trying to understand how virtual functions work in C++. Can someone explain when I should use them and how they differ from normal functions?"
    },
    {
      id: 2,
      title: 'Best practices for handling exceptions in constructors',
      author: 'CodeOptimizer',
      date: 'Yesterday at 09:11',
      category: 'Modern C++',
      replies: 8,
      likes: 15,
      summary: "I'm working on a project where I need to handle potential errors in my class constructors. What's the best approach for exception handling in constructors?"
    },
    {
      id: 3,
      title: 'Thread synchronization issue with std::mutex',
      author: 'ThreadMaster',
      date: '2 days ago',
      category: 'Concurrency',
      replies: 6,
      likes: 3,
      summary: "I'm experiencing deadlocks in my multithreaded application. I suspect it's related to my use of std::mutex but can't identify the exact issue."
    },
    {
      id: 4,
      title: 'Compile time optimization with templates',
      author: 'MetaProgrammer',
      date: '3 days ago',
      category: 'Templates',
      replies: 9,
      likes: 21,
      summary: "I've been working on compile-time optimizations with template metaprogramming. Would anyone be interested in discussing advanced techniques?"
    },
    {
      id: 5,
      title: 'How to use std::span in C++20?',
      author: 'ModernCpp',
      date: '4 days ago',
      category: 'Standard Library',
      replies: 15,
      likes: 18,
      summary: "I'm exploring the new features in C++20 and would like to understand how to effectively use std::span and what benefits it provides over traditional arrays."
    }
  ];

  const filteredPosts = forumPosts.filter(post => 
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase()))
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
            C++ Forums
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
          }`}>
            Join discussions, ask questions, and share your C++ knowledge with the community.
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
                placeholder="Search forum posts..."
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
            <div className="space-y-6">
              <div className={`
                p-4 rounded-lg
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
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`
                            block w-full text-left py-2 px-3 rounded transition-colors duration-200
                            ${activeCategory === category
                              ? (theme === 'modern'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-nostalgic-border text-nostalgic-highlight')
                              : (theme === 'modern'
                                  ? 'hover:bg-secondary/30'
                                  : 'hover:bg-nostalgic-border/30 text-nostalgic-text hover:text-nostalgic-highlight')}
                          `}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className={`
                p-4 rounded-lg
                ${theme === 'modern'
                  ? 'bg-card border border-border'
                  : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
              `}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                }`}>
                  Forum Stats
                </h3>
                <ul className={`space-y-2 ${
                  theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                }`}>
                  <li className="flex justify-between">
                    <span>Total Posts:</span>
                    <span className="font-medium">2,345</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Members:</span>
                    <span className="font-medium">1,120</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Online Now:</span>
                    <span className="font-medium">42</span>
                  </li>
                </ul>
              </div>
              
              <div className={`
                p-4 rounded-lg
                ${theme === 'modern'
                  ? 'bg-primary/10 border border-border'
                  : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
              `}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''
                }`}>
                  Join the Community
                </h3>
                <p className={`mb-4 ${
                  theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                }`}>
                  Sign up to participate in discussions, ask questions, and connect with other C++ developers.
                </p>
                <button
                  className={`
                    w-full py-2 px-4 rounded-md font-medium transition-all duration-300
                    ${theme === 'modern'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-nostalgic-border text-nostalgic-text hover:bg-nostalgic-border/80'}
                  `}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className={`text-2xl font-bold ${
                theme === 'nostalgic' ? 'text-nostalgic-text' : ''
              }`}>
                {activeCategory} Discussions
              </h2>
              
              <button
                className={`
                  py-2 px-4 rounded-md transition-all duration-300
                  ${theme === 'modern'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-nostalgic-border text-nostalgic-text hover:bg-nostalgic-border/80 nostalgic-shadow'}
                `}
              >
                New Thread
              </button>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`
                      p-6 rounded-lg transition-all duration-300 hover:-translate-y-1
                      ${theme === 'modern'
                        ? 'bg-card border border-border hover:shadow-md'
                        : 'bg-nostalgic-background border border-nostalgic-border nostalgic-shadow'}
                    `}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className={`text-xl font-bold mb-3 ${
                        theme === 'modern' ? 'hover:text-primary' : 'text-nostalgic-text hover:text-nostalgic-highlight'
                      }`}>
                        <a href="#">{post.title}</a>
                      </h3>
                      
                      <span className={`
                        px-2 py-1 text-xs rounded-full
                        ${theme === 'modern'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-nostalgic-border text-nostalgic-text'}
                      `}>
                        {post.category}
                      </span>
                    </div>
                    
                    <p className={`mb-4 ${
                      theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
                    }`}>
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap justify-between items-center">
                      <div className={`
                        flex items-center gap-4
                        ${theme === 'modern' ? 'text-foreground/70' : 'text-nostalgic-text/80'}
                      `}>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className={`
                          flex items-center gap-1
                          ${theme === 'modern' ? 'text-foreground/70' : 'text-nostalgic-text/80'}
                        `}>
                          <Heart size={16} />
                          <span>{post.likes}</span>
                        </div>
                        
                        <div className={`
                          flex items-center gap-1
                          ${theme === 'modern' ? 'text-foreground/70' : 'text-nostalgic-text/80'}
                        `}>
                          <MessageCircle size={16} />
                          <span>{post.replies}</span>
                        </div>
                        
                        <a
                          href="#"
                          className={`
                            inline-flex items-center gap-1 py-1 px-3 rounded-md
                            ${theme === 'modern'
                              ? 'bg-secondary/30 hover:bg-secondary/50'
                              : 'bg-nostalgic-background border border-nostalgic-border hover:bg-nostalgic-border/30 text-nostalgic-text'}
                          `}
                        >
                          <MessageSquare size={14} />
                          <span>Reply</span>
                        </a>
                      </div>
                    </div>
                  </div>
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
                  No discussion threads found for the selected criteria.
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

export default Forums;

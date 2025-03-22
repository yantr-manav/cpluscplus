
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Github, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`
      border-t py-12 
      ${theme === 'modern' 
        ? 'bg-background border-border' 
        : 'bg-nostalgic-background border-nostalgic-border font-mono'}
    `}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className={`text-2xl font-bold ${theme === 'nostalgic' ? 'text-nostalgic-text' : ''}`}>
                C++
              </span>
            </Link>
            <p className={`mt-4 ${theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'}`}>
              The complete resource for C++ programming language tutorials, references, and community discussions.
            </p>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/tutorials', label: 'Tutorials' },
                { path: '/reference', label: 'Reference' },
                { path: '/articles', label: 'Articles' },
                { path: '/forums', label: 'Forums' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`inline-block transition-colors duration-200 ${
                      theme === 'modern' 
                        ? 'text-foreground/80 hover:text-foreground' 
                        : 'text-nostalgic-text hover:text-nostalgic-highlight'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''}`}>
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/tutorials/basics', label: 'C++ Basics' },
                { path: '/tutorials/advanced', label: 'Advanced C++' },
                { path: '/reference/standard-library', label: 'Standard Library' },
                { path: '/articles/best-practices', label: 'Best Practices' },
                { path: '/tutorials/examples', label: 'Code Examples' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className={`inline-block transition-colors duration-200 ${
                      theme === 'modern' 
                        ? 'text-foreground/80 hover:text-foreground' 
                        : 'text-nostalgic-text hover:text-nostalgic-highlight'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''}`}>
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: <Github size={20} />, label: 'GitHub' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className={`
                    p-2 rounded-full transition-colors duration-300
                    ${theme === 'modern'
                      ? 'text-foreground/70 hover:text-foreground bg-secondary/30 hover:bg-secondary/50'
                      : 'text-nostalgic-text hover:text-nostalgic-highlight border border-nostalgic-border hover:bg-nostalgic-border/30'}
                  `}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className={theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'}>
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className={`
                  px-3 py-2 rounded-l-md w-full
                  ${theme === 'modern'
                    ? 'bg-secondary/30 border border-border focus:outline-none focus:border-primary'
                    : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border focus:outline-none focus:border-nostalgic-highlight'}
                `}
              />
              <button
                className={`
                  px-4 py-2 rounded-r-md
                  ${theme === 'modern'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-nostalgic-border text-nostalgic-text'}
                `}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className={`
          mt-8 pt-6 border-t
          ${theme === 'modern' ? 'border-border' : 'border-nostalgic-border'}
        `}>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className={theme === 'modern' ? 'text-foreground/70' : 'text-nostalgic-text'}>
              &copy; {currentYear} C++ Reference. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <Link 
                to="/privacy"
                className={`
                  transition-colors duration-200
                  ${theme === 'modern' 
                    ? 'text-foreground/70 hover:text-foreground' 
                    : 'text-nostalgic-text hover:text-nostalgic-highlight'}
                `}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                className={`
                  transition-colors duration-200
                  ${theme === 'modern' 
                    ? 'text-foreground/70 hover:text-foreground' 
                    : 'text-nostalgic-text hover:text-nostalgic-highlight'}
                `}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

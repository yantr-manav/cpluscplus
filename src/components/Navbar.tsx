
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tutorials', label: 'Tutorials' },
    { path: '/reference', label: 'Reference' },
    { path: '/articles', label: 'Articles' },
    { path: '/forums', label: 'Forums' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'modern' 
            ? 'bg-background/80 backdrop-blur-md border-b border-border' 
            : 'bg-nostalgic-background border-b border-nostalgic-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className={`text-2xl font-bold ${theme === 'nostalgic' ? 'font-mono text-nostalgic-text' : ''}`}>
              C++
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  py-2 transition-colors duration-200
                  ${theme === 'modern'
                    ? `${isActive(link.path) ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`
                    : `font-mono ${isActive(link.path) ? 'text-nostalgic-highlight font-bold' : 'text-nostalgic-text hover:text-nostalgic-highlight'}`
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${theme === 'nostalgic' ? 'text-nostalgic-text hover:text-nostalgic-highlight' : 'text-foreground/80 hover:text-foreground'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? 'max-h-96' : 'max-h-0'}
          ${theme === 'modern' ? 'bg-background' : 'bg-nostalgic-background border-t border-nostalgic-border'}
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`
                  py-2 px-4 rounded-md transition-colors duration-200
                  ${theme === 'modern'
                    ? `${isActive(link.path) 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'hover:bg-secondary/20'}`
                    : `font-mono ${isActive(link.path) 
                        ? 'bg-nostalgic-border text-nostalgic-text' 
                        : 'hover:bg-nostalgic-border/30'}`
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

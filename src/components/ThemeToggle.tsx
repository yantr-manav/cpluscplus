
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Monitor, Terminal } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md
        ${theme === 'modern' 
          ? 'bg-secondary text-secondary-foreground' 
          : 'bg-nostalgic-border text-nostalgic-text nostalgic-shadow'}
        transition-all duration-300 hover:opacity-80
      `}
      aria-label={`Switch to ${theme === 'modern' ? 'nostalgic' : 'modern'} theme`}
    >
      {theme === 'modern' ? (
        <>
          <Terminal size={16} />
          <span className="hidden sm:inline">Nostalgic</span>
        </>
      ) : (
        <>
          <Monitor size={16} />
          <span className="hidden sm:inline">Modern</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;


import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'modern' | 'nostalgic';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('modern');

  useEffect(() => {
    // Apply theme class to document
    if (theme === 'nostalgic') {
      document.documentElement.classList.add('nostalgic');
    } else {
      document.documentElement.classList.remove('nostalgic');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'modern' ? 'nostalgic' : 'modern');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

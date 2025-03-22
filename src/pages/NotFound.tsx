
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "C++ Reference - Page Not Found";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center pt-16 pb-16 px-4 ${
      theme === 'nostalgic' ? 'font-mono bg-nostalgic-background' : 'bg-background'
    }`}>
      <div className={`
        max-w-md w-full text-center p-8 rounded-lg
        ${theme === 'modern'
          ? 'bg-card border border-border shadow-lg'
          : 'bg-nostalgic-background border-2 border-nostalgic-border nostalgic-shadow'}
      `}>
        <div className={`text-6xl font-bold mb-6 ${
          theme === 'modern' ? 'text-primary' : 'text-nostalgic-highlight'
        }`}>
          404
        </div>
        
        <h1 className={`text-2xl font-bold mb-4 ${
          theme === 'nostalgic' ? 'text-nostalgic-text' : ''
        }`}>
          Page Not Found
        </h1>
        
        <p className={`mb-8 ${
          theme === 'modern' ? 'text-foreground/80' : 'text-nostalgic-text'
        }`}>
          The page you are looking for doesn't exist or has been moved.
          {theme === 'nostalgic' && (
            <span className="block mt-2 text-nostalgic-text animate-blink-cursor">_</span>
          )}
        </p>
        
        <Link
          to="/"
          className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300
            ${theme === 'modern'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 button-glow'
              : 'bg-nostalgic-background text-nostalgic-text border border-nostalgic-border nostalgic-shadow hover:bg-nostalgic-border/10'}
          `}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

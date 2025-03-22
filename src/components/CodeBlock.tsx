
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'cpp', 
  title = 'Example', 
  showLineNumbers = true 
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className={`code-card my-4 ${theme === 'nostalgic' ? 'font-mono' : ''}`}>
      <div className={`flex justify-between items-center px-4 py-2 ${
        theme === 'modern' ? 'border-b border-border bg-muted/30' : 'border-b border-nostalgic-border bg-nostalgic-background'
      }`}>
        <div className="flex items-center gap-2">
          {theme === 'modern' ? (
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          ) : null}
          <span className={`font-medium ${theme === 'nostalgic' ? 'text-nostalgic-highlight' : ''}`}>
            {title}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className={`p-1 rounded ${
            theme === 'modern' 
              ? 'hover:bg-secondary/30 text-foreground/70 hover:text-foreground' 
              : 'hover:bg-nostalgic-border text-nostalgic-text hover:text-nostalgic-highlight'
          }`}
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto ${
        theme === 'modern' ? 'bg-card text-foreground' : 'bg-nostalgic-background text-nostalgic-text'
      }`}>
        <code>
          {lines.map((line, index) => (
            <div key={index} className="table-row">
              {showLineNumbers && (
                <span className={`table-cell pr-4 select-none text-right ${
                  theme === 'modern' ? 'text-muted-foreground' : 'text-nostalgic-text/50'
                }`}>
                  {index + 1}
                </span>
              )}
              <span className="table-cell">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;

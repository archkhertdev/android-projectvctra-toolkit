
import React, { useState } from 'react';
import TerminalWindow from './TerminalWindow';
import TypingEffect from './TypingEffect';

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsTyping(true), 300);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div className="animate-fade-in my-4">
      <TerminalWindow title={`feature@vctra:~/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="terminal-prompt font-bold text-terminal-neonGreen mb-2">
          {title}
        </div>
        {isTyping ? (
          <TypingEffect text={description} typingSpeed={20} />
        ) : (
          <div className="h-4 w-full bg-terminal-border/20 animate-pulse rounded"></div>
        )}
      </TerminalWindow>
    </div>
  );
};

export default FeatureCard;


import React from 'react';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal@vctra:~",
  children,
  className = "",
}) => {
  return (
    <div className={`terminal-window relative ${className}`}>
      <div className="terminal-header relative z-10">
        <div className="flex space-x-2">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-xs text-terminal-text">{title}</div>
      </div>
      <div className="terminal-body relative">
        {children}
        <div className="scanline"></div>
        <div className="screen-flicker"></div>
      </div>
    </div>
  );
};

export default TerminalWindow;

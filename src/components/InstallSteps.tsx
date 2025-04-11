
import React from 'react';
import TerminalWindow from './TerminalWindow';

const installSteps = [
  "Download Termux from F-Droid or Play Store",
  "Open Termux and run:",
  "pkg install python",
  "pkg install git",
  "Clone the toolkit:",
  "git clone https://github.com/vctraontop/vctratoolkit2.git",
  "Move into the folder:",
  "cd vctratoolkit2",
  "List files:",
  "ls",
  "Run the toolkit:",
  "python vctratoolkit2.py"
];

const InstallSteps: React.FC = () => {
  return (
    <TerminalWindow title="install@vctra:~/installation">
      <div className="space-y-1">
        <div className="text-terminal-neonGreen font-bold mb-4">How to Install & Run (for Android)</div>
        
        {installSteps.map((step, index) => {
          const isCommand = index === 2 || index === 3 || index === 5 || index === 7 || index === 9 || index === 11;
          
          return (
            <div key={index} className={`${isCommand ? 'pl-6 text-terminal-neonGreen' : 'installation-step'}`}>
              {isCommand ? <span className="text-terminal-text opacity-70 mr-2">&gt;</span> : ""}{step}
            </div>
          );
        })}
      </div>
    </TerminalWindow>
  );
};

export default InstallSteps;

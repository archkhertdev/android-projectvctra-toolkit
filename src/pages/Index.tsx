
import React, { useState, useEffect } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import TypingEffect from '../components/TypingEffect';
import FeatureCard from '../components/FeatureCard';
import InstallSteps from '../components/InstallSteps';
import { Github, Terminal } from 'lucide-react';

const features = [
  {
    title: "SMTP Email Spammer",
    description: "Send endless custom emails rapidly to test spam filters or mail servers."
  },
  {
    title: "Website Vulnerability Tester",
    description: "Check HTTP headers, search for SQL Injection/XSS flaws, form detection, and more."
  },
  {
    title: "IP Address Tracker",
    description: "Get location, ISP, coordinates, and country info from an IP address."
  },
  {
    title: "Internet Speed Tester",
    description: "Quickly measure your download/upload speed and ping stats."
  },
  {
    title: "Directory Brute Forcer",
    description: "Find hidden folders/directories on websites."
  },
  {
    title: "Port Scanner",
    description: "Scan open ports on any server without needing root."
  },
  {
    title: "JavaScript Link Crawler",
    description: "Extract all internal/external links from a site's JavaScript."
  }
];

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  
  useEffect(() => {
    // Sequence the animations
    setTimeout(() => setShowSubtitle(true), 2000);
    setTimeout(() => setShowBrief(true), 4000);
    setTimeout(() => setShowFeatures(true), 6000);
  }, []);

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="my-8">
        <TerminalWindow className="md:p-6 p-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="text-terminal-neonGreen mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-neonGreen">
                <TypingEffect 
                  text="PROJECT VCTRA TOOLKIT" 
                  onComplete={() => setIntroComplete(true)}
                />
              </h1>
            </div>
            
            {showSubtitle && (
              <h2 className="text-xl md:text-2xl font-semibold animate-fade-in">
                <span className="text-terminal-green opacity-90">Advanced Cyber Utilities for Android Termux - No Root Needed</span>
              </h2>
            )}
            
            {showBrief && (
              <p className="text-terminal-text max-w-3xl mx-auto animate-fade-in">
                A powerful suite of hacking-inspired tools designed to analyze, test, and interact with networks and websites — all from your Android phone.
              </p>
            )}
          </div>
        </TerminalWindow>
      </section>

      {/* Features Section */}
      {showFeatures && (
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-terminal-neonGreen flex items-center">
            <span className="mr-2 opacity-70">&gt;</span> Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            ))}
          </div>
        </section>
      )}

      {/* Installation Section */}
      {showFeatures && (
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-terminal-neonGreen flex items-center">
            <span className="mr-2 opacity-70">&gt;</span> Installation
          </h2>
          <InstallSteps />
        </section>
      )}

      {/* Footer */}
      <footer className="my-12 pt-8 border-t border-terminal-border">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-terminal-text mb-4 md:mb-0">
            Built by <span className="text-terminal-neonGreen">VCTRA On Top</span> | Fully Compatible with Non-Rooted Android Devices
          </p>
          <a 
            href="https://github.com/vctraontop/vctratoolkit2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-terminal-neonGreen hover:opacity-80 transition-opacity"
          >
            <Github className="mr-2 h-5 w-5" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

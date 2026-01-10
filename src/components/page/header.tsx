
"use client";

import { useState, useEffect } from 'react';
import Logo from '@/components/page/logo';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-up",
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
      style={{ animationDelay: '200ms', opacity: 0 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start h-20">
        
      </div>
    </header>
  );
};

export default Header;


'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md py-3 border-border' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
            F
          </div>
          <span className="text-xl font-headline font-bold tracking-tight hidden sm:block">
            FiscalFlow<span className="text-primary">Pro</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l pl-6 ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              title="Change Language"
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="ml-2 px-6 rounded-full font-semibold">
              {t.nav.cta}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium p-2 hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            <div className="flex items-center justify-between p-2">
              <span className="text-sm font-medium">Language</span>
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                {language === 'es' ? 'English' : 'Español'}
              </Button>
            </div>
            <Button className="w-full font-semibold py-6 text-lg">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

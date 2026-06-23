
'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              F
            </div>
            <span className="text-lg font-headline font-bold">
              FiscalFlow<span className="text-primary">Pro</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

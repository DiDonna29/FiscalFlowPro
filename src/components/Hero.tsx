'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in max-w-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="truncate">New: Version 2.0 Released</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-headline font-extrabold tracking-tight mb-6 leading-[1.1] break-words">
            {t.hero.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed break-words">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full group shrink-0">
              <span className="truncate">{t.hero.ctaPrimary}</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full bg-background/50 backdrop-blur-sm shrink-0">
              <Play className="mr-2 h-4 w-4 fill-current" />
              <span className="truncate">{t.hero.ctaSecondary}</span>
            </Button>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-2xl border bg-card shadow-2xl p-2 md:p-4 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full">
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden border">
              <Image 
                src="https://picsum.photos/seed/taxflow1/1200/800"
                alt="FiscalFlow Pro Dashboard"
                fill
                className="object-cover"
                data-ai-hint="tax dashboard"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

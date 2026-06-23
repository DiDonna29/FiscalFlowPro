
'use client';

import { LanguageProvider } from '@/components/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function LandingPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

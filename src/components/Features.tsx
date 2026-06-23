
'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, FileText, BarChart3, ShieldCheck } from 'lucide-react';

const icons = [Calculator, FileText, BarChart3, ShieldCheck];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.list.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

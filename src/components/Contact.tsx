
'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Your inquiry has been sent. We'll be in touch soon!",
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl border shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
                {t.contact.title}
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                {t.contact.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </div>
                  <span>hello@fiscalflow.pro</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.email}</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full py-6 text-lg font-bold">
                  {t.contact.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

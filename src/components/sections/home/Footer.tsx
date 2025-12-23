'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState } from 'react';

const DEFAULT_FOOTER = {
  companyName: 'Your Startup',
  tagline: 'Building the future, one innovation at a time.',
  description: 'We help startups and businesses transform their ideas into successful digital products with cutting-edge technology and expert guidance.',
  
  // Contact Information
  email: 'hello@yourstartup.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
  
  // Navigation Links
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '/contact' }
  ],
  
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Help Center', href: '/help' },
    { label: 'API Reference', href: '/api' }
  ],
  
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' }
  ],
  
  // Social Media
  socialLinks: [
    { platform: 'Twitter', href: 'https://twitter.com/yourstartup', icon: Twitter },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/yourstartup', icon: Linkedin },
    { platform: 'Facebook', href: 'https://facebook.com/yourstartup', icon: Facebook },
    { platform: 'Instagram', href: 'https://instagram.com/yourstartup', icon: Instagram }
  ],
  
  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates, tips, and insights delivered to your inbox.',
  newsletterPlaceholder: 'Enter your email address',
  newsletterButtonText: 'Subscribe',
  
  // Copyright
  copyrightText: '© 2024 Your Startup. All rights reserved.',
  
  // Additional Links
  bottomLinks: [
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Security', href: '/security' }
  ]
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubscribing(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
      setIsSubscribing(false);
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setSubscribeMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span data-editable="description">{config.description}</span>
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="email">{config.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="phone">{config.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="address">{config.address}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {config.socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.platform}
                      onClick={() => handleLinkClick(social.href)}
                      data-editable-href={`socialLinks[${idx}].href`}
                      data-href={social.href}
                      className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <IconComponent className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {config.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`quickLinks[${idx}].href`}
                      data-href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span data-editable={`quickLinks[${idx}].label`}>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {config.resources.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`resources[${idx}].href`}
                      data-href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span data-editable={`resources[${idx}].label`}>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? 'Subscribing...' : config.newsletterButtonText}
                </Button>
                {subscribeMessage && (
                  <p className="text-sm text-green-600">{subscribeMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {config.legal.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legal[${idx}].href`}
                  data-href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span data-editable={`legal[${idx}].label`}>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Additional Bottom Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-border">
            {config.bottomLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                data-editable-href={`bottomLinks[${idx}].href`}
                data-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span data-editable={`bottomLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
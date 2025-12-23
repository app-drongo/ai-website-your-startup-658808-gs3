'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, TrendingUp, Target } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  headline: 'Build, Scale, Succeed',
  subheadline:
    'The all-in-one platform that transforms your startup idea into a thriving business with AI-powered tools and data-driven insights.',
  description:
    "Join thousands of entrepreneurs who've accelerated their growth with our comprehensive suite of startup tools. From MVP development to market validation, we've got you covered.",
  ctaText: 'Start Building Today',
  ctaHref: '/get-started',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  features: [
    'AI-powered market analysis',
    'Rapid MVP development',
    'Real-time performance tracking',
  ],
  statsLabel: 'Trusted by',
  statsValue: '10,000+',
  statsDescription: 'entrepreneurs worldwide',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const featureIcons = [Zap, TrendingUp, Target];

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span
                  data-editable="headline"
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  {config.headline}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>

              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {config.features.map((feature, idx) => {
              const IconComponent = featureIcons[idx];
              return (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">
                      <span data-editable={`features[${idx}]`}>{feature}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div
            className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                <span data-editable="statsLabel">{config.statsLabel}</span>
              </p>
              <p className="text-3xl font-bold text-primary mb-1">
                <span data-editable="statsValue">{config.statsValue}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                <span data-editable="statsDescription">{config.statsDescription}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

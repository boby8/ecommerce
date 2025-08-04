import * as React from 'react';

import { hero } from '@/assets';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

export interface HeroProps {
  className?: string;
  onShopNowClick?: () => void;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, onShopNowClick }, ref) => {
    const stats = [
      { label: '200+ International Brands', value: '200+' },
      { label: '2,000+ High-Quality Products', value: '2,000+' },
      { label: '30,000+ Happy Customers', value: '30,000+' },
    ];

    return (
      <section ref={ref} className={cn('bg-white py-16 lg:py-24', className)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-black lg:text-6xl">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and add
                  color to your sense of style.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={onShopNowClick}
                  className="rounded-full bg-black px-8 py-3 font-medium text-white hover:bg-gray-800"
                >
                  Shop Now
                </Button>
              </div>

              {/* Statistics */}
              <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:gap-8">
                {stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="hidden h-12 w-px bg-gray-300 sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Hero image */}
                <div className="h-96 rounded-lg lg:h-[500px]">
                  <img
                    src={hero}
                    alt="Hero"
                    className="size-full rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute right-4 top-4 size-8 rounded-full bg-black opacity-20"></div>
              <div className="absolute bottom-8 left-8 size-6 rounded-full bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

Hero.displayName = 'Hero';

export { Hero };

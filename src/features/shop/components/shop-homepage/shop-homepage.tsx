import * as React from 'react';

import { cn } from '@/utils/cn';

import { Header } from '../header';
import { Hero } from '../hero';

export interface ShopHomepageProps {
  className?: string;
  onSearch?: (value: string) => void;
  onNavigationClick?: (item: any) => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onShopNowClick?: () => void;
}

const ShopHomepage = React.forwardRef<HTMLDivElement, ShopHomepageProps>(
  (
    {
      className,
      onSearch,
      onNavigationClick,
      onCartClick,
      onProfileClick,
      onShopNowClick,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('min-h-screen bg-white', className)}>
        {/* Header */}
        <Header
          onSearch={onSearch}
          onNavigationClick={onNavigationClick}
          onCartClick={onCartClick}
          onProfileClick={onProfileClick}
        />

        {/* Hero Section */}
        <Hero onShopNowClick={onShopNowClick} />
      </div>
    );
  },
);

ShopHomepage.displayName = 'ShopHomepage';

export { ShopHomepage };

import { ShoppingCart, User } from 'lucide-react';
import * as React from 'react';

import { shopCo } from '@/assets';
import { Button } from '@/components/ui/button';
import { Navigation, type NavigationItem } from '@/components/ui/navigation';
import { SearchBar } from '@/components/ui/search-bar';
import { cn } from '@/utils/cn';

export interface HeaderProps {
  className?: string;
  onSearch?: (value: string) => void;
  onNavigationClick?: (item: NavigationItem) => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
}

const navigationItems: NavigationItem[] = [
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'On Sale', href: '/sale' },
  { label: 'New Arrivals', href: '/new' },
  { label: 'Brands', href: '/brands' },
];

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    { className, onSearch, onNavigationClick, onCartClick, onProfileClick },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cn('bg-white border-b border-gray-200', className)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <img src={shopCo} alt="SHOP.CO" width={100} height={100} />
            </div>

            {/* Navigation */}
            <div className="ml-8 hidden md:block">
              <Navigation
                items={navigationItems}
                onItemClick={onNavigationClick}
                className="space-x-8"
              />
            </div>

            {/* Search Bar */}
            <div className="mx-8 max-w-lg flex-1">
              <SearchBar onSearch={onSearch} />
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={onCartClick}
                className="relative p-2"
              >
                <ShoppingCart className="size-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={onProfileClick}
                className="p-2"
              >
                <User className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';

export { Header };

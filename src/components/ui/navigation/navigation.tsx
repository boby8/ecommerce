import * as React from 'react';

import { cn } from '@/utils/cn';

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: (item: NavigationItem) => void;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ items, className, onItemClick }, ref) => {
    return (
      <nav ref={ref} className={cn('flex space-x-8', className)}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onItemClick?.(item);
            }}
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black"
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </a>
        ))}
      </nav>
    );
  },
);

Navigation.displayName = 'Navigation';

export { Navigation };

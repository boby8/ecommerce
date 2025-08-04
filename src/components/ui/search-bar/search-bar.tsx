import * as React from 'react';

import { cn } from '@/utils/cn';

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  placeholder?: string;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    { className, onSearch, placeholder = 'Search for products...', ...props },
    ref,
  ) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch?.(e.currentTarget.value);
      }
    };

    return (
      <div className="relative max-w-md flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="size-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="text"
          className={cn(
            'block w-full pl-10 pr-3 py-3  rounded-full leading-5 bg-[#F0F0F0] placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-1 focus:ring-black focus:border-black focus:bg-white sm:text-sm',
            className,
          )}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          {...props}
        />
      </div>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };

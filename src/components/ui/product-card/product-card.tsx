import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/utils/cn';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={cn(
        'h-4 w-4',
        i < Math.floor(rating)
          ? 'text-yellow-400 fill-current'
          : 'text-gray-300 fill-current',
      )}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="ml-1 text-sm text-gray-600">({rating}/5)</span>
    </div>
  );
};

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, className, onAddToCart, onProductClick }, ref) => {
    const hasDiscount =
      product.originalPrice && product.originalPrice > product.price;

    return (
      <Card
        ref={ref}
        className={cn(
          'group cursor-pointer transition-all duration-200 hover:shadow-lg',
          className,
        )}
        onClick={() => onProductClick?.(product)}
      >
        <CardContent className="p-4">
          {/* Product Image */}
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="size-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
            {hasDiscount && (
              <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                {product.discount}% OFF
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-black">
              {product.name}
            </h3>

            <StarRating rating={product.rating} />

            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-black">
                ${product.price}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(product);
            }}
            className="w-full"
            size="sm"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  },
);

ProductCard.displayName = 'ProductCard';

export { ProductCard };

'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  category: string;
  brand?: string;
  colorCount?: number;
  isBestSeller?: boolean;
  href?: string;
}

export function Card({
  id,
  title,
  description,
  image,
  price,
  category,
  brand,
  colorCount,
  isBestSeller = false,
  href = `/products/${id}`,
}: CardProps) {
  const CardContent = () => (
    <div className="bg-light-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      <div className="aspect-square relative bg-light-200">
        {isBestSeller && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-orange text-light-100 text-caption font-medium px-3 py-1 rounded">
              Best Seller
            </span>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-heading-3 font-medium text-dark-900 mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-body text-dark-700 mb-2">{category}</p>
          {colorCount && (
            <p className="text-caption text-dark-500">
              {colorCount} Colour{colorCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {description && (
          <p className="text-body text-dark-500 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex justify-between items-center">
          <span className="text-heading-3 font-medium text-dark-900">
            ${price.toFixed(2)}
          </span>
          {brand && (
            <span className="text-caption text-dark-500 bg-light-200 px-2 py-1 rounded">
              {brand}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
}

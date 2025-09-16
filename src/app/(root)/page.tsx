import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';

const sampleProducts = [
  {
    id: '1',
    title: 'Nike Air Force 1 Mid \'07',
    category: "Men's Shoes",
    image: '/shoes/shoe-1.jpg',
    price: 115,
    colorCount: 6,
    isBestSeller: true,
    brand: 'Nike',
  },
  {
    id: '2',
    title: 'Nike Air Max 90',
    category: "Women's Shoes",
    image: '/shoes/shoe-2.webp',
    price: 130,
    colorCount: 4,
    brand: 'Nike',
  },
  {
    id: '3',
    title: 'Nike Jordan 1',
    category: "Men's Shoes",
    image: '/shoes/shoe-3.webp',
    price: 170,
    colorCount: 8,
    brand: 'Jordan',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-light-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-heading-1 font-jost text-dark-900 mb-8 text-center">
            EcomCrypto
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

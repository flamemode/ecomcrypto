import { db } from './index';
import { products } from './schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    brand: 'Nike',
    category: 'Sneakers'
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    brand: 'Nike',
    category: 'Sneakers'
  },
  {
    name: 'Nike Dunk Low',
    description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low returns with crisp overlays and original team colors.',
    price: '99.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61077859-0a28-4b8d-9c4e-4b2e8b2b2b2b/dunk-low-mens-shoes-LLKMCX.png',
    brand: 'Nike',
    category: 'Sneakers'
  },
  {
    name: 'Nike React Infinity Run',
    description: 'A lightweight, responsive running shoe designed to help reduce injury and keep you on the run.',
    price: '159.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f4b4b4b-4b4b-4b4b-4b4b-4b4b4b4b4b4b/react-infinity-run-flyknit-3-mens-road-running-shoes-ZQGpnh.png',
    brand: 'Nike',
    category: 'Running'
  },
  {
    name: 'Nike Blazer Mid',
    description: 'The Nike Blazer Mid brings a timeless design back to the streets while delivering the comfort you need.',
    price: '89.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f7a5a5a-5a5a-5a5a-5a5a-5a5a5a5a5a5a/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
    brand: 'Nike',
    category: 'Lifestyle'
  }
];

export async function seedProducts() {
  try {
    console.log('Seeding products...');
    await db.insert(products).values(nikeProducts);
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedProducts();
}
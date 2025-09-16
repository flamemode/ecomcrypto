'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const footerSections = [
    {
      title: 'Featured',
      links: [
        { href: '/air-force-1', label: 'Air Force 1' },
        { href: '/huarache', label: 'Huarache' },
        { href: '/air-max-90', label: 'Air Max 90' },
        { href: '/air-max-95', label: 'Air Max 95' },
      ],
    },
    {
      title: 'Shoes',
      links: [
        { href: '/shoes', label: 'All Shoes' },
        { href: '/shoes/custom', label: 'Custom Shoes' },
        { href: '/shoes/jordan', label: 'Jordan Shoes' },
        { href: '/shoes/running', label: 'Running Shoes' },
      ],
    },
    {
      title: 'Clothing',
      links: [
        { href: '/clothing', label: 'All Clothing' },
        { href: '/clothing/modest', label: 'Modest Wear' },
        { href: '/clothing/hoodies', label: 'Hoodies & Pullovers' },
        { href: '/clothing/shirts', label: 'Shirts & Tops' },
      ],
    },
    {
      title: "Kids'",
      links: [
        { href: '/kids/shoes/infant', label: 'Infant & Toddler Shoes' },
        { href: '/kids/shoes', label: "Kids' Shoes" },
        { href: '/kids/shoes/jordan', label: "Kids' Jordan Shoes" },
        { href: '/kids/shoes/basketball', label: "Kids' Basketball Shoes" },
      ],
    },
  ];

  const socialLinks = [
    { href: 'https://twitter.com', icon: '/x.svg', label: 'Twitter' },
    { href: 'https://facebook.com', icon: '/facebook.svg', label: 'Facebook' },
    { href: 'https://instagram.com', icon: '/instagram.svg', label: 'Instagram' },
  ];

  const legalLinks = [
    { href: '/guides', label: 'Guides' },
    { href: '/terms-of-sale', label: 'Terms of Sale' },
    { href: '/terms-of-use', label: 'Terms of Use' },
    { href: '/privacy-policy', label: 'Nike Privacy Policy' },
  ];

  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lead font-medium text-light-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-dark-500 hover:text-light-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-8">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-dark-500 hover:text-light-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.label}</span>
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="h-6 w-6 filter invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/globe.svg"
                  alt="Location"
                  width={16}
                  height={16}
                  className="h-4 w-4 filter invert opacity-60"
                />
                <span className="text-body text-dark-500">Norge</span>
              </div>
              <span className="text-body text-dark-500">
                © 2025 Nike, Inc. All Rights Reserved
              </span>
            </div>

            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body text-dark-500 hover:text-light-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

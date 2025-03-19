"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-900">Admyral.ai</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            How it works
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://app.admyral.ai" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-gray-300">
              Login
            </Button>
          </Link>
          <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:bg-gray-800">
              Try for free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              How it works
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 py-2" onClick={toggleMenu}>
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Link href="https://app.admyral.ai" onClick={toggleMenu} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-gray-300">
                  Login
                </Button>
              </Link>
              <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" onClick={toggleMenu} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Try for free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

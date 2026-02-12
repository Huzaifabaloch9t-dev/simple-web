"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          MyStore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/products" className="hover:text-indigo-600 transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/products"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link href="/" className="block hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-indigo-600">
            About
          </Link>
          <Link href="/products" className="block hover:text-indigo-600">
            Products
          </Link>
          <Link href="/contact" className="block hover:text-indigo-600">
            Contact
          </Link>
          <Link
            href="/products"
            className="block bg-indigo-600 text-white text-center px-4 py-2 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}

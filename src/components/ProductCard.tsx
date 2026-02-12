"use client";

import { ShoppingCart, Star } from "lucide-react";

type Props = {
  title: string;
  price: number;
  image?: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />
        
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} className="text-gray-300" />
          <span className="text-sm text-gray-500 ml-2">(4.0)</span>
        </div>

        {/* Price */}
        <p className="text-indigo-600 font-bold text-xl mb-4">
          ${price}
        </p>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

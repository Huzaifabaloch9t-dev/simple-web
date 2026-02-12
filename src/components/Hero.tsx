import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-700 via-purple-700 to-indigo-900 text-white">
      
      {/* Background Blur Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 text-sm bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          🔥 New Collection 2026
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Elevate Your <span className="text-yellow-400">Shopping</span> Experience
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Discover premium quality products curated just for you. 
          Shop smart, save more, and enjoy seamless online shopping.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="border border-white px-8 py-3 rounded-2xl hover:bg-white hover:text-indigo-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}

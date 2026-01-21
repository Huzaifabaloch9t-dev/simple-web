import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          This is a simple, modern and attractive website built with Next.js and TSX.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-2xl border border-white font-semibold hover:bg-white hover:text-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm opacity-80">
        © 2026 | Built with Next.js & TypeScript
      </footer>
    </main>
  );
}

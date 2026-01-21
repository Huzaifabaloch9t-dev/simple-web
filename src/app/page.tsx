import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-600 to-purple-700 text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg opacity-90 mb-8">
          Simple and attractive website using Next.js + TSX
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

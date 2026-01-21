import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-gray-600 mb-6">
          Simple Next.js + TypeScript Website
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/about" className="px-6 py-3 bg-indigo-600 text-white rounded-xl">
            About
          </Link>
          <Link href="/contact" className="px-6 py-3 border rounded-xl">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

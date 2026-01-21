import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow max-w-xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 mb-6">
          We build modern and fast websites using Next.js.
        </p>

        <Link href="/" className="text-indigo-600 underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

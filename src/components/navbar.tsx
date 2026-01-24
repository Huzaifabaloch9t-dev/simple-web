import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">MyStore</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

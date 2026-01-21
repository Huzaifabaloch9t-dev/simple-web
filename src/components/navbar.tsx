import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-indigo-600">MySite</h1>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <Link href="/about" className="hover:text-indigo-600">About</Link>
        <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
      </div>
    </nav>
  );
}

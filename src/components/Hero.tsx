import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Best Online Shopping Experience
      </h1>
      <p className="mb-6">
        Buy premium quality products at best prices
      </p>
      <Link
        href="/products"
        className="bg-white text-indigo-600 px-6 py-3 rounded-xl"
      >
        Shop Now
      </Link>
    </section>
  );
}

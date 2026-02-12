import Navbar from "../../components/Nav";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:5000/api/products", {
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our premium collection of high-quality products designed
            to give you the best shopping experience.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No products available.
          </div>
        ) : (
          <div className="grid gap-8 
                          grid-cols-1 
                          sm:grid-cols-2 
                          md:grid-cols-3 
                          lg:grid-cols-4">
            {products.map((p: any) => (
              <ProductCard
                key={p._id}
                title={p.title}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

import Navbar from "../../components/Nav";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

async function getProducts() {
  const res = await fetch("http://localhost:5000/api/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-3 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p._id} title={p.title} price={p.price} />
        ))}
      </div>
      <Footer />
    </>
  );
}

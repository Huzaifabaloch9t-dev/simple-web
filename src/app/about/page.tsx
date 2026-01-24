import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-600 mt-4">
          We provide quality products with trust.
        </p>
      </div>
      <Footer />
    </>
  );
}

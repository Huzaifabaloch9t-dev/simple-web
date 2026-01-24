import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p>Email: support@mystore.com</p>
      </div>
      <Footer />
    </>
  );
}

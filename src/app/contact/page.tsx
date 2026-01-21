import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow max-w-xl w-full">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Contact Us
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
            rows={4}
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            Send
          </button>
        </form>

        <div className="text-center mt-4">
          <Link href="/" className="text-indigo-600 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

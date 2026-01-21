"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    const data = await res.json();
    setStatus(data.message);
    form.reset();
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-xl shadow max-w-xl w-full">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Contact
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" className="w-full border p-3 rounded" />
          <input name="email" placeholder="Email" className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Message" rows={4} className="w-full border p-3 rounded" />
          <button className="w-full bg-indigo-600 text-white py-3 rounded">
            Send
          </button>
        </form>

        {status && (
          <p className="text-green-600 text-center mt-4">{status}</p>
        )}
      </div>
    </main>
  );
}

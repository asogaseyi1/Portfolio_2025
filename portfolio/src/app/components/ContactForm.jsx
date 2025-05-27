"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzwqqwb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("There was a problem submitting your form.");
    }
    };
  
    return (
    <section
      id="contact"
      className="text-center space-y-6 py-10 max-w-xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold relative inline-block after:block after:h-1 after:bg-blue-500 after:w-16 after:mx-auto after:mt-2">
        Get in Touch
      </h2>

      {submitted ? (
        <p className="text-green-600 text-lg">Thanks! Your message was sent. </p>
      ) : (
        <>
          <p className="text-lg">Feel free to send me a message — I’d love to hear from you!</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </>
      )}
    </section>
  );
}
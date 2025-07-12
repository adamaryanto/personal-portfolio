import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // jika pakai React Router

function ThanksPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-4">
      <motion.div
        className="max-w-xl text-center bg-[#112240] p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Thank You!</h1>
        <p className="mb-6 text-gray-300">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-[#00b4d8] hover:bg-[#0096c7] text-white rounded-md transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default ThanksPage;

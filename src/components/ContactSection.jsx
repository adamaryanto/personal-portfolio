import React from 'react';
import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0a192f] text-white">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

        <form
          action="https://formsubmit.co/adamaryanto.my.id@gmail.com"
          method="POST"
          className="space-y-6 bg-[#112240] p-8 rounded-xl shadow-lg"
        >
          {/* Disable captcha and redirect to /thanks after submit */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://adamaryanto.my.id/thanks"
          />

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-[#0a192f] text-white border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-[#0a192f] text-white border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-[#0a192f] text-white border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#00b4d8] hover:bg-[#0096c7] text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactSection;

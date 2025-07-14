import React from 'react';
import { motion } from 'framer-motion';
import Lanyard from '../../Lanyard/Lanyard/Lanyard'


function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      {/* Kolom kiri dengan gambar */}

      <motion.div 
        className="contact-left-pane"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Lanyard position={[0,0,23]} gravity={[0,-40,0]}/>
      </motion.div>

      {/* Kolom kanan dengan konten form */}
      <motion.div
        className="contact-right-pane"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="form-content-wrapper">
          {/* Container untuk judul dan underline */}
          <div className="contact-title-container">
            <h2 className="contact-title">Contact</h2>
            <motion.div
              className="contact-underline"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.8 }}
            />
          </div>

          <form
            action="https://formsubmit.co/adamaryanto.my.id@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/thanks" />
            
            <input type="text" name="name" placeholder="Your name" required className="form-input" />
            <input type="email" name="email" placeholder="Your email" required className="form-input" />
            <input type="text" name="subject" placeholder="Subject" required className="form-input" />
            <textarea name="message" placeholder="Your Message" rows="4" required className="form-input"></textarea>
            
            <button type="submit" className="form-button">
              {/* Anda bisa menambahkan icon di sini jika menggunakan library icon */}
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
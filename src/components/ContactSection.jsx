// 1. Import useNavigate dari react-router-dom
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lanyard from '../../Lanyard/Lanyard/Lanyard';

function ContactSection() {
  // 2. Inisialisasi hook useNavigate
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // 3. Jika berhasil, panggil navigate ke halaman /thanks
        navigate('/thanks');
      } else {
        setStatus("Oops! Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      setStatus("Oops! Terjadi kesalahan saat mengirim pesan.");
    }
  };

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
            onSubmit={handleSubmit}
            action="https://formsubmit.co/adamaryanto.my.id@gmail.com"
            method="POST"
            className="contact-form"
          >
            {/* ... input fields tetap sama ... */}
            <input type="text" name="name" placeholder="Your name" required className="form-input" />
            <input type="email" name="email" placeholder="Your email" required className="form-input" />
            <input type="text" name="subject" placeholder="Subject" required className="form-input" />
            <textarea name="message" placeholder="Your Message" rows="4" required className="form-input"></textarea>
            
            <button type="submit" className="form-button">
              Send
            </button>
            
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
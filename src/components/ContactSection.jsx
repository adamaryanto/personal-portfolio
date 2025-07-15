// 1. Import useNavigate dan ikon
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegEnvelope } from "react-icons/fa"; // <-- Impor ikon surat
import Lanyard from '../../Lanyard/Lanyard/Lanyard';

function ContactSection() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    // ... (fungsi handleSubmit tetap sama)
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
      {/* ... (Kolom kiri tetap sama) ... */}
      <motion.div 
        className="contact-left-pane"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Lanyard position={[0,0,23]} gravity={[0,-40,0]}/>
      </motion.div>

      <motion.div
        className="contact-right-pane"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="form-content-wrapper">
          <div className="contact-title-container">
            {/* 2. Ubah h2 untuk menyertakan ikon dan teks baru */}
            <h2 className="contact-title">
              <FaRegEnvelope /> 
              <span>Get In Touch</span>
            </h2>
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
            // ... (sisa form tetap sama) ...
          >
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
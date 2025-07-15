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
      <motion.div 
        className="contact-left-pane"
        // ... (props motion tetap sama)
      >
        <Lanyard position={[0,0,23]} gravity={[0,-40,0]}/>
      </motion.div>

      <motion.div
        className="contact-right-pane"
        // ... (props motion tetap sama)
      >
        <div className="form-content-wrapper">
          <div className="contact-title-container">
            <h2 className="contact-title">Contact</h2>
            <motion.div
              className="contact-underline"
              // ... (props motion tetap sama)
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
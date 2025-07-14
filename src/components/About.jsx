import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../../React/SpotlightCard/SpotlightCard';
import heroImage from '../assets/Foto/WhatsApp Image 2025-07-06 at 13.42.02_bed008a2.jpg';

function About() {
  return (
    <section className="sectionAbout" id="about">
      <motion.div
        className="aboutContent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* 1. Bungkus judul dengan div untuk positioning */}
        <div className="aboutTitleContainer">
          <h1 className="aboutTitle">About me</h1>
          {/* 2. Buat garis bawah menggunakan motion.div */}
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.8 }}
          />
        </div>

        <SpotlightCard className="aboutBodyGlass">
          <div className="aboutBody">
            <motion.div
              className="aboutImage"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <img src={heroImage} alt="About" className="aboutImg" />
            </motion.div>

            <motion.div
              className="about-me"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Saya adalah seorang Front-End Developer yang memiliki minat besar dalam membangun antarmuka web yang interaktif, modern, dan responsif. Dengan dasar kuat dalam HTML, CSS, dan JavaScript, saya juga menguasai framework seperti React.js dan Tailwind CSS. Selain mengembangkan aplikasi web, saya juga aktif memperluas pengetahuan melalui sertifikasi dan proyek-proyek open source.
            </motion.div>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}

export default About;
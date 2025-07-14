import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import hiroItem from '../assets/Foto/WhatsApp Image 2025-07-06 at 13.42.02_bed008a2.jpg';
import cv from '../assets/cv/Cv Adam 2025 (2).pdf';

const HeroContent = () => (
  <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }}>
    <motion.div className="intro-section" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
      <h1>Adam Aryanto</h1>
      <TypeAnimation sequence={['Frontend Developer', 2000, 'React Enthusiast', 2000]} wrapper="h3" speed={50} repeat={Infinity} />
      <p>Seorang Frontend Developer yang antusias membangun antarmuka web modern, responsif, dan berfokus pada pengalaman pengguna yang cepat dan intuitif.</p>

      <div className="btnGroupHiro">
        <a href="mailto:adamariyanto06@gmail.com" className="btnContact">Contact Me</a>
        <a href={cv} download className="btnCv">Download CV</a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/adamaryanto" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/adamaryanto" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/adamarynto/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </motion.div>

    <motion.div className="image-section" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}>
      <img src={hiroItem} alt="Adam Aryanto" />
    </motion.div>
  </motion.div>
);

export default HeroContent;

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AnimatePresence, motion } from 'framer-motion';

import ChatBot from './ChatBot';
import { FaCode, FaCertificate, FaTools } from 'react-icons/fa';
import ContactSection from './ContactSection';

function HiroSection() {
  const [techStack, setTeckStack] = useState(true);
  const [tools, setTools] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const dataSkil = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'VueJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  ];

  const dataTools = [
    { name: 'git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
    { name: 'vitejs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  ];

  const portfolioData = {
    projects: [
      {
        title: 'Landing Page Restaurant Burger',
        description: 'Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.',
        image: '/assetes/Portofolio/BurgerKill.png',
        demoLink: 'https://adamaryanto.github.io/restaurant-landing-page/',
        detailLink: '#',
      },
      {
        title: 'Gunting Batu Kertas Game',
        description: 'Game Gunting Batu Kertas interaktif berbasis React dengan desain modern dan statistik pemain (WinRate, jumlah pertandingan, dan poin). Aplikasi ini sepenuhnya berjalan di sisi frontend dan dirancang responsif untuk pengalaman pengguna yang optimal di berbagai perangkat.',
        image: '/assetes/Portofolio/Gunting Batu Kertas.png', // ganti dengan nama file gambarnya kalau belum ada
        demoLink: 'https://adamaryanto.github.io/gunting-batu-kertas-react-app/', // kalau sudah dideploy ke Vercel atau Netlify
        detailLink: 'https://github.com/adamaryanto/gunting-batu-kertas-react-app'
      },


          {
            title: 'Cek Khodam',
            description: 'Cek Khodam adalah aplikasi web hiburan yang memungkinkan pengguna mengecek nama mereka dan mendapatkan hasil "khodam" secara acak. Dilengkapi dengan animasi loader dan UI interaktif berbasis Tailwind CSS, aplikasi ini cocok untuk proyek frontend ringan dan seru.',
            image: '/assetes/Portofolio/Cek Khodam Online.png', // ganti dengan path thumbnail jika ada
            demoLink: 'https://adamaryanto.github.io/cek-khodam-online/', // isi dengan link demo jika tersedia
            detailLink: 'https://github.com/adamaryanto/cek-khodam-online' // ganti dengan link GitHub milikmu
          }

    ],
    certificates: [
  {
    image: '/assetes/Certificate/Belajar Dasar Pemrograman Web.png',
    title: 'Belajar Dasar Pemrograman Web',
    url: 'https://www.dicoding.com/certificates/EYX4J26G5ZDL',
  },
  {
    image: '/assetes/Certificate/Belajar Dasar Pemrograman Javascript .png',
    title: 'Belajar Dasar Pemrograman Javascript',
    url: 'https://www.dicoding.com/certificates/1RXYEOQG3ZVM',
  },
  {
    image: '/assetes/Certificate/Belajar Membuat Front-End Web Untuk Pemula.png',
    title: 'Belajar Membuat Front-End Web Untuk Pemula',
    url: 'https://www.dicoding.com/certificates/98XWEK1DWXM3',
  },
  {
    image: '/assetes/Certificate/Responsive Web Design.png',
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/adamarynto72/responsive-web-design',
  },
],

  
    techstack: [
  { title: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { title: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { title: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { title: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg' },
  { title: 'ReactJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { title: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
  { title: 'Node JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { title: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },

],
  };

  const currentItems = portfolioData[activeTab];

  return (
    <>
      {/* HERO SECTION */}
      <div className="wrappperHiroSection" id='home'>
        <section className="hero">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }}>
            <motion.div className="intro-section" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: false }}>
              <h1>Adam Aryanto</h1>
              <TypeAnimation sequence={[ 'Frontend Developer', 2000, 'React Enthusiast', 2000 ]} wrapper="h3" speed={50} repeat={Infinity} />
             <p>
                  Seorang Frontend Developer yang antusias membangun antarmuka web modern, responsif, dan berfokus pada pengalaman pengguna yang cepat dan intuitif.
            </p>

              <div className="btnGroupHiro">
                <a href="mailto:adamariyanto06@gmail.com" className="btnContact">
                  Contact Me
                </a>
                <a href="/assetes/cv/Cv Adam 2025.pdf" download className="btnCv">
                  Download CV
                </a>
              </div>
              <div className="social-icons">
                    <a href="https://github.com/adamaryanto" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/adamaryanto" target="_blank" rel="noopener noreferrer" hrefLang='https://www.linkedin.com/in/adamaryanto/'>
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/adam.ig" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
              </div>

            </motion.div>

            <motion.div className="image-section" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: false }}>
              <img src='/assetes/Foto/WhatsApp Image 2025-07-06 at 13.42.02_bed008a2.jpg' alt="Adam Aryanto" />
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* ABOUT SECTION */}
      <section className="sectionAbout" id="about">
        <motion.div className="aboutContent" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }}>
          <h1 className="aboutTitle">About me</h1>
          <div className="aboutBodyGlass">
            <div className="aboutBody">
              <motion.div className="aboutImage" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
                <img src='/assetes/Foto/WhatsApp Image 2025-07-06 at 13.42.02_bed008a2.jpg' alt="About" className="aboutImg" />
              </motion.div>
              <motion.div className="about-me" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
                Saya adalah seorang Front-End Developer yang memiliki minat besar dalam membangun antarmuka web yang interaktif, modern, dan responsif. Dengan dasar kuat dalam HTML, CSS, dan JavaScript, saya juga menguasai framework seperti React.js dan Tailwind CSS. Selain mengembangkan aplikasi web, saya juga aktif memperluas pengetahuan melalui sertifikasi dan proyek-proyek open source.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO SECTION */}

<section className="portfolio-section" id="portfolio">
  <div className="portfolio-header">
    <h1 className="portfolio-title">Portfolio Showcase</h1>
    <p className="portfolio-subtitle">
      Explore my journey through projects, certifications, and technical expertise.
    </p>

    {/* Tabs */}
    <div className="portfolio-tabs glass">
      <button
        className={activeTab === 'projects' ? 'active' : ''}
        onClick={() => setActiveTab('projects')}
      >
        <FaCode className="tab-icon" />
        <span>Projects</span>
      </button>
      <button
        className={activeTab === 'certificates' ? 'active' : ''}
        onClick={() => setActiveTab('certificates')}
      >
        <FaCertificate className="tab-icon" />
        <span>Certificates</span>
      </button>
      <button
        className={activeTab === 'techstack' ? 'active' : ''}
        onClick={() => setActiveTab('techstack')}
      >
        <FaTools className="tab-icon" />
        <span>Tech Stack</span>
      </button>
    </div>
  </div>

  {/* Grid Content */}
 <AnimatePresence mode="wait">
  <motion.div
    className={`portfolio-grid ${activeTab === 'techstack' ? 'tech-grid' : ''}`}
    key={activeTab}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    {currentItems.length === 0 ? (
      <motion.p style={{ color: 'gray', marginTop: '40px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Data belum tersedia.
      </motion.p>
    ) : activeTab === 'certificates' ? (
      currentItems.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block" // supaya <a> bisa membungkus div dengan benar
        >
        <motion.div
        
        key={idx}
        className="certificate-card glass"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        >
          <img src={item.image} alt={item.title} className="certificate-img" />
          <p className="certificate-title">{item.title}</p>
        </motion.div>
          </a>
      ))
    ) : activeTab === 'techstack' ? (
      currentItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="tech-card glass"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <img src={item.image} alt={item.title} className="tech-img" />
          <p className="tech-title">{item.title}</p>
        </motion.div>
      ))
    ) : (
      currentItems.map((item, idx) => (
        <motion.div
          className="portfolio-card glass"
          key={idx}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <img src={item.image} alt={item.title} className="portfolio-img" />
          <div className="portfolio-card-body">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            {(item.demoLink || item.detailLink) && (
              <div className="portfolio-btn-group">
                {item.demoLink && (
                  <a href={item.demoLink} className="btn-demo" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {item.detailLink && (
                  <a href={item.detailLink} className="btn-detail">
                    Details
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))
    )}
  </motion.div>
</AnimatePresence>
<section>
  <ContactSection/>
</section>
</section>




      
    </>
  );
}

export default HiroSection;

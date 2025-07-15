import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import TechCard from './TechCard';

const PortfolioContent = ({ currentItems, activeTab }) => {
  // 1. Buat object untuk memetakan nama tab ke komponennya
  const cardMap = {
    projects: ProjectCard, // Ganti 'projects' jika nama tab default Anda berbeda
    certificates: CertificateCard,
    techstack: TechCard,
  };

  // Pilih komponen yang sesuai, jika tidak ada, gunakan ProjectCard sebagai default
  const CardComponent = cardMap[activeTab] || ProjectCard;

  return (
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
        ) : (
          // 2. Gunakan CardComponent dan key yang lebih baik
          currentItems.map((item, idx) => (
            <CardComponent key={item.id || idx} item={item} idx={idx} />
          ))
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioContent;
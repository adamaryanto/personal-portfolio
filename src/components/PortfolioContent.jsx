import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // ✅ WAJIB ADA
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import TechCard from './TechCard';

const PortfolioContent = ({ currentItems, activeTab }) => {
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
        ) : activeTab === 'certificates' ? (
          currentItems.map((item, idx) => <CertificateCard key={idx} item={item} idx={idx} />)
        ) : activeTab === 'techstack' ? (
          currentItems.map((item, idx) => <TechCard key={idx} item={item} idx={idx} />)
        ) : (
          currentItems.map((item, idx) => <ProjectCard key={idx} item={item} idx={idx} />)
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioContent;

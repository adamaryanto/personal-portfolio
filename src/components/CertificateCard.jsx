import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ item, idx }) => {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
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
  );
};

export default CertificateCard;

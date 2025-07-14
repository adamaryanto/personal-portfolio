import React from 'react';
import { motion } from 'framer-motion';

const TechCard = ({ item, idx }) => {
  return (
    <motion.div
      className="tech-card glass"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
    >
      <img src={item.image} alt={item.title} className="tech-img" />
      <p className="tech-title">{item.title}</p>
    </motion.div>
  );
};

export default TechCard;

import { motion } from 'framer-motion';

const ProjectCard = ({ item, idx }) => (
  <motion.div className="portfolio-card glass"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
  >
    <img src={item.image} alt={item.title} className="portfolio-img" />
    <div className="portfolio-card-body">
      <h3>{item.title}</h3>
      {item.description && <p>{item.description}</p>}
      <div className="portfolio-btn-group">
        {item.demoLink && <a href={item.demoLink} className="btn-demo" target="_blank">Live Demo</a>}
        {item.linkGithub && <a href={item.linkGithub} className="btn-detail">Github</a>}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;

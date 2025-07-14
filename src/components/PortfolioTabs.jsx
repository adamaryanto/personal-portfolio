import { FaCode, FaCertificate, FaTools } from 'react-icons/fa';

const PortfolioTabs = ({ activeTab, setActiveTab }) => (
  <div className="portfolio-tabs glass">
    <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
      <FaCode className="tab-icon" /><span>Projects</span>
    </button>
    <button className={activeTab === 'certificates' ? 'active' : ''} onClick={() => setActiveTab('certificates')}>
      <FaCertificate className="tab-icon" /><span>Certificates</span>
    </button>
    <button className={activeTab === 'techstack' ? 'active' : ''} onClick={() => setActiveTab('techstack')}>
      <FaTools className="tab-icon" /><span>Tech Stack</span>
    </button>
  </div>
);

export default PortfolioTabs;


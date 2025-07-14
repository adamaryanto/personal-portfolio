import React, { useEffect, useState } from 'react';
import GradientText from '../../Reactbits/GradientText/GradientText';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // <- new

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId); // <- set section saat diklik
    }
  };

useEffect(() => {
  const sections = ['home', 'about', 'portfolio', 'contact'];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5, // Saat 50% elemen terlihat
    }
  );

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.unobserve(section);
    });
  };
}, []);


  return (
    <nav className='navbar'>
        <GradientText
          colors={["#ff0080", "#7928ca", "#2afadf", "#ff0080"]}
          animationSpeed={5}
          className="text-3xl md:text-4xl"
          
        >
          Adam Aryanto
        </GradientText>

      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-item ${isOpen ? 'open' : ''}`}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a
          href="#portfolio"
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'portfolio')}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

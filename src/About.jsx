import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import heroImage from '../src/assets/WhatsApp Image 2025-05-17 at 20.17.27_29bf25e6.jpg';
import ChatBot from './components/ChatBot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

function About() {
    const [techStack, setTeckStack] = useState(true);
    const [tools, setTools] = useState(false);

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

    const techClick = () => {
        setTeckStack(true);
        setTools(false);
    };

    const toolsClick = () => {
        setTools(true);
        setTeckStack(false);
    };

    return (
        <div className='wrapperAbout'>
            
            <Navbar />
            <section className='sectionAbout'>
                <motion.div 
                    className='aboutContent'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='aboutTitle'>About me</h1>
                    <div className='aboutBody'>
                        <motion.div 
                            className='aboutImage'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={heroImage} alt="About" className='aboutImg' />
                        </motion.div>
                        <motion.div 
                            className='about-me'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci commodi similique animi ratione eaque, veniam reprehenderit eos sapiente in obcaecati, tempore expedita odio quaerat excepturi?
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <div className='wrapperSkill'>
                <h2>Skill</h2>
                <div className='containerSkill'>
                    <div className='skillTabs'>
                        <p className='tabItem' onClick={techClick}>Tech Stack</p>
                        <p className='tabItem' onClick={toolsClick}>Tools</p>
                    </div>
                    <div className='tblSkill'>
                        <AnimatePresence mode='wait'>
                            {techStack && (
                                <motion.div
                                    key="techStack"
                                    className="skillsGrid"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {dataSkil.map((item, index) => (
                                        <motion.div
                                            className="skillBox"
                                            key={index}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <img src={item.icon} alt={item.name} className="skillIcon" />
                                            <p>{item.name}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {tools && (
                                <motion.div
                                    key="tools"
                                    className="skillsGrid"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {dataTools.map((item, index) => (
                                        <motion.div
                                            className="skillBox"
                                            key={index}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <img src={item.icon} alt={item.name} className="skillIcon" />
                                            <p>{item.name}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <ChatBot/>
        </div>
    );
}

export default About;

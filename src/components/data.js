import sertif1 from '../assets/Certificate/Belajar Dasar Pemrograman Web.png';
import sertif2 from '../assets/Certificate/Belajar Dasar Pemrograman Javascript .png';
import sertif3 from '../assets/Certificate/Belajar Membuat Front-End Web Untuk Pemula.png';
import sertif4 from '../assets/Certificate/Responsive Web Design.png';

import porto1 from '../assets/Portofolio/BurgerKill.png';
import porto2 from '../assets/Portofolio/Cek Khodam Online.png';
import porto3 from '..//assets/Portofolio/Gunting Batu Kertas.png';

export const portfolioData = {
  projects: [
    {
      title: 'Landing Page Restaurant Burger',
      description: 'Landing Page modern untuk restoran burger.',
      image: porto1,
      demoLink: 'https://adamaryanto.github.io/restaurant-landing-page/',
      linkGithub: 'https://github.com/adamaryanto/restaurant-landing-page',
      detailLink: '#',
    },
    {
      title: 'Gunting Batu Kertas Game',
      description: 'Game interaktif berbasis React dengan statistik pemain.',
      image: porto3,
      demoLink: 'https://adamaryanto.github.io/gunting-batu-kertas-react-app/',
      linkGithub: 'https://github.com/adamaryanto/gunting-batu-kertas-react-app',
    },
    {
      title: 'Cek Khodam',
      description: 'Aplikasi hiburan untuk mengecek khodam dengan nama.',
      image: porto2,
      demoLink: 'https://adamaryanto.github.io/cek-khodam-online/',
      linkGithub: 'https://github.com/adamaryanto/cek-khodam-online',
    },
  ],
  certificates: [
    {
      image: sertif1,
      title: 'Belajar Dasar Pemrograman Web',
      url: 'https://www.dicoding.com/certificates/EYX4J26G5ZDL',
    },
    {
      image: sertif2,
      title: 'Belajar Dasar Pemrograman Javascript',
      url: 'https://www.dicoding.com/certificates/1RXYEOQG3ZVM',
    },
    {
      image: sertif3,
      title: 'Belajar Membuat Front-End Web Untuk Pemula',
      url: 'https://www.dicoding.com/certificates/98XWEK1DWXM3',
    },
    {
      image: sertif4,
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

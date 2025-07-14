import React from 'react';
import HiroSection from './components/HiroSection';
import About from './components/About';
import ContactSection from './components/ContactSection';

function Dashboard() {
  return (
    <>
      {/* Hero Section (berisi profil, CV, social media, gambar) */}
      <HiroSection />

      {/* Jika HiroSection belum menyatukan semuanya, bisa pakai ini: */}
      {/* <About /> */}
      {/* <PortfolioSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}

export default Dashboard;

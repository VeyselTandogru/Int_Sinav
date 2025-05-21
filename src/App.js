import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// Komponentler
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Veysel Tandoğru</title>
        <meta name="description" content="Veysel Tandoğru - Siber Güvenlik Uzmanı Kişisel Portfolyo Sitesi" />
        <meta name="keywords" content="Veysel Tandoğru, siber güvenlik, portfolyo, web geliştirme, React" />
      </Helmet>
      <MatrixRain />
      <Navbar />
      <div className="content">
        <HomeSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="experience" />
        <PortfolioSection id="portfolio" />
        <ContactSection id="contact" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

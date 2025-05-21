import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/HomeSection.css';

const HomeSection = ({ id }) => {
  return (
    <section id={id} className="home">
      <Helmet>
        <title>Veysel Tandoğru </title>
      </Helmet>
      <div className="section-container home-container">
        <div className="hero-content">
          <h1>Merhaba, Ben <span className="highlight">Veysel Tandoğru</span></h1>
          <h2>Siber Güvenlik Uzmanı</h2>
          <p className="intro-text">
            Siber güvenlik alanında çalışıyor, sızma testleri ve güvenlik değerlendirmeleri yapıyorum. Balıkesir Teknopark'ta siber güvenlik takım kaptanı olarak görev alıyorum ve ekibimle birlikte Hackmasters yarışmasına hazırlanıyorum.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="button primary-button">
              Projelerimi Keşfet
            </a>
            <a href="#contact" className="button secondary-button">
              Benimle İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection; 
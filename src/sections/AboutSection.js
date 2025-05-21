import React from 'react';
import './styles/AboutSection.css';

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="about">
      <div className="section-container">
        <h2 className="section-title">Ben Kimim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
             Ben Veysel Tandoğru, 22 yaşında, Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Üniversitede C#, Java, HTML, CSS ve JavaScript gibi programlama dillerinde eğitim aldım ve Bilgisayar Ağları üzerine dersler gördüm. Akademik çalışmalarımın yanı sıra siber güvenlik, temel network ve görüntü işleme alanlarında kendimi geliştirdim.Balıkesir Teknopark'ta siber güvenlik takım kaptanı olarak görev alıyorum ve ekibimle birlikte Hackmasters yarışmasına hazırlanıyorum. Oyun teorileri üzerine düşünmeyi seviyorum.
            </p>
          </div>
          <div className="about-info">
            <h3>Kişisel Bilgiler</h3>
            <ul className="info-list">
              <li><strong>Ad Soyad:</strong> Veysel Tandoğru</li>
              <li><strong>Yaş:</strong> 22</li>
              <li><strong>Deneyim:</strong> 4 ay</li>
              <li><strong>Konum:</strong> Ankara, Türkiye</li>
              <li><strong>E-posta:</strong> veystandogru@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
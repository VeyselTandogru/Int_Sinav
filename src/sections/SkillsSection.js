import React from 'react';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import './styles/SkillsSection.css';

const SkillsSection = ({ id }) => {
  const experiences = [
    {
      id: 1,
      title: "Sistem Uzmanı",
      company: "Türkiye Yazılım",
      period: "02/2025 - 05/2025",
      icon: <FaBriefcase />,
      description: "Sistem yönetimi ve kurulum işlemleri konusunda uzmanlık.",
      skills: ["Ubuntu sunucu kurulumu", "Pfsense ile hotspot kurulumu", "Sistem yönetim"]
    },
    {
      id: 2,
      title: "Siber Güvenlik Takım Kaptanı",
      company: "Balıkesir Teknopark",
      period: "10/2024 - Şu An",
      icon: <FaUsers />,
      description: "Siber güvenlik ekibinin koordinasyonu ve sızma testlerinin gerçekleştirilmesi.",
      skills: ["Ekip yönetim ve koordinasyonu", "Linux", "Sızma Testi"]
    }
  ];

  return (
    <section id={id} className="skills">
      <div className="section-container">
        <h2 className="section-title">Deneyimlerim</h2>
        <p className="skills-intro">
          Profesyonel çalışma hayatımda edindiğim deneyimler aşağıda listelenmiştir. Sistem yönetimi ve siber güvenlik alanlarında uzmanlaşmaktayım.
        </p>
        
        <div className="skills-grid">
          {experiences.map((experience) => (
            <div className="skill-card experience-card" key={experience.id}>
              <div className="skill-icon">{experience.icon}</div>
              <h3>{experience.title}</h3>
              <div className="company-info">
                <span className="company-name">{experience.company}</span>
                <span className="period">{experience.period}</span>
              </div>
              <p>{experience.description}</p>
              <div className="tech-list">
                {experience.skills.map((skill, index) => (
                  <span className="tech-item" key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 
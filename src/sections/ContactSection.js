import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/ContactSection.css';

const ContactSection = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Lütfen tüm alanları doldurun.'
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Lütfen geçerli bir e-posta adresi girin.'
      });
      return;
    }
    
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id={id} className="contact">
      <div className="section-container">
        <h2 className="section-title">İletişim</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>İletişim Bilgilerim</h3>
            <p>Projeleriniz veya iş teklifleriniz hakkında konuşmak için benimle iletişime geçebilirsiniz.</p>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>E-posta</h4>
                <p>veystandogru@gmail.com</p>
              </div>
            </div>
            
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Konum</h4>
                <p>Ankara, Türkiye</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Bana Mesaj Gönderin</h3>
            
            {formStatus.submitted ? (
              <div className="form-success">
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="form-error">
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı yazın"
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
import React, { useEffect, useRef } from 'react';
import './MatrixRain.css';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Canvas boyutunu tüm ekrana ayarla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Pencere boyutu değişince canvas'ı yeniden boyutlandır
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Matrix karakterleri
    const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Karakterleri bir diziye dönüştür
    const charArray = characters.split('');
    
    // Sütun sayısı
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Her sütunun y pozisyonu
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Matrix yağmuru çizimi
    const draw = () => {
      // Yarı transparan bir siyah arkaplana sahip olacak şekilde silelim
      // Bu eski karakterlerin yavaşça kaybolmasını sağlar
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Karakter rengi
      ctx.fillStyle = '#0F0'; // Yeşil
      ctx.font = fontSize + 'px monospace';
      
      // Her sütun için bir karakter çiz
      for (let i = 0; i < drops.length; i++) {
        // Rastgele bir karakter seç
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Karakteri çiz
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Eğer karakterin y pozisyonu ekranın sonuna ulaştıysa
        // veya rastgele olarak %99 şans varsa, tekrar başa dön
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        
        // Sonraki frame'de karakterin y pozisyonunu artır
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas"></canvas>;
};

export default MatrixRain; 
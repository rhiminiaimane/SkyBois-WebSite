import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sky Bois</h1>
        <p className="hero-subtitle">
          Construisez vos projets avec du bois de qualité
        </p>
        <p className="hero-description">
          Découvrez notre sélection de bois premium, vis, colles et plus pour tous vos travaux
        </p>
        <button className="hero-button">CATALOGUE</button>
      </div>
    </section>
  );
};

export default HeroSection;
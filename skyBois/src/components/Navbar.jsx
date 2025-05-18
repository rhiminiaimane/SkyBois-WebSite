import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Sky Bois Logo" className="logo-image" />
        <span>SKY BOIS</span>
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to = ''><a onClick={() => scrollToSection('.hero')}>HOME</a></Link>
        <Link to = '/catalogue'><a onClick={() => scrollToSection('#')}>CATALOGUE</a></Link>
        <a onClick={() => scrollToSection('.contact-section')}>CONTACT</a>
      </div>

      <div 
        className={`navbar-hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
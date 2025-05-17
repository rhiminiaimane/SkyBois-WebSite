import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../css/ContactSection.css';

const ContactSection = () => {
  const locations = [
    {
      id: 1,
      name: "Larache",
      address: "Lot CDG N-114, 92000, LARACHE",
      phone: "+33123456789",
      email: "paris@skybois.com",
      hours: ["Lun-Ven: 9h-19h", "Sam: 10h-18h"],
      mapUrl: "https://maps.app.goo.gl/RQYEUYbSYgHT57Qp7"
    },
    {
      id: 2,
      name: "Souk EL Arbaa",
      address: "456 Avenue des Pins, 69002 Lyon",
      phone: "+33456789012",
      email: "lyon@skybois.com",
      hours: ["Lun-Ven: 8h30-18h30", "Sam: 9h30-17h"],
      mapUrl: "https://goo.gl/maps/example"
    }
  ];

  const whatsappNumber = "+212639607843";
  const whatsappMessage = "Bonjour Sky Bois, je vous contacte depuis votre site web...";

  return (
    <section className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Nos Magasins</h2>
        <p className="section-subtitle">Venez nous rencontrer ou contactez-nous directement</p>
      </div>

      <div className="contact-content">
        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-header">
                <h3>{location.name}</h3>
                <div className="location-badge">Boutique</div>
              </div>
              
              <div className="contact-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    {location.address}
                  </a>
                </div>
                
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <a href={`tel:${location.phone}`}>{location.phone.replace('+33', '0')}</a>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <a href={`mailto:${location.email}`}>{location.email}</a>
                </div>
                
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div className="hours">
                    {location.hours.map((time, i) => (
                      <span key={i}>{time}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <a 
                  href={`https://wa.me/${location.phone}?text=${encodeURIComponent(whatsappMessage)}`}
                  className="whatsapp-btn"
                >
                  <FaWhatsapp /> Envoyer un message
                </a>
                <a href={location.mapUrl} className="map-btn">
                  Voir sur la carte
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="whatsapp-cta">
          <div className="whatsapp-card">
            <div className="whatsapp-icon-container">
              <FaWhatsapp className="whatsapp-icon" />
            </div>
            <h3>Contact Rapide</h3>
            <p>Message direct sur WhatsApp</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              className="primary-whatsapp-btn"
            >
              <FaWhatsapp /> Nous écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
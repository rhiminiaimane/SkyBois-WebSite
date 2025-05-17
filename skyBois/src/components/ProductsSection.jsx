import React from 'react';
import '../css/ProductsSection.css';

const ProductsSection = () => {
  // Données des produits (à remplacer par vos propres produits)
  const products = [
    {
      id: 1,
      name: "Planche de Chêne",
      price: "€24.99",
      category: "Bois massif",
      image: "src/assets/planche_chene.jpg",
      promo: "-10%"
    },
    {
      id: 2,
      name: "Lot de Vis Bois",
      price: "€12.50",
      category: "Quincaillerie",
      image: "src/assets/vis.jpg"
    },
    {
      id: 3,
      name: "Colle Professionnelle",
      price: "€8.90",
      category: "Adhésifs",
      image: "src/assets/colle.png",
      promo: "Bestseller"
    },
    {
      id: 4,
      name: "Panneau de Pin",
      price: "€18.75",
      category: "Bois massif",
      image: "src/assets/pin.jpg"
    }
  ];

  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Nos Produits en Vedette</h2>
        <p>Découvrez notre sélection de matériaux de qualité</p>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.promo && <span className="product-badge">{product.promo}</span>}
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                onError={(e) => {
                  e.target.src = '/chemin/image-par-defaut.jpg'; // Fallback image
                }}
              />
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              {/*
                <button className="product-button">
                Voir le produit
              </button>
              */}
            </div>
          </div>
        ))}
      </div>

      <div className="section-footer">
        <button className="view-all-button">
          Voir tout le catalogue →
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
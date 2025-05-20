import { Link } from "react-router-dom";
import ProductCard from './ProductCard';


const ProductsSection = () => {
  // Données des produits (à remplacer par vos propres produits)
  const products = [
    {
      id: 1,
      name: "Planche de Chêne",
      price: "€24.99",
      category: "Bois massif",
      image: "assets/planche_chene.jpg",
      promo: "-10%"
    },
    {
      id: 2,
      name: "Lot de Vis Bois",
      price: "€12.50",
      category: "Quincaillerie",
      image: "assets/vis.jpg"
    },
    {
      id: 3,
      name: "Colle Professionnelle",
      price: "€8.90",
      category: "Adhésifs",
      image: "assets/colle.png",
      promo: "Bestseller"
    },
    {
      id: 4,
      name: "Panneau de Pin",
      price: "€18.75",
      category: "Bois massif",
      image: "assets/pin.jpg"
    },
    {
      id: 5,
      name: "Scie Circulaire",
      price: "€99.99",
      category: "Outils",
      image: "assets/scie.jpeg"
    },
    {
      id: 6,
      name: "Ponceuse Électrique",
      price: "€59.99",
      category: "Outils",
      image: "assets/ponceuse_electrique.png"
    },
    {
      id: 7,
      name: "Teinture Bois Naturelle",
      price: "€15.00",
      category: "Finitions",
      image: "assets/teinture_bois_naturelle.jpeg"
    },
    {
      id: 8,
      name: "Équerre de Menuisier",
      price: "€5.50",
      category: "Outils de mesure",
      image: "assets/equerre_menuisier.jpg"
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
          <ProductCard key={product.id} product={product} />
        )
        )}
      </div>

      <div className="section-footer">
        <Link to = '/catalogue'>
          <button className="view-all-button">
            Voir tout le catalogue →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
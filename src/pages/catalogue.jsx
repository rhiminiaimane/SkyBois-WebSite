import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Catalogue.css";

function Catalogue() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const HandleSearch = (e) => {
    e.preventDefault();
  }
    
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
    },
  {
    id: 9,
    name: "Planche de Noyer",
    price: "€29.99",
    category: "Bois massif",
    image: "assets/planche_noyer.jpg",
    promo: "-15%"
  },
  {
    id: 10,
    name: "Clous Acier 50mm",
    price: "€6.99",
    category: "Quincaillerie",
    image: "assets/clous_acier.jpg"
  },
  {
    id: 11,
    name: "Vernis Bois Brillant",
    price: "€17.50",
    category: "Finitions",
    image: "assets/vernis_bois.jpg",
    promo: "Nouveau"
  },
  {
    id: 12,
    name: "Perceuse Sans Fil",
    price: "€89.90",
    category: "Outils",
    image: "assets/perceuse_sans_fil.jpg"
  },
  {
    id: 13,
    name: "Ruban Adhésif Double Face",
    price: "€4.99",
    category: "Adhésifs",
    image: "assets/ruban_double_face.jpg"
  },
  {
    id: 14,
    name: "Panneau MDF 10mm",
    price: "€14.25",
    category: "Bois manufacturé",
    image: "assets/panneau_mdf.jpg"
  },
  {
    id: 15,
    name: "Niveau à Bulle 60cm",
    price: "€12.99",
    category: "Outils de mesure",
    image: "assets/niveau_bulle.jpg",
    promo: "Bestseller"
  },
  {
    id: 16,
    name: "Lasure Bois Extérieure",
    price: "€22.00",
    category: "Finitions",
    image: "assets/lasure_bois.jpg"
  },
  {
    id: 17,
    name: "Marteau de Charpentier",
    price: "€19.99",
    category: "Outils",
    image: "assets/marteau_charpentier.jpg"
  },
  {
    id: 18,
    name: "Chevilles Universelles",
    price: "€7.90",
    category: "Quincaillerie",
    image: "assets/chevilles_universelles.jpg"
  },
  {
    id: 19,
    name: "Mètre Ruban 5m",
    price: "€8.50",
    category: "Outils de mesure",
    image: "assets/metre_ruban.jpg"
  },
  {
    id: 20,
    name: "Plinthe en Chêne",
    price: "€13.75",
    category: "Bois massif",
    image: "assets/plinthe_chene.jpg",
    promo: "-20%"
  }
]

  // Get unique categories
  const categories = ["all", ...new Set(products.map(product => product.category))];

  // Update filtered products logic to include category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue">
      <form onSubmit={HandleSearch} className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "Toutes les catégories" : category}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
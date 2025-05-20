import '../css/ProductsSection.css';

function ProductCard({ product }) {
    return(
        <>
            <div key={product.id} className="product-card">
                {product.promo && <span className="product-badge">{product.promo}</span>}
                <div className="product-image-container">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image"
                        onError={(e) => {
                        e.target.src = 'src/assets/image-par-defaut.png'; // Fallback image
                        }}
                    />
                </div>
                <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
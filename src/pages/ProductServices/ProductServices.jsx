import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import productServicesData from './ProductServices.json';

function ProductServices() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("deposit");
    
    const { categories, products } = productServicesData;
    const filteredProducts = products.filter(product => product.category === activeCategory);

    // Import all images using Vite's import.meta.glob
    const images = import.meta.glob('/src/Assets/*.{jpg,jpeg,png}', { eager: true });

    return (
        <div className="product-services">
            <Navbar />
            
            <div className="product-services__container">
                <h1 className="product-services__main-title">Products & Services</h1>
                
                <div className="product-services__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-button ${activeCategory === category.id ? 'category-button--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}    
                        </button>
                    ))}
                </div>

                <div className="product-services__grid">
                    {filteredProducts.map((product) => {
                        const resolvedImage = images[`/src/Assets${product.image.replace('/src/Assets', '')}`];

                        return (
                            <div 
                                key={product.id} 
                                className="product-card"
                                onClick={() => navigate(product.route)}
                            >
                                <div className="product-card__image-container">
                                    {resolvedImage?.default ? (
                                        <img 
                                            src={resolvedImage.default}
                                            alt={product.title}
                                            className="product-card__image"
                                        />
                                    ) : (
                                        <p>Image not found</p>
                                    )}
                                </div>
                                <div className="product-card__content">
                                    <h3 className="product-card__title">{product.title}</h3>
                                    <p className="product-card__description">{product.description}</p>
                                    <button className="product-card__button">Learn More →</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductServices;
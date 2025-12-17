import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DepositProductsPage.css";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import depositData from './DepositProductPage.json';

function DepositProductsPage() {
    const navigate = useNavigate();
    const [activeCategory] = useState("Deposit");

    const filteredProducts = depositData.depositProducts.filter(
        product => product.category === activeCategory
    );

    const handleProductClick = (route) => {
        navigate(route);
    };

    return (
        <div className="deposit-page">
            <Navbar />
            <div className="deposit-header">
                <h1>Deposit Products</h1>
                <p>Secure your future with our comprehensive range of deposit solutions</p>
            </div>

            <div className="deposit-grid">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product.route)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleProductClick(product.route);
                            }
                        }}
                    >
                        <div className="product-icon">{product.icon}</div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="features-list">
                            <h3>Key Features</h3>
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button
                                className="learn-more-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProductClick(product.route);
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default DepositProductsPage;

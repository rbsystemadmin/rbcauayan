import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./LoanProductsPage.css";
import loanData from './LoanProductsPage.json';

function LoanProductsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Agricultural");
    
    const { categories, loanProducts } = loanData;
    const filteredProducts = loanProducts.filter(product => product.category === activeCategory);

    return (
        <div className="LP">
            <Navbar />

            <div className="LP__container">
                <div className="LP-header">
                    <h1 className="LP__main-title">Loan Products</h1>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="LP__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`LP__category-button ${activeCategory === category.id ? 'LP__category-button--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="LP__grid">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="LP__card"
                            onClick={() => navigate(product.route)}
                        >
                            <div className="LP__card-image-container">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="LP__card-image"
                                />
                            </div>
                            <div className="LP__card-content">
                                <h3 className="LP__card-title">{product.title}</h3>
                                <p className="LP__card-description">{product.description}</p>
                                <button className="LP__card-button">Learn More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoanProductsPage;

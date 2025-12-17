import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./AgriculturalLoans.css";
import agriculturalLoansData from './AgriculturalLoans.json';

function AgriculturalLoans () {
    const navigate = useNavigate();
    const [activeCategory] = useState("Agricultural");  
    
    const { categories, loanProducts } = agriculturalLoansData;
    const filteredProducts = loanProducts.filter(product => product.category === activeCategory);

    const handleLoanCardClick = (route) => {
        navigate(route);
    };

    const handleCategoryClick = (category) => {
        switch(category) {
            case "Agricultural":
                navigate("/loan/AgriculturalLoans");
                break;
            case "Commercial":
                navigate("/loan/CommercialLoans");
                break;
            case "Personal":
                navigate("/loan/PersonalLoans");
                break;
            default:
                break;
        }
    };

    return (
        <div className="AL-personal-loans">
            <Navbar />
            
            <div className="AL-container">
                <div className="AL-header">
                    <h1 className="AL-title">Agricultural Loans</h1>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="AL__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`AL__category-button ${activeCategory === category.id ? 'AL__category-button--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="AL-loan-types">
                    {filteredProducts.map(loan => (
                        <div 
                            key={loan.id} 
                            className="AL-loan-card"
                            onClick={() => handleLoanCardClick(loan.route)}
                        >
                            <div className="AL-loan-icon">{loan.icon}</div>
                            <h3>{loan.title}</h3>
                            <p>{loan.description}</p>
                            <button 
                                className="AL-learn-more"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLoanCardClick(loan.route);
                                }}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AgriculturalLoans;

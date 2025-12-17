import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./PersonalLoans.css";
import personalLoansData from './PersonalLoans.json';

function PersonalLoans () {
    const navigate = useNavigate();
    const [activeCategory] = useState("Personal");
    
    const { categories, loanProducts } = personalLoansData;
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
        <div className="PL-personal-loans">
            <Navbar />
            
            <div className="PL-container">
                <div className="PL-header">
                    <h1 className="PL-title">Personal Loans</h1>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="PL__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`PL__category-button ${activeCategory === category.id ? 'PL__category-button--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="PL-loan-types">
                    {filteredProducts.map(loan => (
                        <div 
                            key={loan.id} 
                            className="PL-loan-card"
                            onClick={() => handleLoanCardClick(loan.route)}
                        >
                            <div className="PL-loan-icon">{loan.icon}</div>
                            <h3>{loan.title}</h3>
                            <p>{loan.description}</p>
                            <button 
                                className="PL-learn-more"
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

export default PersonalLoans;

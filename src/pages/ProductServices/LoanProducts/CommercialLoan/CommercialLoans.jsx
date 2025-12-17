import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./CommercialLoans.css";
import commercialLoansData from './CommercialLoans.json';

function CommercialLoans() {
    const navigate = useNavigate();
    const [activeCategory] = useState("Commercial");

    const { categories, loanProducts } = commercialLoansData;
    const filteredProducts = loanProducts.filter(product => product.category === activeCategory);

    const handleLoanCardClick = (route) => {
        navigate(route);
    };

    const handleCategoryClick = (category) => {
        switch (category) {
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
        <div className="CL-personal-loans">
            <Navbar />

            <div className="CL-container">
                <div className="CL-header">
                    <h1 className="CL-title">Commercial Loans</h1>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="CL__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`CL__category-button ${activeCategory === category.id ? 'CL__category-button--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="CL-loan-types">
                    {filteredProducts.map(loan => (
                        <div
                            key={loan.id}
                            className="CL-loan-card"
                            onClick={() => handleLoanCardClick(loan.route)}
                        >
                            <div className="CL-loan-icon">{loan.icon}</div>
                            <h3>{loan.title}</h3>
                            <p>{loan.description}</p>
                            <button
                                className="CL-learn-more"
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

export default CommercialLoans;

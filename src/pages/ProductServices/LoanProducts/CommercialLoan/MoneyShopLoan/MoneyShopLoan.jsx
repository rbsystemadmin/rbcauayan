import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './MoneyShopLoan.css';

function MoneyShopLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.MSL-requirements-list');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="Money-Shop-Loan">
            <Navbar />

            <div className="MSL-container">

                <div className="MSL-header-container">
                    <div className="MSL-header">
                        <h1 className="MSL-title">Money Shop Loan</h1>
                        <p className="MSL-subtitle">Context to be inputed</p>
                        <button className="MSL-header-button"
                            onClick={scrolltodescription}
                        >Learn More</button>
                    </div>
                </div>


                <div className="MSL-description-container">
                    <div className="MSL-description-content">
                        <div className="MSL-description">
                            <h2>What is Money Shop Loan</h2>
                            <p>
                                These are loans granted to individuals for their micro-enterprises or small businesses,
                                other than that defined under the Republic Act 8425. These loans are grant based on the
                                borrowers’ business and cash flow and are typically but not necessarily unsecured.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="MSL-requirements">
                    <h2>Loan Requirements</h2>
                    <div className="MSL-requirements-container">
                        <ul className="MSL-requirements-list">
                            <li>Land Title(TCT, OCT, EP, CLOA & Tax eclaration)</li>
                            <li>Updated Tax Declaration of Lot & Updated Tax Receipt of Lot and Tax Clearance</li>
                            <li>Latest (2)Copies of 2x2 Picture</li>
                            <li>Valid ID, preferably TIN</li>
                            <li>Proof of sources of income</li>
                        </ul>
                    </div>
                </div>

                <div className="MSL-appply-container">
                    <div className="MSL-apply-section">
                        <h3>Want to Apply?</h3>
                        <p>Process youre request here</p>
                        <button
                            className="MSL-apply-button"
                            onClick={handletonavigate}
                        >Apply Now </button>
                    </div>
                </div>
                <button className="MSL-scroll-top"
                    onClick={scrolltotop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default MoneyShopLoan;
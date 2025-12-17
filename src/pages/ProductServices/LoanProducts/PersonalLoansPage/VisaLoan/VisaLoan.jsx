import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './VisaLoan.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function VisaLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.Vl-description');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div className="Visa-Loan">
            <Navbar />

            <div className="VL-container">
                <div className="VL-header">
                    <h1 className="VL-title">Visa Loan</h1>
                    <p className="VL-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="VL-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="VL-type-card">
                <div className="VL-offer-card">
                    <span className="VL-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="VL-card-accent"></div>
                </div>
                <div className="VL-offer-card">
                    <span className="VL-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="VL-card-accent"></div>
                </div>
                <div className="VL-offer-card">
                    <span className="VL-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="VL-card-accent"></div>
                </div>
            </div>

            <div className="VL-description">
                <div className="VL-description-content">
                    <h2>What is Visa Loan?</h2>
                    <p>
                        This loan facility will be used as an arm of the bank to cater clients
                        who need a bank account as a part of requirement in securing VISA.
                        To provide credit assistance to clients who need funds for VISA purpose
                        and to expand credit outreach of the Bank.
                    </p>
                </div>
            </div>

            <div className="VL-requirements-container">
                <div className="VL-requirements-item">
                    <div className="VL-requirements-list">
                        <h4>Requirements</h4>
                        <ul>
                            <li>18 yrs and above age</li>
                            <li>Worked in the Bank for 10+yrs</li>
                            <li>Valid government-issued ID</li>
                            <li>Latest proof of income</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="VL-apply-container">
                <div className="VL-apply-section">
                    <h3>Ready to Apply?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="VL-apply-button"
                        onClick={handletonavigate}
                    >Apply Now</button>
                </div>
                <button
                    className="VL-scroVL-top"
                    onClick={scrolltoTop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default VisaLoan;
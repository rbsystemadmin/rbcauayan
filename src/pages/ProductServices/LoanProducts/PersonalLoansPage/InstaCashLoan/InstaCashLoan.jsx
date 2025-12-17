import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './InstaCashLoan.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function InstacashLoan() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const details = document.querySelector('.ICL-description');
        if (details) {
            details.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="Insta-Cash-Loan">
            <Navbar />

            <div className="ICL-container">
                <div className="ICL-header">
                    <h1 className="ICL-title">Insta Cash Loan</h1>
                    <p className="ICL-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="ICL-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="ICL-type-card">
                <div className="ICL-offer-card">
                    <span className="ICL-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="ICL-card-accent"></div>
                </div>
                <div className="ICL-offer-card">
                    <span className="ICL-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="ICL-card-accent"></div>
                </div>
                <div className="ICL-offer-card">
                    <span className="ICL-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="ICL-card-accent"></div>
                </div>
            </div>

            <div className="ICL-description">
                <div className="ICL-description-content">
                    <h2>Why Choose Insta Cash Loan?</h2>
                    <p>
                        A secured loan designed to address urgent personal financial needs.
                        It can be used for a variety of purposes, including purchasing a house and lot,
                        appliances, furniture, or a vehicle. Additionally, it can help consolidate debts,
                        cover home improvements, or pay hospital and other bills.
                    </p>
                </div>
            </div>

            <div className="ICL-requirements-container">
                <div className="ICL-requirements-item">
                    <div className="ICL-requirements-list">
                        <h4>Simple Requirements</h4>
                        <ul>
                            <li>Filipino Citizen, 21-65 years old</li>
                            <li>Minimum gross monthly income of ₱20,000</li>
                            <li>Valid government-issued ID</li>
                            <li>Latest proof of income</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="ICL-apply-container">
                <div className="ICL-apply-section">
                    <h3>Ready to Apply?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="ICL-apply-button"
                        onClick={handletonavigate}
                    >Apply Now</button>
                </div>
                <button
                    className="ICL-scroll-top"
                    onClick={scrolltoTop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default InstacashLoan;

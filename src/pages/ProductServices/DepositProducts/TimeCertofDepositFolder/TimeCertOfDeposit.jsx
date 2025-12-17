import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import './TimeCertOfDeposit.css';

function TimeCertOfDeposit() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C', { state: { applicationUrl: "https://rbcauayan.com/rbcauayandata/onlineappform/Script/Firstpage.php?ProductchildID=Time%20Certificate%20of%20Deposit" } });
    }

    const scrolltoApply = () => {
        const Apply = document.querySelector('.TCD-cta');
        if (Apply) {
            Apply.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="TCD-container">
            <Navbar />

            <div className="TCD-hero">
                <div className="TCD-hero-content">
                    <h1>Time Certificate of Deposit</h1>
                    <p>Maximize your returns with our fixed-term deposit options</p>
                    <button className='TCD-header-button'
                        onClick={scrolltoApply}
                    >Apply Now</button>
                </div>
            </div>

            <div className="TCD-wrapper">
                <section className="TCD-benefits">
                    <h2>Key Benefits</h2>
                    <div className="TCD-benefits-grid">
                        <div className="TCD-benefit-card">
                            <div className="TCD-benefit-icon">📈</div>
                            <h3>Higher Returns</h3>
                            <p>Better interest rates than regular savings accounts</p>
                        </div>
                        <div className="TCD-benefit-card">
                            <div className="TCD-benefit-icon">🔒</div>
                            <h3>Guaranteed Rates</h3>
                            <p>Fixed interest rates throughout the term</p>
                        </div>
                        <div className="TCD-benefit-card">
                            <div className="TCD-benefit-icon">⏱️</div>
                            <h3>Flexibility</h3>
                            <p>Choose from various maturity date options</p>
                        </div>
                    </div>
                </section>

                <section className='TCD-description-section'>
                    <div className='TCD-description-container'>
                        <h2>What is Time Deposit</h2>
                        <p>
                            Refers to the bank’s deposit product that facilitates the time deposit transactions
                            of a regular client/depositor, either natural or juridical person that can provide bank’s
                            requirements and accept the banks terms and condition that govern this product.
                        </p>
                    </div>
                </section>

                <section className="TCD-features">
                    <div className="TCD-features-container">
                        <div className="TCD-features-content">
                            <h2>Features & Options</h2>
                            <ul className="TCD-features-list">
                                <li>Automatic renewal option</li>
                                <li>Interest paid at maturity</li>
                                <li>Multiple term options</li>
                                <li>Interest can be credited to Savings Account</li>
                            </ul>
                        </div>
                        <div className="TCD-visit-info">
                            <h3>Visit Our Branch</h3>
                            <p>For current rates and personalized service, please visit any of our branches during business hours:</p>
                            <div className="TCD-hours">
                                <div className="TCD-hours-item">
                                    <span>Monday - Friday</span>
                                    <span>8:00 AM - 3:00 PM</span>
                                </div>
                            </div>
                            <p className="TCD-visit-note">Our Manager and New Accounts Clerk will be happy to discuss the best options for your investment needs.</p>
                        </div>
                    </div>
                </section>

                <section className="TCD-requirements">
                    <h2>Opening Requirements</h2>
                    <div className="TCD-requirements-grid">
                        <div className="TCD-requirement-item">
                            <h3>Individual Account</h3>
                            <ul>
                                <li>(1)Copy of Valid Photo-bearing ID</li>
                                <li>(2) copies of  1 x 1 ID picture</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="TCD-cta">
                    <div className="TCD-cta-content">
                        <h2>Ready to Start Earning More?</h2>
                        <p>Visit our nearest branch to learn more about our competitive rates</p>
                        <div className="TCD-cta-buttons">
                            <button className="TCD-button-primary"
                                onClick={handletonavigate}
                            >Apply Now</button>
                        </div>
                    </div>
                </section>
                <button className='TCD-scroll-top'
                    onClick={scrolltoTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default TimeCertOfDeposit;

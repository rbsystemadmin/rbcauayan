import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer';
import "./CheckingAccount.css";

function CheckingAccount() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C', {state: { applicationUrl: "https://rbcauayan.com/rbcauayandata/onlineappform/Script/Firstpage.php?ProductchildID=Regular%20Checking%20Account"}});
    }

    const scrolltoApply = () => {
        const Apply = document.querySelector('.CA-cta');
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
        <div className="CA-container">
            <Navbar />

            <div className="CA-hero">
                <div className="CA-hero-content">
                    <h1>Regular Checking Account</h1>
                    <p>Manage your daily transactions with ease and flexibility</p>
                    <button className='CA-header-button'
                        onClick={scrolltoApply}
                    >Apply Now</button>
                </div>
            </div>

            <div className="CA-wrapper">
                <section className="CA-benefits">
                    <h2>Account Benefits</h2>
                    <div className="CA-benefits-grid">
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">💵</div>
                            <h3>Start Now</h3>
                            <p>Opening Account at ₱5,000 Php</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">💵</div>
                            <h3>Maintaning Balance</h3>
                            <p>Maintaining Balance at ₱5,000 Php</p>
                        </div>
                    </div>
                </section>

                <section className='CA-description-section'>
                    <div className='CA-description-container'>
                        <h2>What is Regular Checking Account</h2>
                        <p>
                            Refers to the bank’s deposit product that facilitates the Checking Account Deposit
                            transactions of a regular client/depositor, either a natural or juridical person that
                            can provide the bank with requirements and agrees in the bank’s policy that governs this product.
                            It is a non-interest bearing deposit in which withdrawals are made through issuance
                            of a check. Passbooks are also issued to the depositor and check booklet is available
                            upon purchase.
                        </p>
                    </div>
                </section>

                <section className="CA-features">
                    <div className="CA-features-container">
                        <div className="CA-features-content">
                            <h2>Key Features</h2>
                            <ul className="CA-features-list">
                                <li>
                                    <span className="CA-check">✓</span>
                                    with Passbook
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Opening Account at ₱5,000 Php
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Maintaining Balance at ₱5,000 Php
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="CA-requirements">
                    <h2>Opening Requirements</h2>
                    <div className="CA-requirements-grid">
                        <div className="CA-requirement-item">
                            <h3>Documents Needed</h3>
                            <ul>
                                <li>(1) valid Photo-Bearing ID</li>
                                <li>(2) Copies of 1x1 ID picture</li>
                            </ul>
                        </div>
                        <div className="CA-requirement-item">
                            <h3>Special Notice</h3>
                            <ul>
                                <li>Non-Activity for a 1 year shall be considered as Dormant</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="CA-cta">
                    <div className="CA-cta-content">
                        <h2>Ready to Open an Account?</h2>
                        <p>Start managing your finances with our checking account today</p>
                        <div className="CA-cta-buttons">
                            <button className="CA-cta-button primary"
                                onClick={handletonavigate}
                            >Apply Now</button>
                        </div>
                    </div>
                </section>
                <button className='CA-scroll-top'
                    onClick={scrolltoTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default CheckingAccount;
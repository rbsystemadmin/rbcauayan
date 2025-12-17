import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer';
import "./InterestBearingCheckingAccount.css";

function InterestBearingCheckingAccount() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C', { state: { applicationUrl: "https://rbcauayan.com/rbcauayandata/onlineappform/Script/Firstpage.php?ProductchildID=Interest%20Bearing%20Checking%20Account" } });
    }

    const scrolltoApply = () => {
        const Apply = document.querySelector('.IBCA-cta');
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
        <div className="IBCA-container">
            <Navbar />

            <div className="IBCA-hero">
                <div className="IBCA-hero-content">
                    <h1>Interest Bearing Checking Account</h1>
                    <p>Manage your daily transactions with ease and flexibility</p>
                    <button className='IBCA-header-button'
                        onClick={scrolltoApply}
                    >Apply Now</button>
                </div>
            </div>

            <div className="IBCA-wrapper">
                <section className="IBCA-benefits">
                    <h2>Account Benefits</h2>
                    <div className="IBCA-benefits-grid">
                        <div className="IBCA-benefit-card">
                            <div className="IBCA-benefit-icon">💰</div>
                            <h3>Interest Rate</h3>
                            <p>Grow your savings faster with a 0.25% Annual Interest Rate. Every peso counts!</p>
                        </div>
                        <div className="IBCA-benefit-card">
                            <div className="IBCA-benefit-icon">💵</div>
                            <h3>Start Now</h3>
                            <p>Opening Account at ₱10,000 Php</p>
                        </div>
                        <div className="IBCA-benefit-card">
                            <div className="IBCA-benefit-icon">💵</div>
                            <h3>Maintaning Balance</h3>
                            <p>Maintaining Balance at ₱10,000 pesos to earn interest</p>
                        </div>
                    </div>
                </section>

                <section className='CA-description-section'>
                    <div className='CA-description-container'>
                        <h2>What is Interest Bearing Checking Account</h2>
                        <p>
                            Refers to the bank’s deposit product that facilitates the Checking Account Deposit
                            transactions of a regular client/depositor, either a natural or juridical person that
                            can provide the bank with requirements and agrees in the bank’s policy that governs this product.
                            It is a Checking Account that earns an interest that is equal to Regular Savings Account.
                            Withdrawals are made through issuance of a check. Passbooks are also issued to the
                            depositor and check booklet is available upon purchase.

                        </p>
                    </div>
                </section>

                <section className="IBCA-features">
                    <div className="IBCA-features-container">
                        <div className="IBCA-features-content">
                            <h2>Key Features</h2>
                            <ul className="IBCA-features-list">
                                <li>
                                    <span className="IBCA-check">✓</span>
                                    with Passbook
                                </li>
                                <li>
                                    <span className="IBCA-check">✓</span>
                                    Opening Account at ₱10,000 Php
                                </li>
                                <li>
                                    <span className="IBCA-check">✓</span>
                                    Maintaining Balance at ₱10,000 pesos to earn interest
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="IBCA-requirements">
                    <h2>Opening Requirements</h2>
                    <div className="IBCA-requirements-grid">
                        <div className="IBCA-requirement-item">
                            <h3>Documents Needed</h3>
                            <ul>
                                <li>(1) Copy Valid Photo-Bearing ID</li>
                                <li>(2) Copies of 1x1 ID Picture</li>
                            </ul>
                        </div>
                        <div className="IBCA-requirement-item">
                            <h3>Special Notice</h3>
                            <ul>
                                <li>Non-Activity foy a 1 year shall be considered as Dormant</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="IBCA-cta">
                    <div className="IBCA-cta-content">
                        <h2>Ready to Open an Account?</h2>
                        <p>Start managing your finances with our interest bearing checking account today</p>
                        <div className="IBCA-cta-buttons">
                            <button className="IBCA-cta-button primary"
                                onClick={handletonavigate}
                            >Apply Now</button>
                        </div>
                    </div>
                </section>
                <button className='IBCA-scroll-top'
                    onClick={scrolltoTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default InterestBearingCheckingAccount;
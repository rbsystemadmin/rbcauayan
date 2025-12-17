import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './AgriMasikapLoan.css';

function AgriMasikapLoan() {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/T&C');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="agri-masikap-loan-container">
            <Navbar />

            <div className="AML-hero-section">
                <div className="AML-hero-content">
                    <div className="AML-hero-text">
                        <h1>Agri-Masikap Loan</h1>
                        <p>Cultivating Growth, Harvesting Prosperity</p>
                    </div>
                </div>
            </div>

            <div className='AML-description-container'>
                <div className="AML-description-section">
                    <div className="AML-description-content">
                        <h2>Why Choose Agri-Masikap Loan?</h2>
                        <p>
                            A secured loan program specifically designed for Agrarian Reform Program
                            beneficiaries to support agricultural activities, including production, processing, marketing, and distribution.
                            it&apos;s the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </div>


            <section className="AML-requirements">
                <h2>Loan Requirements</h2>
                <div className="AML-requirements-container">
                    <ul className="AML-requirements-list">
                        <li>Voters Certification</li>
                        <li>Barangay Certification</li>
                        <li>(2) Copies of 1x1 Picture</li>
                        <li>Completed application form</li>
                    </ul>
                </div>
            </section>

            <div className="AML-cta-section">
                <div className="AML-cta-content">
                    <h2>Ready to Grow Your Agricultural Business?</h2>
                    <p>Apply for an Agri-Masikap Loan and unlock your farming potential</p>
                    <button
                        className="AML-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <button
                className="AML-scroll-top"
                onClick={scrollToTop}
            >
                ↑
            </button>
            <Footer />
        </div>
    );
}

export default AgriMasikapLoan;
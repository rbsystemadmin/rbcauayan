import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './AgriSagsaganLoan.css';

function AgriSagsaganLoan() {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/T&C');
    };

    const scrollToDescription = () => {
        const description = document.querySelector('.ASL-description-section');
        if (description) {
            description.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="Agri-Sagsagan-Loan-container">
            <Navbar />

            <section className="ASL-hero-section">
                <div className="ASL-hero-content">
                    <div className="ASL-hero-text">
                        <h1>Agri-Sagsagan Loan</h1>
                        <p>Empowering Agricultural Growth</p>
                        <button
                            className="ASL-learn-more-btn"
                            onClick={scrollToDescription}
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            <section className="ASL-description-section">
                <div className="ASL-description-container">
                    <div className="ASL-description-content">
                        <h2>Why Choose Agri-Sagsagan Loan?</h2>
                        <p>
                            It’s a secured loan that helps landowners and farmers buy things like work animals, farming tools
                            and machines, seeds, fertilizers, chickens, livestock, animal feed, and similar supplies.
                            it&apos;s the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </section>

            <section className="ASL-requirements">
                <h2>Loan Requirements</h2>
                <div className="ASL-requirements-container">
                    <ul className="ASL-requirements-list">
                        <li>Voters Certification</li>
                        <li>Barangay Certification</li>
                        <li>(2) Copies of 1x1 Picture</li>
                        <li>Completed application form</li>
                    </ul>
                </div>
            </section>

            <section className="ASL-cta-section">
                <div className="ASL-cta-content">
                    <h2>Ready to Grow Your Agricultural Business?</h2>
                    <p>Secure your Agri-Sagsagan Loan today and cultivate success</p>
                    <button
                        className="ASL-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </section>

            <button
                className="ASL-scroll-top"
                onClick={scrollToTop}
            >
                ↑
            </button>
            <Footer />
        </div>
    );
}

export default AgriSagsaganLoan;
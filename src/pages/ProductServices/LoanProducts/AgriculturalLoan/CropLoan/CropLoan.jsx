import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './CropLoan.css';

function CropLoan() {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/T&C');
    };

    const scrollToDescription = () => {
        const description = document.querySelector('.CLL-description-section');
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
        <div className="agri-masikap-loan-container">
            <Navbar />

            <div className="CLL-hero-section">
                <div className="CLL-hero-content">
                    <div className="CLL-hero-text">
                        <h1>Crop Loan</h1>
                        <p>Cultivating Growth, Harvesting Prosperity</p>
                        <button onClick={scrollToDescription} className="CLL-learn-more-btn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


            <div className='CLL-description-container'>
                <div className="CLL-description-section">
                    <div className="CLL-description-content">
                        <h2>Why Choose Crop Loan?</h2>
                        <p>
                            A loan program specifically for small farmers and fisherfolk who work the land or raise livestock
                            and have CLOA, EP, or CLT titles. It is mainly meant to support food production,
                            it&apos;s the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </div>

            <section className="CLL-requirements">
                <h2>Loan Requirements</h2>
                <div className="CLL-requirements-container">
                    <ul className="CLL-requirements-list">
                        <li>Voters Certification</li>
                        <li>Barangay Certification</li>
                        <li>(2) Copies of 1x1 Picture</li>
                        <li>Completed application form</li>
                    </ul>
                </div>
            </section>

            <div className="CLL-cta-section">
                <div className="CLL-cta-content">
                    <h2>Ready to Cultivate Your Success??</h2>
                    <p>Apply for a Crop Loan today and take your farming to the next level!</p>
                    <button
                        className="CLL-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <button
                className="CLL-scroll-top"
                onClick={scrollToTop}
            > ↑ </button>
            <Footer />
        </div>
    );
}

export default CropLoan;
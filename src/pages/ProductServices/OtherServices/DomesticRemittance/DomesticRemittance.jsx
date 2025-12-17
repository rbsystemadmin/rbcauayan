import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import './DomesticRemittance.css';


function DomesticRemittance() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.DR-offer-icon');
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
        <div className="Domestic-Remittance">
            <Navbar />

            <div className="DR-container">
                <div className="DR-header">
                    <h1 className="DR-title">Domestic Remittance</h1>
                    <p className="DR-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="DR-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="DR-type-card">
                <div className="DR-offer-card">
                    <span className="DR-offer-icon">
                    </span>
                    <h3>Bills Payment</h3>
                    <p>Fast. Easy. Paid.</p>
                    <div className="DR-card-accent"></div>
                </div>
                <div className="DR-offer-card">
                    <span className="DR-offer-icon">
                    </span>
                    <h3>Fund Transfer</h3>
                    <p>Your money, your way!</p>
                    <div className="DR-card-accent"></div>
                </div>
            </div>

            <div className="DR-description">
                <h2>Why Choose Domestic Remittance?</h2>
                <div className="DR-description-grid">
                    <div className='DR-description-content'>
                        <h4>Bills Payment</h4>
                        <p>
                            Pay your bills quickly and securely through our platform.
                        </p>
                    </div>
                    <div className='DR-description-content'>
                        <h4>Fund Tranfer </h4>
                        <p>
                            Transfer funds quickly and securely through our platform.
                        </p>
                    </div>
                </div>
            </div>

            <div className="DR-apply-container">
                <div className="DR-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="DR-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="DR-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default DomesticRemittance;

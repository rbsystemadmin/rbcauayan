import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom"; // 
import "./BillsPayments.css";

function BillsPayment() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    };

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.IBD-offer-icon');
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
        <div className="Bills-Payment">
            <Navbar />

            <div className="BP-container">
                <div className="BP-header">
                    <h1 className="BP-title">i 2 i</h1>
                    <p className="BP-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="BP-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="BP-type-card">
                <div className="BP-offer-card">
                    <h3>Gcash Cash-in</h3>
                    <p>Top up your GCash in seconds!</p>
                    <div className="BP-card-accent"></div>
                </div>
                <div className="BP-offer-card">

                    <h3>Bills Payment</h3>
                    <p>Fast. Easy. Paid.</p>
                    <div className="BP-card-accent"></div>
                </div>
                <div className="BP-offer-card">
                    <h3>Fund Transfer</h3>
                    <p>Your money, your way!</p>
                    <div className="BP-card-accent"></div>
                </div>
            </div>

            <div className="BP-description">
                <h2>Why Choose Bills Payment?</h2>
                <div className="BP-description-grid">
                    <div className="BP-description-content">
                        <h4>Gcash Cash-in</h4>
                        <p>
                            Fund youre Gcash wallet in seconds with our platform.
                        </p>
                    </div>
                    <div className="BP-description-content">
                        <h4>Bills Payment</h4>
                        <p>
                            Pay your bills quickly and securely through our platform.
                        </p>
                    </div>
                    <div className="BP-description-content">
                        <h4>Fund Transfer</h4>
                        <p>
                            Transfer funds quickly and securely through our platform.
                        </p>
                    </div>
                </div>
            </div>

            <div className="BP-apply-container">
                <div className="BP-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="BP-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="BP-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default BillsPayment;

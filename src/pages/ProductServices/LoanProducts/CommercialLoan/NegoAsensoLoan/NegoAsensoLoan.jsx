import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './NegoAsensoLoan.css';

function NegoAsensoLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltoDescription = () => {
        const descriptionElement = document.querySelector('.NAL-requirements-list');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="Nego-Asenso-Loan">
            <Navbar />

            <div className="NAL-container">
                <div className="NAL-header-container">
                    <div className="NAL-header">
                        <h1 className="NAL-title">Nego-Asenso Loan</h1>
                        <p className="NAL-subtitle">A secured loan intended to aid financial needs of business</p>
                        <button className="NAL-header-button"
                            onClick={scrolltoDescription}
                        >Learn More</button>
                    </div>
                </div>

                <div className="NAL-description-container">
                    <div className="NAL-description-content">
                        <div className="NAL-description" >
                            <h2>Nego-Asenso Loan</h2>
                            <p>
                                A secured loan designed to meet the financial needs of businesses,
                                offering highly flexible terms. It can be short-term or long-term,
                                based on the customer’s preference and repayment ability.
                                The funds can be used as start-up capital for a new business or to expand an existing one.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NAL-requirements">
                    <h2>Loan Requirements</h2>
                    <div className="NAL-requirements-container">
                        <ul className="NAL-requirements-list">
                            <li>Land Title(TCT, OCT, EP, CLOA & Tax eclaration)</li>
                            <li>Updated Tax Declaration of Lot & Updated Tax Receipt of Lot and Tax Clearance</li>
                            <li>Latest (2)Copies of 2x2 Picture</li>
                            <li>Valid ID, preferably TIN</li>
                            <li>Proof of sources of income</li>
                        </ul>
                    </div>
                </div>

                <div className="NAL-apply-container" >
                    <div className="NAL-apply-section">
                        <h3>Want to Apply?</h3>
                        <p>implement context here for better design and context</p>
                        <button
                            className="NAL-apply-button"
                            onClick={handletonavigate}
                        >Apply Now</button>
                    </div>
                </div>

                <button className="NAL-scroll-top"
                    onClick={scrollToTop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default NegoAsensoLoan;
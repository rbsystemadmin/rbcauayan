import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import './InterBranch.css';


function InterBranchDeposit() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    }
    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="Inter-Branch-Deposit">
            <Navbar />

            <div className="IBD-container">
                <div className="IBD-header">
                    <h1 className="IBD-title">Inter Branch Deposit</h1>
                    <p className="IBD-subtitle">Your quick and reliable financial partner</p>
                </div>
            </div>

            <div className="IBD-description">
                <div className="IBD-description-content">
                    <h2>Why Choose Inter-Branch Deposit?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="IBD-apply-container">
                <div className="IBD-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="IBD-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="IBD-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default InterBranchDeposit;

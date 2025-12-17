import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './KaAsensoLoan.css';

function KaAsensoLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.AML-requirements-list');
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
        <div className="Ka-Asenso-Loan">
            <Navbar />

            <div className="KAL-container">
                <div className='KAL-header-container'>
                    <div className='KAL-header'>
                        <h1 className='KAL-title'>Ka-Asenso Loan</h1>
                        <p className='KAL-subtitle'>NOTICE: Put a subtitle in this content</p>
                        <button className='KAL-header-button'
                            onClick={scrolltodescription}>Learn More</button>
                    </div>
                </div>

                <div className='KAL-description-container'>
                    <div className='KAL-description-content'>
                        <div className='KAL-description'>
                            <h2>What is Ka-Asenso Loan?</h2>
                            <p>kindly input the description for udpates</p>
                        </div>
                    </div>
                </div>

                <div className="AML-requirements">
                    <h2>Loan Requirements</h2>
                    <div className="AML-requirements-container">
                        <ul className="AML-requirements-list">
                            <li>Land Title(TCT, OCT, EP, CLOA & Tax eclaration)</li>
                            <li>Updated Tax Declaration of Lot & Updated Tax Receipt of Lot and Tax Clearance</li>
                            <li>Latest (2)Copies of 2x2 Picture</li>
                            <li>Valid ID, preferably TIN</li>
                            <li>Proof of sources of income</li>
                        </ul>
                    </div>
                </div>

                <div className='KAL-apply-container'>
                    <div className='KAL-apply-section'>
                        <h3>Want to Apply?</h3>
                        <p>implement context here for better design and context</p>
                        <button
                            className='KAL-apply-button'
                            onClick={handletonavigate}
                        >Apply Now</button>
                    </div>
                </div>
                <button className='KAL-scroll-top'
                    onClick={scrolltotop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default KaAsensoLoan;
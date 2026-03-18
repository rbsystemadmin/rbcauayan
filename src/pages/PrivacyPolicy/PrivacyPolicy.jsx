import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import { useEffect } from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dps from '../../Assets/DPA_Logo.png';
import "./PrivacyPolicy.css";

function PrivacyPolicy() {

    // Ensure page starts at the top when navigated to
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="Privacy-Policy">
            <Navbar />

            <div className="PP-container">
                {/* Matches your NU-header-container style */}
                <div className='PP-header-container'>
                    <div className='PP-header-content'>
                        <h1>Privacy Policy</h1>
                        <p>Protecting your personal information is our priority</p>

                    </div>
                </div>

                <div className='PP-content-section'>
                    <div className='PP-main-card'>

                        <p className="PP-last-updated">Last Updated: March 18, 2026</p>
                        <div className="row justify-content-left">
                            <img src={dps} alt="Historical Photo" className="dpstyle" />
                        </div>
                        <div className="PP-article">
                            <section className="PP-section">

                            </section>

                            <section className="PP-section">

                            </section>

                            <section className="PP-section">

                            </section>

                            <section className="PP-section">

                            </section>

                            <section className="PP-section">

                            </section>

                            <section className="PP-section">

                            </section>
                        </div>
                    </div>
                </div>

                {/* Floating scroll to top button - matching your style */}
                <button
                    className='PP-scroll-top'
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            </div>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
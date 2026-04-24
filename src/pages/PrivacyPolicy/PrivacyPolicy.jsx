import { useEffect } from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dps from '../../Assets/corseal2026.png';
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
                            <img src={dps} alt="RBCI Seal" className="dpstyle" />
                        </div>
                        
                        <div className="PP-article">
                            {/* Introduction */}
                            <section className="PP-section">
                                <p className="PP-intro">
                                    <strong>RURAL BANK OF CAUAYAN INC.</strong> respects your right to privacy and is committed to protecting your personal data in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), its Implementing Rules and Regulations, and issuances of the National Privacy Commission (NPC).
                                </p>
                            </section>

                            {/* Collection of Personal Data */}
                            <section className="PP-section">
                                <h2>Collection of Personal Data</h2>
                                <p>
                                    RBCI collects personal and sensitive personal information when you open or maintain an account, apply for loans or other banking products, act as a guarantor or third-party security provider, or otherwise transact with the Bank. These data may include personal details, contact information, identification details, financial and transaction records, and other information required by law or banking regulations.
                                </p>
                            </section>

                            {/* Purpose of Processing */}
                            <section className="PP-section">
                                <h2>Purpose of Processing</h2>
                                <p>Your personal data are processed for legitimate purposes, including but not limited to:</p>
                                <ul>
                                    <li>Account opening, maintenance, and transaction processing</li>
                                    <li>Credit evaluation, loan processing, and collection</li>
                                    <li>Customer identification, verification (KYC), and risk management</li>
                                    <li>Compliance with banking, anti-money laundering, tax, and other regulatory requirements</li>
                                    <li>Fraud prevention, audit, and security monitoring</li>
                                    <li>Customer service and relationship management</li>
                                </ul>
                            </section>

                            {/* Data Sharing */}
                            <section className="PP-section">
                                <h2>Data Sharing</h2>
                                <p>
                                    Personal data may be shared with regulators, government agencies, auditors, service providers, financial institutions, and other parties as required by law or necessary to provide banking services. All data sharing is subject to confidentiality and data protection requirements.
                                </p>
                            </section>

                            {/* Data Retention */}
                            <section className="PP-section">
                                <h2>Data Retention</h2>
                                <p>
                                    Personal data are retained only for as long as necessary to fulfill the stated purposes and to comply with applicable laws and regulations. Data may be retained beyond account closure when required by law or for the resolution of legal, regulatory, or audit matters.
                                </p>
                            </section>

                            {/* Data Protection Measures */}
                            <section className="PP-section">
                                <h2>Data Protection Measures</h2>
                                <p>
                                    RBCI implements reasonable and appropriate organizational, physical, and technical security measures to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure.
                                </p>
                            </section>

                            {/* Rights of the Data Subject */}
                            <section className="PP-section">
                                <h2>Rights of the Data Subject</h2>
                                <p>
                                    In accordance with the Data Privacy Act, you have the right to be informed, access your personal data, request correction, object to processing, and request the blocking or deletion of your personal data, subject to legal limitations.
                                </p>
                                <div className="PP-rights-list">
                                    <ul>
                                        <li>Right to be informed</li>
                                        <li>Right to access</li>
                                        <li>Right to object</li>
                                        <li>Right to erasure/blocking</li>
                                        <li>Right to damages</li>
                                        <li>Right to rectify</li>
                                        <li>Right to data portability</li>
                                        <li>Right to file a complaint</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section className="PP-section">
                                <h2>Contact Information</h2>
                                <p>
                                    For inquiries and concerns regarding RBCI Privacy Notice, you may reach our Data Protection Officer at email address:{' '}
                                    <a href="mailto:complianceofc@rbcauayan.org">complianceofc@rbcauayan.org</a>
                                </p>
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
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import './StudentSavingsDeposit.css';

function StudentSavingDeposit() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C', { state: { applicationUrl: "https://rbcauayan.com/rbcauayandata/onlineappform/Script/Firstpage.php?ProductchildID=Student%20Savings%20Deposit" } });
    }


    const scrolltoApply = () => {
        const Apply = document.querySelector('.SSD-cta');
        if (Apply) {
            Apply.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="SSD-container">
            <Navbar />
            <div className="SSD-hero">
                <div className="SSD-hero-content">
                    <h1>Student Saving Deposit</h1>
                    <p>Start your savings journey early with our student-friendly account</p>
                    <button className='SSD-header-button'
                        onClick={scrolltoApply}
                    >Apply Now</button>
                </div>
            </div>

            <div className="SSD-wrapper">
                <section className="SSD-quick-info">
                    <div className="SSD-info-grid">
                        <div className="SSD-info-card">
                            <span className="SSD-info-value">0.25%</span>
                            <span className="SSD-info-label">Earn more with a 0.25% Annual Interest Rate.</span>
                        </div>
                        <div className="SSD-info-card">
                            <span className="SSD-info-value">₱100</span>
                            <span className="SSD-info-label">Opening Account</span>
                        </div>
                        <div className="SSD-info-card">
                            <span className="SSD-info-value">₱1000</span>
                            <span className="SSD-info-label">Maintaining Balance to earn interest</span>
                        </div>
                    </div>
                </section>

                <section className="SSD-features">
                    <h2>Perfect for Students</h2>
                    <div className="SSD-features-grid">
                        <div className="SSD-feature-card">
                            <div className="SSD-feature-icon">📚</div>
                            <h3>Student-Friendly</h3>
                            <p>Low maintaining balance perfect for students</p>
                        </div>
                        <div className="SSD-feature-card">
                            <div className="SSD-feature-icon">🎯</div>
                            <h3>Goal Setting</h3>
                            <p>Track your savings goals easily</p>
                        </div>
                        <div className="SSD-feature-card">
                            <div className="SSD-feature-icon">🎓</div>
                            <h3>Financial Education</h3>
                            <p>Access to financial literacy resources</p>
                        </div>
                    </div>
                </section>

                <section className="SSD-steps">
                    <h2>How to Open an Account</h2>
                    <div className="SSD-steps-container">
                        <div className="SSD-step">
                            <div className="SSD-step-number">1</div>
                            <h3>Prepare Documents</h3>
                            <p>School ID/Certificate of Enrollment</p>
                        </div>
                        <div className="SSD-step">
                            <div className="SSD-step-number">2</div>
                            <h3>Visit Branch</h3>
                            <p>With parent/guardian</p>
                        </div>
                        <div className="SSD-step">
                            <div className="SSD-step-number">3</div>
                            <h3>Initial Deposit</h3>
                            <p>Minimum of ₱100</p>
                        </div>
                        <div className="SSD-step">
                            <div className="SSD-step-number">4</div>
                            <h3>Start Saving</h3>
                            <p>Begin your savings journey</p>
                        </div>
                    </div>
                </section>

                <section className='SSD-Description'>
                    <div className='SSD-Description-Container'>
                        <h2>What is Students Savings Deposit?</h2>
                        <p>This refers to the bank’s deposit product that facilitates the deposit transaction of a student.</p>
                    </div>

                </section>

                <section className="SSD-requirements">
                    <h2>Requirements</h2>
                    <div className="SSD-requirements-container">
                        <div className="SSD-requirement-card">
                            <ul>
                                <li>(1) Copy of valid photo-bearing School ID Duly signed by the principal or head of the school / Certificate of Enrollment</li>
                                <li>(2) Copies of 1x1 ID Picture</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="SSD-cta">
                    <div className="SSD-cta-content">
                        <h2>Start Your Savings Journey Today!</h2>
                        <p>Open a Student Savings Account and build your financial future</p>
                        <div className="SSD-cta-buttons">
                            <button className="SSD-button-secondary"
                                onClick={handletonavigate}
                            >Apply Now</button>
                        </div>
                    </div>
                </section><button className='SSD-scroll-top'
                    onClick={scrolltoTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default StudentSavingDeposit;

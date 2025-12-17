import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./BasicSavingsAccount.css";

function BasicSavingsAccount() {

  const navigate = useNavigate();

  const handletonavigate = () => {

    navigate('/T&C', { state: { applicationUrl: "https://rbcauayan.com/rbcauayandata/onlineappform/Script/Firstpage.php?ProductchildID=Basic%20Savings%20Account" } });
  }

  const scrolltoApply = () => {
    const Apply = document.querySelector('.BSA-cta');
    if (Apply) {
      Apply.scrollIntoView({ behavior: "smooth" });
    }
  }

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="BSA-container">
      <Navbar />

      <div className="BSA-hero">
        <div className="BSA-hero-content">
          <h1>Basic Deposit Account</h1>
          <p>Start your savings journey with our simple and secure account</p>
          <button className="BSA-header-button"
            onClick={scrolltoApply}
          >Apply Now</button>
        </div>
      </div>

      <div className="BSA-wrapper">
        <section className="BSA-features">
          <h2>Account Features</h2>
          <div className="BSA-features-grid">
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💰</div>
              <h3>Interest Rate</h3>
              <p>Grow your savings faster with a 0.25% Annual Interest Rate. Every peso counts!</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💵</div>
              <h3>Start Saving</h3>
              <p>Opening Account less than ₱100 pesos</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💵</div>
              <h3>Maintaining Balance</h3>
              <p>No maintaining balance</p>
            </div>
          </div>
        </section>

        <section className="BSA-description-section">
          <div className="BSA-description-container">
            <div className="BSA-description-content">
              <h2>What is a Basic Deposit Account?</h2>
              <p>
                This refers to interest or non-interest bearing account designed to promote financial inclusion.
                This account will enable Filipinos, especially the unserved, to receive and make payments,
                as well as have a facility for store of value.  It will have basic functionalities that
                will characterize ease, accessibility, convenience, and reasonable cost for both banks and customers.
              </p>
            </div>
          </div>
        </section>

        <section className="BSA-requirements">
          <h2>Requirements for individuals</h2>
          <div className="BSA-requirements-container">
            <ul className="BSA-requirements-list">
              <li>Voters Certification</li>
              <li>Barangay Certification</li>
              <li>(2) Copies of 1x1 Picture</li>
            </ul>
          </div>
        </section>

        <section className="BSA-cta">
          <div className="BSA-cta-content">
            <h2>Ready to Start Saving?</h2>
            <p>Open your Basic Deposit Account today</p>
            <div className="BSA-cta-buttons">
              <button
                className="BSA-cta-button primary"
                onClick={handletonavigate}
              >Apply Now</button>
            </div>
          </div>
        </section>
        <button
          className="BSA-scroll-top"
          onClick={scrolltoTop}
        >↑</button>
      </div>
      <Footer />
    </div>
  );
}

export default BasicSavingsAccount;
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../Assets/rbci-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-brand">
                        <img src={logo} alt="RB Cauayan Logo" className="footer-logo" />
                        <h3>Rural Bank of Cauayan, Inc</h3>
                    </div>
                    <p>Rural Bank of Cauayan, Inc. 60 Years in service.</p>

                    <p className='footer-p2'>Rural Bank of Cauayan is regulated by the Bangko Sentral ng Pilipinas. <u><a href='https://www.bsp.gov.ph'>https://www.bsp.gov.ph</a></u></p>

                    <p className='footer-p3'>For concerns, please reach us through <Link to="/A&U/ContactUs"><u>Contact Us</u></Link></p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/P&S">Product Services</Link></li>
                        <li><Link to="/A&U/CompanyProfile">About Us</Link></li>
                        <li><Link to="/A&U/Careers">Careers</Link></li>
                        <li><Link to="/A&U/ContactUs">Contact Us</Link></li>
                        <li><Link to="/ROPA">Properties for Sale</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>Email: hrad-a2@rbcauayan.com</li>
                        <li>
                            <a href="https://rbcauayan.com/A&U/ContactUs">Email for Loans: Click here</a>
                        </li>
                        <li>
                            Email for Applicants:{" "}
                            <span
                                style={{ cursor: "pointer", textDecoration: "underline" }}
                                onClick={() => {
                                    navigator.clipboard.writeText("hrad-er-recruitment@rbcauayan.com");
                                    alert("Email copied!");
                                }}
                            >
                                hrad-er-recruitment@rbcauayan.com
                            </span>
                        </li>
                        <li>Phone: (078) 652-1016</li>
                        <li>
                            Address: Don Jose Canciller Ave.
                            Cauayan City Isabela 3305
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com/rbcauayan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/rbcauayan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com/company/rbcauayan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://instagram.com/rbcauayan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Rural Bank of Cauayan, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

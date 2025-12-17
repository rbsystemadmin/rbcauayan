import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/rbci-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProductsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    setIsAboutDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsProductsDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleMobileNestedMenu = (menu) => {
    setMobileNestedMenu(mobileNestedMenu === menu ? null : menu);
  };

  const handleSubMenuEnter = (submenu) => {
    setActiveSubMenu(submenu);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav className="Navbar-navbar">
      <div className="Navbar-container">
        <div className="Navbar-mobile-brand-container">
          <Link to="/">
            <img src={Logo} alt="RBCI Logo" className="Navbar-mobile-logo" />
          </Link>
          <div className="Navbar-mobile-brand-text">
            <Link to="/" className="Navbar-logo">Rural Bank of Cauayan, Inc.</Link>
            <p className="Navbar-mobile-tagline">Your Harvest Starts Here</p>
          </div>
        </div>

        {/* Desktop Logo Container - Only visible on desktop */}
        <div className="Navbar-desktop-logo-container">
          <div className="Navbar-desktop-brand-wrapper">
            <Link to="/">
              <img src={Logo} alt="RBCI Logo" className="Navbar-desktop-logo" />
            </Link>
            <div className="Navbar-desktop-brand-text">
              <Link to="/" className="Navbar-desktop-brand-name">Rural Bank of Cauayan, Inc.</Link>
              <p className="Navbar-desktop-tagline">Your Harvest Starts Here</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="Navbar-desktop-nav">
          <li><Link to="/" className="Navbar-nav-link">Home</Link></li>
          
          {/* Products and Services Dropdown */}
          <li 
            className="Navbar-dropdown-container"
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <Link to="/P&S" className="Navbar-nav-link">
              Products and Services
              <span className="Navbar-dropdown-icon">▼</span>
            </Link>
            {isProductsDropdownOpen && (
              <ul className="Navbar-dropdown-menu">
                <li 
                  className="Navbar-nested-dropdown"
                  onMouseEnter={() => handleSubMenuEnter('deposit')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/P&S/DepositProducts">
                    Deposit Products
                    <span className="Navbar-dropdown-icon">▼</span>
                  </Link>
                  {activeSubMenu === 'deposit' && (
                    <ul className="Navbar-submenu">
                      <li><Link to="/deposit/BasicSavings">Basic Deposit Account</Link></li>
                      <li><Link to="/deposit/RegularSavings">Regular Saving Deposit</Link></li>
                      <li><Link to="/deposit/CheckingAccount">Regular Checking Account</Link></li>
                      <li><Link to="/deposit/InterestBearingCheckingAccount">Interest Bearing Checking Account</Link></li>
                      <li><Link to="/deposit/StudentSavings">Student Savings Deposit</Link></li>
                      <li><Link to="/deposit/TimeCertofDeposit">Time Certificate of Deposit</Link></li>
                    </ul>
                  )}
                </li>
                <li 
                  className="Navbar-nested-dropdown"
                  onMouseEnter={() => handleSubMenuEnter('loan')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/loan/AgriculturalLoans">
                    Loan Products
                    <span className="Navbar-dropdown-icon">▼</span>
                  </Link>
                  {activeSubMenu === 'loan' && (
                    <ul className="Navbar-submenu">
                      <li><Link to="/loan/AgriculturalLoans">Agricultural Loan</Link></li>
                      <li><Link to="/loan/CommercialLoans">Commercial Loan</Link></li>
                      <li><Link to="/loan/PersonalLoans">Personal Loan</Link></li>
                    </ul>
                  )}
                </li>
                <li 
                  className="Navbar-nested-dropdown"
                  onMouseEnter={() => handleSubMenuEnter('services')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/P&S/OtherServices">
                    Other Services
                    <span className="Navbar-dropdown-icon">▼</span>
                  </Link>
                  {activeSubMenu === 'services' && (
                    <ul className="Navbar-submenu">
                      <li><Link to="/other/InterBranch">Inter Branch Deposit</Link></li>
                      <li><Link to="/other/DomesticRemittance">Domestic Remittance</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          
          {/* About Us Dropdown */}
          <li 
            className="Navbar-dropdown-container"
            onMouseEnter={toggleAboutDropdown}
            onMouseLeave={toggleAboutDropdown}
          >
            <Link to="/A&U/CompanyProfile" className="Navbar-nav-link">
              About Us
              <span className="Navbar-dropdown-icon">▼</span>
            </Link>
            {isAboutDropdownOpen && (
              <ul className="Navbar-dropdown-menu">
                <li><Link to="/A&U/CompanyProfile">Company Profile</Link></li>
                <li><Link to="/A&U/Careers">Careers</Link></li>
                <li><Link to="/A&U/ContactUs">Contact Us</Link></li>
                <li><Link to="/A&U/AnnualReport">Annual Report</Link></li>
                <li><Link to="/A&U/BalanceSheet">BalanceSheet</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/ROPA" className="Navbar-nav-link">ROPA</Link></li>
          <li><Link to="/N&U" className="Navbar-nav-link">News and Update</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          className={`Navbar-mobile-menu-toggle ${isMenuOpen ? 'Navbar-open' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="Navbar-bar"></span>
          <span className="Navbar-bar"></span>
          <span className="Navbar-bar"></span>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <ul className="Navbar-mobile-nav">
            <li><Link to="/" className="Navbar-mobile-nav-link" onClick={toggleMenu}>Home</Link></li>
            
            {/* Mobile Products and Services Dropdown */}
            <li>
              <div 
                className="Navbar-mobile-dropdown-toggle"
                onClick={toggleProductsDropdown}
              >
                Products and Services {isProductsDropdownOpen ? '▲' : '▼'}
              </div>
              {isProductsDropdownOpen && (
                <ul className="Navbar-mobile-dropdown-menu">
                  <li>
                    <div 
                      className="Navbar-mobile-nested-toggle"
                      onClick={() => toggleMobileNestedMenu('deposit')}
                    >
                      Deposit Products {mobileNestedMenu === 'deposit' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'deposit' && (
                      <ul className="Navbar-mobile-submenu">
                        <li><Link to="/deposit/BasicSavings" onClick={toggleMenu}>Basic Deposit Account</Link></li>
                        <li><Link to="/deposit/RegularSavings" onClick={toggleMenu}>Regular Saving Deposit</Link></li>
                        <li><Link to="/deposit/CheckingAccount" onClick={toggleMenu}>Regular Checking Account</Link></li>
                        <li><Link to="/deposit/InterestBearingCheckingAccount" onClick={toggleMenu}>Interest Bearing Checking Account</Link></li> 
                        <li><Link to="/deposit/StudentSavings" onClick={toggleMenu}>Student Savings Deposit</Link></li>
                        <li><Link to="/deposit/TimeCertofDeposit" onClick={toggleMenu}>Time Certificate of Deposit</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div 
                      className="Navbar-mobile-nested-toggle"
                      onClick={() => toggleMobileNestedMenu('loan')}
                    >
                      Loan Products {mobileNestedMenu === 'loan' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'loan' && (
                      <ul className="Navbar-mobile-submenu">
                        <li><Link to="/loan/AgriculturalLoans" onClick={toggleMenu}>Agricultural Loan</Link></li>
                        <li><Link to="/loan/CommercialLoans" onClick={toggleMenu}>Commercial Loan</Link></li>
                        <li><Link to="/loan/PersonalLoans" onClick={toggleMenu}>Personal Loan</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div 
                      className="Navbar-mobile-nested-toggle"
                      onClick={() => toggleMobileNestedMenu('services')}
                    >
                      Other Services {mobileNestedMenu === 'services' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'services' && (
                      <ul className="Navbar-mobile-submenu">
                        <li><Link to="/other/InterBranch" onClick={toggleMenu}>Inter Branch Deposit</Link></li>
                        <li><Link to="/other/DomesticRemittance" onClick={toggleMenu}>Domestic Remittance</Link></li>
                        <li><Link to="/other/i2i" onClick={toggleMenu}>i2i</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            
            {/* Mobile About Us Dropdown */}
            <li>
              <div 
                className="Navbar-mobile-dropdown-toggle"
                onClick={toggleAboutDropdown}
              >
                About Us {isAboutDropdownOpen ? '▲' : '▼'}
              </div>
              {isAboutDropdownOpen && (
                <ul className="Navbar-mobile-dropdown-menu">
                  <li><Link to="/A&U/CompanyProfile" onClick={toggleMenu}>Company Profile</Link></li>
                  <li><Link to="/A&U/Careers" onClick={toggleMenu}>Careers</Link></li>
                  <li><Link to="/A&U/ContactUs" onClick={toggleMenu}>Contact Us</Link></li>
                  <li><Link to="/A&U/AnnualReport" onClick={toggleMenu}>Annual Report</Link></li>
                  <li><Link to="/A&U/BalanceSheet" onClick={toggleMenu}>BalanceSheet</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/ROPA" className="Navbar-mobile-nav-link" onClick={toggleMenu}>ROPA</Link></li>
            <li><Link to="/N&U" className="Navbar-mobile-nav-link" onClick={toggleMenu}>News and Update</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
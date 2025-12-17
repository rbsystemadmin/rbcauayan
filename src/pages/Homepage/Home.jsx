/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { Shield, Landmark, CreditCard } from 'lucide-react';
import FounderImage from '../../Assets/50years.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import News from '../NewsUpdatePage/NewsUpdate.json';

function Home() {

    const [selectedFeature, setSelectedFeature] = useState(0);
    const [currentSection, setCurrentSection] = useState('hero');
    const [showNews, setShowNews] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isHeroFading, setIsHeroFading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('News', 'Events');
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const cardsPerPage = 3;

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            const maxPage = Math.ceil(filteredNews.length / cardsPerPage) - 1;
            setCurrentPage(currentPage => currentPage < maxPage ? currentPage + 1 : 0);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            const maxPage = Math.ceil(filteredNews.length / cardsPerPage) - 1;
            setCurrentPage(currentPage => currentPage > 0 ? currentPage - 1 : maxPage);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    const handleCategoryChange = (category) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCategory(category);
            setCurrentPage(0);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };


    const filteredNews = News.news
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(item => activeCategory === 'all' || item.category === activeCategory);

    // Get current cards
    const currentCards = filteredNews.slice(
        currentPage * cardsPerPage,
        (currentPage * cardsPerPage) + cardsPerPage
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSection('fading');
            setTimeout(() => {
                setCurrentSection('news');
                setLoading(false);

                setShowNews(true);
            }, 500);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate("/A&U/ContactUs")
    }

    const handletoDepositProducts = () => {
        navigate("/P&S/DepositProducts")
    }

    const handletoLoanProducts = () => {
        navigate("/loan/AgriculturalLoans")
    }

    const handletoOtherServices = () => {
        navigate("/P&S/OtherServices");
    }

    const handletoAboutUs = () => {
        navigate("/A&U/CompanyProfile");
    }

    const handletoNews = () => {
        navigate("/N&U");
    }

    const images = import.meta.glob('/src/Assets/*', { eager: true, import: 'default' });

    return (
        <div className="Home">
            <Navbar />

            {/* Header Section*/}
            {currentSection === 'hero' && (
                <section className={`hero-section ${isHeroFading ? 'fade-out' : ''}`}>
                    <div className="hero-content">
                        <h3>Banking Made Simple With</h3>
                        <h1>
                            <span>
                                Rural Bank of Cauayan, Inc
                            </span>
                        </h1>
                        <p>YOUR HARVEST STARTS HERE</p>
                    </div>
                </section>
            )}

            {currentSection === 'fading' && (
                <section className={`hero-section fade-out ${isHeroFading ? 'fade-out' : ''}`}>
                </section>
            )}

            {/*News Section */}
            {currentSection === 'news' && (
                <section className={`News-Section ${showNews ? 'fade-in' : ''}`}>
                    <div className='News-Container'>
                        <div className='News-Header'>
                            <h2>Latest News</h2>
                            <div className='News-Categories'>
                                <button
                                    className={`category-btn ${activeCategory === 'News' ? 'active' : ''}`}
                                    onClick={handleCategoryChange.bind(this, 'News')} // call handleCategoryChange with argument 'all'
                                >
                                    News
                                </button>
                                <button
                                    className={`category-btn ${activeCategory === 'Events' ? 'active' : ''}`}
                                    onClick={handleCategoryChange.bind(this, 'Events')} // call handleCategoryChange with argument 'all'
                                >
                                    Events
                                </button>
                            </div>
                        </div>

                        <div className='News-Carousel'>
                            <button className='carousel-btn prev' onClick={handlePrev}>
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            <div className={`News-Cards ${isTransitioning ? 'transitioning' : ''}`}>
                                {currentCards.map((item) => {
                                    const imageSrc = images[`/src/Assets${item.image.replace('/src/Assets', '')}`];

                                    return (
                                        <div key={item.id} className='News-Card'>
                                            <div className='News-Image-Container'>
                                                <img src={imageSrc} alt={item.title} className='News-Image' />
                                                <span className='News-Category'>{item.category}</span>
                                            </div>
                                            <div className='News-Contents'>
                                                <div className='News-Meta'>
                                                    <span className='News-Date'>
                                                        <i className="far fa-calendar-alt"></i>
                                                        {new Date(item.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                                <button
                                                    className='News-Button'
                                                    onClick={handletoNews}
                                                >
                                                    Read More
                                                    <i className="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button className='carousel-btn next' onClick={handleNext}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* Features Section */}
            <section className="features-section" >
                <div className='feature-header'>
                    <h1>&quot;Deposits are insured by PDIC up to P1,000,000 per depositor!&quot;</h1>
                    <h2>Products and Services</h2>
                    <p>Explore our range of products and services tailored to meet your banking needs.</p>
                </div>
                <div className="features-grid">
                    <ScrollAnimation delay={0.1}>
                        <div
                            className={`feature-card ${selectedFeature === 0 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(0)}
                        >
                            <div className="feature-icon"><Landmark className="w-6 h-6" /></div>
                            <h3>Deposit Products</h3>
                            <p>Unlock your financial potential with our range of deposit products, designed to help you save and grow your wealth.</p>
                            <button className='feature-button'
                                onClick={handletoDepositProducts}
                            >Learn More</button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <div
                            className={`feature-card ${selectedFeature === 1 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(1)}
                        >
                            <div className="feature-icon"><Shield className="w-6 h-6" /></div>
                            <h3>Loan Products</h3>
                            <p>Make your dreams come true with our easy loan options, giving you the money you need to reach your goals!</p>
                            <button className='feature-button'
                                onClick={handletoLoanProducts}
                            >Learn More</button>
                        </div>
                    </ ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <div
                            className={`feature-card ${selectedFeature === 2 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(2)}
                        >
                            <div className="feature-icon"><CreditCard className="w-6 h-6" /></div>
                            <h3>Other Services</h3>
                            <p>Simplify your life with our range of services, designed to make everyday banking easy and convenient for you!</p>
                            <button className='feature-button'
                                onClick={handletoOtherServices}
                            >Learn More</button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section >

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="prefix">Up to</span>
                        <h3>50M</h3>
                        <span className="label">Loan</span>
                    </div>
                    <div className="stat-card">
                        <span className="prefix"></span>
                        <h3>60 Years</h3>
                        <span className="label">In Service</span>
                    </div>
                    <div className="stat-card">
                        <span className="prefix">Total of</span>
                        <h3>16</h3>
                        <span className="label">Branches</span>
                    </div>
                    <div className="stat-card">
                        <span className="prefix">Total of</span>
                        <h3>2</h3>
                        <span className="label">Branch   Lite</span>
                    </div>
                    <div className="stat-card">
                        <span className="prefix">Weekdays</span>
                        <h3>8:00AM-3:00PM</h3>
                        <span className="label">Support</span>
                    </div>
                </div>
            </section>

            {/*About Us*/}
            <section className='About-section'>
                <div className='About-container'>
                    <div className='About-Content'>
                        <div className="about-header">
                            <h2>About Us</h2>
                            <div className="underline"></div>
                        </div>

                        {/* Image and History Container */}
                        <div className="about-image-container">
                            <div className="about-image">
                                <img src={FounderImage} alt="About Us" />
                            </div>
                            <div className="about-history">
                                <h3>Our History</h3>
                                <p className="history-content">
                                    Our Founding Team
                                    The visionaries who established our foundation
                                    The RURAL BANK OF CAUAYAN INC. was established on April 7,1965.
                                    It is the pioneer bank in Cauayan, Isabela founded by Dr. and Mrs. Ireneo C. Bucag Sr. and its incorporator namely: ...
                                </p>
                                <button className="read-more-btn" onClick={handletoAboutUs}>
                                    Read More
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="about-grid">
                            <ScrollAnimation delay={0.2}>
                                <div className="about-card">
                                    <div className="card-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>
                                        To help improve quality of life by delivering
                                        superior and reliable financial products and
                                        services and operate with a high level of competence,
                                        integrity, honesty, professionalism, and community involvement.
                                    </p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.3}>
                                <div className="about-card">
                                    <div className="card-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>
                                        To be one of the best provider of financial services in the rural banking industry.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contacts Sections*/}
            <section className="cta-section" >
                <div className="cta-content">
                    <h2>Reach out to Us?</h2>
                    <p> Contact us anytime anywhere</p>
                    <div className='cta-buttons'>
                        <button
                            className="cta-button1"
                            onClick={handletonavigate}
                        >Contact Us
                        </button>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}

export default Home;
import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./NewsUpdate.css";
import newsData from './NewsUpdate.json';

function NewsUpdate() {
    const [activeCategory, setActiveCategory] = useState("News");
    const [categories] = useState(newsData.categories);
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        // Sort news by date in descending order (latest first)
        const sortedNews = newsData.news.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });
        setNews(sortedNews);
    }, []); 

    const filteredNews = news.filter(news => news.category === activeCategory);

    const openNewsModal = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const closeNewsModal = () => {
        setSelectedNews(null);
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && selectedNews) {
                closeNewsModal();
            }
        };

        if (selectedNews) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [selectedNews]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const images = import.meta.glob('/src/Assets/*.{jpg,jpeg,png}', { eager: true });

    return (
        <div className="News-Update">
            <Navbar />

            <div className="NU-container">
                <div className='NU-header-container'>
                    <div className='NU-header-content'>
                        <h1>News and Update</h1>
                        <p>Stay Tuned with the latest updates</p>
                    </div>
                </div>

                <div className='NU-categories-section'>
                    <div className='NU-content'>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`NU-category-button ${activeCategory === category.id ? 'NU-category-button--active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='NU-news-details'>
                    {filteredNews.map((News) => {
                        const resolvedImage = images[`/src/Assets${News.image.replace('/src/Assets', '')}`];

                        return (
                            <div
                                key={News.id}
                                className="NU-news-card"
                                onClick={() => openNewsModal(News)}
                            >
                                <div className="NU-news-image-container">
                                    {resolvedImage?.default ? (
                                        <img
                                            src={resolvedImage.default}
                                            alt={News.title}
                                            className="NU-news-image"
                                        />
                                    ) : (
                                        <p>Image not found</p>
                                    )}
                                </div>
                                <div className="NU-news-content">
                                    <h3 className="NU-news-title">{News.title}</h3>
                                    <p className="NU-news-description">{News.description}</p>
                                    <button className="NU-news-button">Learn More →</button>
                                    <p className="NU-news-date">{News.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {selectedNews && (
                    <div
                        className="NU-modal-overlay"
                        onClick={closeNewsModal}
                    >
                        <div
                            className="NU-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="NU-modal-close"
                                onClick={closeNewsModal}
                            >
                                ×
                            </button>
                            <div className='NU-modal-image-container'>
                                {selectedNews.image && (
                                    <img
                                        src={images[`/src/Assets${selectedNews.image.replace('/src/Assets', '')}`]?.default || ''}
                                        alt={selectedNews.title}
                                        className='NU-modal-image'
                                    />
                                )}
                            </div>
                            <div className='NU-modal-text-content'>
                                <h2 className='NU-news-title'>{selectedNews.title}</h2>
                                <p className='NU-news-date'>{selectedNews.date}</p>
                                <p className='NU-news-description'>{selectedNews.fullDescription || selectedNews.description}</p>
                            </div>
                        </div>
                    </div>
                )}

                <button className='NU-scroll-top'
                    onClick={scrollToTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default NewsUpdate;

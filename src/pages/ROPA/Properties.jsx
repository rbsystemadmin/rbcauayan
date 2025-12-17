import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropertiesData from "./Properties.json";
import "./Properties.css";

function Properties() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (selectedProperty) {
            setCurrentImageIndex(0);
        }
    }, [selectedProperty]);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && selectedProperty) {
                closePropertyModal();
            }
        };

        if (selectedProperty) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [selectedProperty]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProperty.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1
        );
    };

    const openGoogleMaps = () => {
        const coordinates = "17.408632,121.744082";
        window.open(`https://www.google.com/maps?q=${coordinates}`, '_blank');
    };

    const closePropertyModal = () => {
        setSelectedProperty(null);
    };

    const images = import.meta.glob('/src/Assets/*.{jpg,jpeg,png}', { eager: true });


    return (
        <div className="properties">
            <Navbar />
            <div className="properties-container">
                <div className="properties-header">
                    <h1>Real and Other Properties Acquired (ROPA)</h1>
                    <p>Acquired Assets (Updated as of May 31, 2025)</p>
                </div>

                <div className="properties-grid">
                    {PropertiesData.properties.map((property) => {
                        const imageSrc = images[`/src/Assets${property.image.replace('/src/Assets', '')}`];

                        return (
                            <div className="property-card" key={property.id}>
                                <div className="property-image">
                                    {imageSrc?.default ? (
                                        <img src={imageSrc.default} alt={property.title} />
                                    ) : (
                                        <p>Image not found</p>

                                    )}
                                    <span className="property-price">{property.price}</span>
                                </div>
                                <div className="property-info">
                                    <h3>{property.title}</h3>
                                    <p className="property-location">
                                        <i className="fas fa-map-marker-alt"></i> {property.location}
                                    </p>
                                    <p className="property-description">{property.description}</p>
                                    <div className="property-details">
                                        <span>
                                            <i className="fas fa-ruler-combined"></i> {property.sqfm} sq.m
                                        </span>
                                    </div>
                                    <button
                                        className="view-details"
                                        onClick={() => setSelectedProperty(property)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Overlay */}
            {selectedProperty && (
                <div className="property-overlay" onClick={closePropertyModal}>
                    <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-button"
                            onClick={closePropertyModal}
                        >
                            ×
                        </button>
                        <div className="overlay-image-container">
                            {selectedProperty.images && selectedProperty.images.length > 0 ? (
                                <>
                                    <div
                                        className="image-slider"
                                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                                    >
                                        {selectedProperty.images.map((image, index) => {
                                            // Dynamically resolve the image path
                                            const imageSrc = images[`/src/Assets${image.replace('/src/Assets', '')}`]?.default || images[`/src/Assets${image.replace('/src/Assets', '')}`];

                                            if (imageSrc) {
                                                return (
                                                    <img
                                                        key={index}
                                                        src={imageSrc}
                                                        alt={`${selectedProperty.title} - Image ${index + 1}`}
                                                        className="slider-image"
                                                    />
                                                );
                                            }

                                            return <p key={index}>Image not found</p>;
                                        })}
                                    </div>
                                    <button className="overlay-image-nav prev" onClick={handlePrevImage}>
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <button className="overlay-image-nav next" onClick={handleNextImage}>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </>
                            ) : (
                                <p>No images available for this property.</p>
                            )}
                        </div>
                        <div className="overlay-info">
                            <h2>{selectedProperty.title}</h2>
                            <div className="overlay-price">{selectedProperty.price}</div>
                            <div className="overlay-location-container">
                                <p className="overlay-location">
                                    <i className="fas fa-map-marker-alt"></i> {selectedProperty.location}
                                </p>
                                <button
                                    className="map-button-container"
                                    onClick={openGoogleMaps}
                                    title="Open in Google Maps"
                                >
                                    <i className="fas fa-map-marked-alt"></i>
                                    <span>View on Maps</span>
                                </button>
                            </div>
                            <p className="overlay-description">{selectedProperty.description}</p>
                            <div className="overlay-details">
                                <span>
                                    <i className="fas fa-ruler-combined"></i> {selectedProperty.sqfm} sq.m
                                </span>
                            </div>
                            <div className="overlay-contact">
                                <div className="contact-header">
                                    <i className="fas fa-phone-alt"></i>
                                    <h3>Contact Information</h3>
                                </div>
                                <div className="contact-details">
                                    <p>
                                        <i className="fas fa-phone"></i>
                                        Call us @ <a href="tel:09178682516">0917-868-2516</a> or <a href="tel:078652016">(078) 652-1016</a>
                                    </p>
                                    <p>Look for: Mr. Ronel A. Santiago, ROPA Supervisor</p>
                                    <p>
                                        <i className="fas fa-envelope"></i>
                                        Email: <a href="mailto:ropa@rbcauayan.com">ropa@rbcauayan.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Properties;
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import branchdata from "./ContactUs.json";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import "./ContactUs.css";

function ContactUs() {

    const [formData, setFormData] = useState({
        name: "",
        contactNo: "",
        email: "",
        subject: "",
        message: "",
    });

    const [selectedBranch, setSelectedBranch] = useState(branchdata.branches[0]);
    const [branchDetails, setBranchDetails] = useState({
        address: "",
        phone: "",
        email: "",
        hours: "",
        coordinates: "",
    });

    const [submissionStatus, setSubmissionStatus] = useState({
        success: false,
        message: ""
    });

    const mapContainerStyle = {
        width: "1150px",
        height: "400px",
        border: "2px solid transparent",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        margin: "0 auto"
    };

    useEffect(() => {
        if (selectedBranch) {
            setBranchDetails({
                address: selectedBranch.address,
                phone: selectedBranch.phone,
                email: selectedBranch.email,
                hours: selectedBranch.hours,
                coordinates: selectedBranch.coordinates,
            });
        }

        const defaultIcon = new L.Icon({
            iconUrl: markerIconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
        L.Marker.prototype.options.icon = defaultIcon;
    }, [selectedBranch]);

    const handleBranchChange = (event) => {
        const selectedBranchId = event.target.value;
        const selectedBranch = branchdata.branches.find(
            (branch) => branch.id === selectedBranchId
        );
        setSelectedBranch(selectedBranch);
    };

    const scrolltoBranchSelector = () => {
        const BranchSelector = document.querySelector(".CU-info-section");
        if (BranchSelector) {
            BranchSelector.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Map view re-centering logic
    // eslint-disable-next-line react/prop-types
    function CenterMap({ coordinates }) {
        const map = useMap();
        map.setView(coordinates, map.getZoom());
        return null;
    }

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("https://www.rbcauayan.com/ssl/form-to-email.php", {
                method: "POST",
                mode: "no-cors", 
                body: new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    contact: formData.contactNo, 
                }),
            });

            console.log("Message attempted to send (no-cors mode).");

            setSubmissionStatus({
                success: true,
                message: "Message was sent!"
            });

            setFormData({
                name: "",
                contactNo: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending your message. Please try again.");
        }
    };
    const openGoogleMaps = () => {
        if (selectedBranch && selectedBranch.coordinates) {
            const coordinatesString = `${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`;
            window.open(`https://www.google.com/maps?q=${coordinatesString}`, '_blank');
        }
    };

    return (
        <div className="Contact-Us">
            <Navbar />
            <div className="Contact-Us-Container">
                <section className="CU-header-section">
                    <div className="CU-header-container">
                        <div className="CU-header-context">
                            <h1>Contact Us</h1>
                            <p>Feel free to reach out to us regarding your concerns</p>
                            <button onClick={scrolltoBranchSelector}>Select a Branch</button>
                        </div>
                    </div>
                </section>

                <div className="CU-body-container">
                    <div className="CU-body-contents">
                        {/* Maps Section */}
                        <div className="CU-maps-display">
                            <MapContainer
                                center={selectedBranch.coordinates}
                                zoom={17}
                                maxZoom={18}
                                style={mapContainerStyle}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                />
                                <CenterMap coordinates={selectedBranch.coordinates} />
                                <Marker position={selectedBranch.coordinates}>
                                    <Popup>{selectedBranch.name}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        {/* Branch Selector Section */}
                        <div className="CU-info-section">
                            <div className="CU-branch-selector">
                                <h2>Select a Branch</h2>
                                <select
                                    className="CU-branch-select"
                                    value={selectedBranch.id}
                                    onChange={handleBranchChange}
                                >
                                    {branchdata.branches.map((branch) => (
                                        <option key={branch.id} value={branch.id}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/*Branch Details Section */}
                            <div className="CU-branch-details">
                                <h2>Branch Information</h2>
                                <div className="CU-branch-info">
                                    <div className="CU-info-item">
                                        <i className="CU-location-icon">📍</i>
                                        <p>{branchDetails.address}</p>
                                    </div>
                                    <div className="CU-info-item">
                                        <i className="CU-phone-icon">📞</i>
                                        <p>{branchDetails.phone}</p>
                                    </div>
                                    <div className="CU-info-item">
                                        <i className="CU-email-icon">✉️</i>
                                        <p>{branchDetails.email}</p>
                                    </div>
                                    <div className="CU-info-item">
                                        <i className="CU-time-icon">🕒</i>
                                        <p>{branchDetails.hours}</p>
                                    </div>
                                    <div>
                                        <button
                                            className="map-button-container"
                                            onClick={openGoogleMaps}
                                            title="Open in Google Maps"
                                        >
                                            <i className="fas fa-map-marked-alt"></i>
                                            <span>View on Google Maps</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="CU-email-section">
                            <div className="CU-form-container">
                                <h2 className="CU-form-title">Send us a Message</h2>
                                <div className="CU-Inner-Container">
                                    <div className="CU-form-card-container">
                                        <div className="CU-form-card">

                                            {submissionStatus.message && (
                                                <div className={`CU-message-box ${submissionStatus.success ? 'success' : 'error'}`}>
                                                    {submissionStatus.message}
                                                </div>
                                            )}

                                            <form onSubmit={handleSubmit} className="CU-form">
                                                {/* Existing form groups remain the same */}
                                                <div className="CU-form-group">
                                                    <label htmlFor="fullname">Full Name</label>
                                                    <input
                                                        id="fullname"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Your full name"
                                                        required
                                                    />
                                                </div>
                                                <div className="CU-form-group">
                                                    <label htmlFor="fullname">Contact No.</label>
                                                    <input
                                                        id="contactNo"
                                                        type="number"
                                                        name="contactNo"
                                                        value={formData.contactNo}
                                                        onChange={handleInputChange}
                                                        placeholder="Your Contact Number"
                                                        required
                                                    />
                                                </div>

                                                <div className="CU-form-group">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="you@example.com"
                                                        required
                                                    />
                                                </div>

                                                <div className="CU-form-group">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input
                                                        id="subject"
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        placeholder="Subject of your message"
                                                        required
                                                    />
                                                </div>

                                                <div className="CU-form-group">
                                                    <label htmlFor="message">Your Message</label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        placeholder="Type your message here"
                                                        required
                                                    />
                                                </div>

                                                <button type="submit" className="CU-submit-button">
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="CU-Message-Container">
                                        <div className="CU-message-content">
                                            <h3>Get in Touch</h3>
                                            <p>
                                                Have questions about our products or services? We&apos;re here to help!
                                                Fill out the form and our team will get back to you within 24 hours.
                                            </p>
                                        </div>

                                        <div className="CU-message-content">
                                            <h3>Customer Support</h3>
                                            <p>
                                                We value your feedback and are committed to providing excellent service.
                                                Our dedicated support team is ready to assist you with any concerns
                                                or inquiries you may have about our products and services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <button className="CU-scroll-top"
                    onClick={scrolltotop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import balanceSheets from "../BalanceSheet/BalanceSheet.json";
import "./BalanceSheet.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function BalanceSheet() {
    const navigate = useNavigate();
    const { reportId } = useParams();
    const [selectedReport, setSelectedReport] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const sortedReports = [...balanceSheets.balancesheets].sort((a, b) => b.id - a.id);

    useEffect(() => {
        if (reportId) {
            const report = sortedReports.find(r => r.id.toString() === reportId);
            if (report) {
                setSelectedReport(report);
            }
        }
        setIsLoaded(true);
    }, [reportId, sortedReports]);

    const handleViewPdf = (e, pdfUrl, reportId) => {
        e.stopPropagation();
        window.open(`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&source=balance-sheet&id=${reportId}`, '_blank');
    };

    const handleBackToReports = () => {
        navigate('/balance-sheets');
    };

    return (
        <div className="Balance-Sheet-container">
            <Navbar />
            <div className="BS-header">
                <div className="BS-header-content">
                    <h1 className="BS-header-title">Balance Sheets</h1>
                </div>
            </div>

            <div className="BS-main-content">
                {!reportId ? (
                    <div className="BS-grid">
                        {sortedReports.map((balancesheet) => (
                            <div
                                key={balancesheet.id}
                                className={`BS-card ${isLoaded ? 'animate' : ''}`}
                            // Removed onClick handler here so the card is not clickable
                            >
                                <div className="card-media-container">
                                    <video
                                        className="card-video"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={balancesheet.videoUrl} type="video/mp4" />
                                    </video>
                                    <div className="card-overlay">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <span className="year-badge">{balancesheet.year}</span>
                                            </div>
                                            <div className="card-actions">
                                                <button
                                                    className="view-BS-btn"
                                                    onClick={(e) => handleViewPdf(e, balancesheet.pdfUrl, balancesheet.id)}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="Report-document-container">
                        <div className="BS-viewer-header">
                            <button
                                className="back-button"
                                onClick={handleBackToReports}
                            >
                                ← Back to Reports
                            </button>
                            <h2>{selectedReport?.title}</h2>
                            <a
                                href={`${selectedReport?.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&source=balance-sheet&id=${reportId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="open-pdf-button"
                            >
                                Open in New Tab
                            </a>
                        </div>
                        <div className="pdf-info">
                            <p>You&apos;re viewing balance sheet with ID: {reportId}</p>
                            <p>You can share this page by copying the current URL.</p>
                            <div className="pdf-preview">
                                <a
                                    href={`${selectedReport?.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&source=balance-sheet&id=${reportId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pdf-preview-link"
                                >
                                    <div className="pdf-thumbnail">
                                        <img src="/api/placeholder/200/250" alt="PDF Preview" />
                                    </div>
                                    <span>{selectedReport?.title}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default BalanceSheet;
import { useState, } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import reportsData from './AnnualReport.json';
import './AnnualReport.css';

const AnnualReport = () => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLoaded] = useState(false);
    
    // Sort reports in descending order by id
    const sortedReports = [...reportsData.reports].sort((a, b) => b.id - a.id);

    const handleReportSelect = (report) => {
        setSelectedReport(report);
        setIsLoading(true);
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 10000);
    };

    return (
        <div className="annual-report-container">
            <Navbar />
            <div className="Report-header">
                <div className="Report-header-content">
                    <h1 className="Report-header-title">Annual Reports</h1>
                </div>
            </div>

            <div className="Report-main-content">
                {!selectedReport ? (
                    <div className="reports-grid">
                        {sortedReports.map((report) => (
                            <div
                                key={report.id}
                                className={`report-card ${isLoaded ? 'animate' : ''}`}
                                onClick={() => handleReportSelect(report)}
                            >
                                <div className="report-card-content">
                                    <div>
                                        <h2>{report.year}</h2>
                                        <h3>{report.title}</h3>
                                    </div>
                                    <div className="card-footer">
                                        <button className="view-report-btn">View</button>
                                        <span className="read-more-tag">Read More</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="Report-document-container">
                        {isLoading && (
                            <div className={`loading-overlay ${!isTransitioning ? 'fade-out' : ''}`}>
                                <div className="loading-spinner"></div>
                                <p>Loading Annual Report {selectedReport.year}...</p>
                            </div>
                        )}
                        <div className="report-viewer-header">
                            <button
                                className="back-button"
                                onClick={() => setSelectedReport(null)}
                            >
                                ← Back to Reports
                            </button>
                            <h2>{selectedReport.title}</h2>
                        </div>
                        <object
                            data={selectedReport.pdfUrl}
                            type="application/pdf"
                            width="100%"
                            height="800px"
                            className={`pdf-object ${!isLoading ? 'fade-in' : ''}`}
                        >
                            <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                        </object>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AnnualReport;

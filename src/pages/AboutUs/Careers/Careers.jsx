import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useState, useMemo } from 'react';
import jobData from './Careers.json';
import './Careers.css';

function Careers() {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedJobType, setSelectedJobType] = useState('All');
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dynamically extract unique departments and job types
    const departments = useMemo(() => ['All', ...new Set(jobData.jobs.map(job => job.department))], []);
    const jobTypes = useMemo(() => ['All', ...new Set(jobData.jobs.map(job => job.type))], []);

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedJob(null);
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    // Filter jobs based on selected department and job type
    const filteredJobs = useMemo(() => {
        return jobData.jobs.filter(job =>
            (selectedDepartment === 'All' || job.department === selectedDepartment) &&
            (selectedJobType === 'All' || job.type === selectedJobType)
        );
    }, [selectedDepartment, selectedJobType]);

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/ApplyJob');
    }


    return (
        <div className="Careers">
            <Navbar />
            <div className="C-screen">
                <section className="C-header-section">
                    <div className="C-header-container">
                        <div className="C-header-content">
                            <h1>JOIN RB CAUAYAN</h1>
                            <p>Find your future in our careers</p>
                        </div>
                    </div>
                </section>

                <div className="C-body">
                    <div className="C-filter-section">
                        <div className="C-filters-container">
                            <div className="C-filter-dropdown">
                                <label htmlFor="department-select">Department:</label>
                                <select
                                    id="department-select"
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="C-select-input"
                                >
                                    {departments.map((dept) => (
                                        <option key={dept} value={dept}>
                                            {dept}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="C-filter-dropdown">
                                <label htmlFor="jobtype-select">Job Type:</label>
                                <select
                                    id="jobtype-select"
                                    value={selectedJobType}
                                    onChange={(e) => setSelectedJobType(e.target.value)}
                                    className="C-select-input"
                                >
                                    {jobTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {filteredJobs.length === 0 ? (
                        <div className="C-no-jobs-message">
                            <p>No jobs found matching your selected filters.</p>
                        </div>
                    ) : (
                        <div className="C-jobs-grid">
                            {filteredJobs.map(job => (
                                <div key={job.id} className="C-job-card">
                                    <div className="C-job-header">
                                        <h3>{job.title}</h3>
                                        <span className="C-job-type">{job.type}</span>
                                    </div>
                                    <div className="C-job-details">
                                        <span className="C-job-department">{job.department}</span>
                                        <span className="C-job-location">{job.location}</span>
                                        <span className="C-job-experience">{job.experience}</span>
                                    </div>
                                    <p className="C-job-description">{job.description}</p>
                                    <button
                                        className="C-view-details-button"
                                        onClick={() => openModal(job)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Job Details Modal */}
                    {isModalOpen && selectedJob && (
                        <div className="C-modal-overlay" onClick={closeModal}>
                            <div className="C-modal" onClick={e => e.stopPropagation()}>
                                <button className="C-modal-close" onClick={closeModal}>×</button>
                                <div className="C-modal-content">
                                    <div className="C-modal-header">
                                        <h2>{selectedJob.title}</h2>
                                        <span className="C-job-type">{selectedJob.type}</span>
                                    </div>

                                    <div className="C-modal-info">
                                        <div className="C-info-item">
                                            <span className="C-info-label">Department:</span>
                                            <span>{selectedJob.department}</span>
                                        </div>
                                        <div className="C-info-item">
                                            <span className="C-info-label">Location:</span>
                                            <span>{selectedJob.location}</span>
                                        </div>
                                        <div className="C-info-item">
                                            <span className="C-info-label">Experience:</span>
                                            <span>{selectedJob.experience}</span>
                                        </div>
                                    </div>

                                    <div className="C-modal-section">
                                        <h3>Job Description</h3>
                                        <p>{selectedJob.description}</p>
                                    </div>

                                    <div className="C-modal-section">
                                        <h3>Requirements</h3>
                                        <ul>
                                            {selectedJob.requirements?.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="C-modal-section">
                                        <h3>Benefits</h3>
                                        <ul>
                                            {selectedJob.benefits?.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="C-apply-button"
                                        onClick={handletonavigate}
                                    >Apply Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button
                className="C-scroll-top"
                onClick={scrolltotop}
            >↑</button>
            <Footer />
        </div>
    );
}

export default Careers;
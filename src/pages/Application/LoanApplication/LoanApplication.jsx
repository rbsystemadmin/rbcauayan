import { useState, useEffect } from 'react';
import useLoanApplicationStore from '../../../store/LoanApplicationsStore';
import { usePostLoan } from '../../../hooks/loanApplicationHook';
import { useNavigate } from 'react-router-dom';
import FriendlyError from './FriendlyError';
import './LoanApplication.css';

const LoanApplication = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const LoanApplication = useLoanApplicationStore((state) => state.loanApplication);
    const updateLoanFields = useLoanApplicationStore((state) => state.updateLoanFields);
    const resetLoanApplicationForm = useLoanApplicationStore((state) => state.resetLoanApplicationForm);

    const { mutate: postLoan, isLoading, error } = usePostLoan();

    useEffect(() => {
        if (error) {
            setErrorMessage("We couldn't process your loan application at this time. Please try again shortly.");
            setShowError(true);
        }
        return () => { }
    }, [error]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateLoanFields(name, value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowError(false);

        try {
            postLoan(LoanApplication);
            setShowMessage("Your Loan Application has been successfully submitted!");
            resetLoanApplicationForm();
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setErrorMessage("We couldn't process your loan application. Please check your information and try again.");
            setShowError(true);
        }
    }

    const handleRetry = () => {
        setShowError(false);
        // You can add specific retry logic here if needed
    }

    const goBack = () => {
        navigate(-1);
    }

    const branchOptions = [
        "Cauayan Branch",
        "Alicia Branch",
        "Bambang Branch",
        "Cabatuan Branch",
        "Camalaniugan Branch",
        "Cordon Branch",
        "Echague Branch",
        "Ilagan Branch",
        "Luna Branch Lite",
        "Reina Mercedes Branch Lite",
        "Ramon Branch",
        "Roxas Branch",
        "Santiago Branch",
        "San Mateo Branch",
        "San Manuel Branch",
        "Solano Branch",
        "Tuguegarao Branch",
        "Tumauini Branch",
    ];

    const productOptions = [
        "Agri-Masikap Loan",
        "Agri-Sagana Loan",
        "Crop Loan",
        "ACPC",
        "Nego-Asenso Loan (Small & Medium Enterprise)",
        "Ka-Asenso Loan (Commercial Loan)",
        "Small Business Loan",
        "Credit Line Facility",
        "Insta-Cash Loan",
        "Visa Loan",
        "Mortgage Facility",
        "Hold-Out Against Deposit (Back to Back Loan)"
    ];

    if (isLoading) {
        return (
            <div className="LAP-loading-container">
                <div className="LAP-loading-spinner"></div>
                <p>Processing your application...</p>
            </div>
        );
    }

    if (showError) {
        return <FriendlyError
            message={errorMessage}
            onRetry={handleRetry}
            onCancel={() => navigate(-1)}
            icon="🧾"
        />;
    }

    return (
        <div className="LAP-loan-application">
            <div className="LAP-loan-container">
                <button className="LAP-back-button" onClick={goBack}>
                    <span className="LAP-back-icon">←</span> Back
                </button>

                <div className="LAP-loan-header">
                    <h1>Loan Application</h1>
                    <p className="LAP-subtitle">Fill out the form below to apply for a loan</p>
                </div>

                <div className="LAP-loan-content">
                    <div className="LAP-loan-form-section">
                        <form className="LAP-loan-form" onSubmit={handleSubmit}>
                            <div className="LAP-form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={LoanApplication?.fullName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="LAP-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={LoanApplication?.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="LAP-form-group">
                                <label htmlFor="contactNo">Contact Number</label>
                                <input
                                    id="contactNo"
                                    name="contactNo"
                                    type="text"
                                    value={LoanApplication?.contactNo}
                                    onChange={({ target }) => /^\d*$/.test(target.value) && handleInputChange({ target })}
                                    maxLength={11}
                                    required
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="LAP-form-group">
                                <label htmlFor="branch">Branch</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    value={LoanApplication?.branch}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select a branch</option>
                                    {branchOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="LAP-form-group">
                                <label htmlFor="product">Loan Product</label>
                                <select
                                    id="product"
                                    name="product"
                                    value={LoanApplication?.product}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select a loan product</option>
                                    {productOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="LAP-form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={LoanApplication?.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Subject of application"
                                />
                            </div>

                            <div className="LAP-form-group">
                                <label htmlFor="message">Message (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={LoanApplication?.message}
                                    onChange={handleInputChange}
                                    placeholder="Additional information about your loan request"
                                    maxLength={255}
                                    rows="4"
                                />
                            </div>

                            <div className="LAP-form-action">
                                <button type="submit" className="LAP-submit-button">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="LAP-loan-info-section">
                        <div className="LAP-info-card">
                            <h2>Let&apos;s Get Started</h2>
                            <p>Please fill out this form so we can contact you about your loan application.</p>
                            <div className="LAP-info-points">
                                <div className="LAP-info-point">
                                    <span className="LAP-info-icon">✓</span>
                                    <span>Quick and easy application</span>
                                </div>
                                <div className="LAP-info-point">
                                    <span className="LAP-info-icon">✓</span>
                                    <span>Personalized loan options</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showMessage && (
                        <div className='LAP-message-box-success'>
                            {showMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoanApplication;
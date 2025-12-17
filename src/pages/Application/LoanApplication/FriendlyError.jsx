/* eslint-disable react/prop-types */
import './FriendlyError.css';

const FriendlyError = ({
    message = "Something went wrong with your application",
    onRetry = () => { },
    onCancel = null,
    icon = "😕"
}) => {
    return (
        <div className="friendly-error-container">
            <div className="friendly-error-card">
                <div className="friendly-error-icon">{icon}</div>
                <h3 className="friendly-error-title">Oops! Let&apos;s Try Again</h3>
                <p className="friendly-error-message">{message}</p>
                <div className="friendly-error-actions">
                    <button
                        className="friendly-error-retry-btn"
                        onClick={onRetry}
                    >
                        Try Again
                    </button>
                    {onCancel && (
                        <button
                            className="friendly-error-cancel-btn"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FriendlyError;
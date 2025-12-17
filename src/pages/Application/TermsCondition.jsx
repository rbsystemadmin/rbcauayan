import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TermsCondition.css";


const TermsCondition = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [list7section, setlist7section] = useState(false);
    const [list8section, setlist8section] = useState(false);
    const [list9section, setlist9section] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const applicationUrl = location.state?.applicationUrl || "/";

    const handleContinue = () => {
        window.location.href = applicationUrl;
    }

    const goback = () => {
        navigate(-1);
    }

    const togglevisibility = (listSetter) => {
        listSetter(prev => !prev);
    }

    const scrollltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }


    return (
        <div className="Terms-and-Condition">
            <div className="TC-navigation-container">
                <button className="TC-back-button"
                    onClick={goback}
                > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back</button>
            </div>

            <div className="terms-condition-container">
                <div className="TC-header-container">
                    <div className="TC-header-content">
                        <h1>Terms and Condition</h1>
                        <p>Included here are the terms and conditions for apply of the specific services that you have selected</p>
                    </div>
                </div>

                <div className="TC-body">
                    <div className="TC-body-container">

                        <div className="TC-second-area-section">
                            <div className="TC-second-area-header">
                                <h1>Data Privacy Statement</h1>
                            </div>
                            <div className="TC-inner-body">
                                <div className="TC-PN-section">
                                    <h2>PRIVACY NOTICE</h2>
                                    <p>
                                        Confidentiality and privacy are vital features of the banking industry. Rural Bank of Cauayan, Inc.
                                        (RB Cauayan) is committed in ensuring that your data is protected in accordance with
                                        Republic Act no. 10173 or the Data Privacy Act of 2012 and its Implementing Rules and Regulations.
                                    </p>
                                </div>

                                <div className="TC-DOT-outer-section">
                                    <button
                                        className="TC-toggle-button"
                                        onClick={() => togglevisibility(setlist7section)}
                                    >
                                        DEFINITION OF TERMS
                                        <span className={`TC-dropdown-icon ${list7section ? 'open' : ''}`}>▼</span>
                                    </button>
                                    {list7section && (
                                        <div className="TC-DOT-section">
                                            <h2>DEFINITION OF TERMS</h2>
                                            <p>
                                                Consent of the data subject refers to any freely given, specific, informed indication of will,
                                                whereby the data subject agrees to the collection and processing of personal information about
                                                and/or relating to him or her. Consent shall be evidenced by written, electronic or recorded means.
                                                It may also be given on behalf of the data subject by an agent specifically authorized by the data subject to do so.
                                            </p>
                                            <p>
                                                Personal information refers to any information whether recorded in a material form or not, from which the identity of an
                                                individual is apparent or can be reasonably and directly ascertained by the entity holding the information, or when put
                                                together with other information would directly and certainly identify an individual.
                                            </p>
                                            <p>
                                                Privileged information refers to any and all forms of data which under the Rules of Court and other pertinent laws constitute privileged communication.
                                            </p>
                                            <p>
                                                Sensitive personal information refers to personal information:
                                                <ol type="a">
                                                    <li>About an individual’s race, ethnic origin, marital status, age, color, and religious, philosophical or political affiliations;</li>
                                                    <li>
                                                        About an individual’s health, education, genetic or sexual life of a person, or to any proceeding for any offense committed
                                                        or alleged to have been committed by such person, the disposal of such proceedings, or the sentence of any court in such proceedings;
                                                    </li>
                                                    <li> Issued by government agencies peculiar to an individual which includes, but not limited to, social security numbers, previous or current health records, licenses or its denials, suspension or revocation, and tax returns; and</li>
                                                    <li>Specifically established by an executive order or an act of Congress to be kept classified.</li>
                                                </ol>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="TC-PPI-outer-section">
                                    <button
                                        className="TC-toggle-button"
                                        onClick={() => togglevisibility(setlist8section)}
                                    >
                                        PROCESSING PERSONAL INFORMATION
                                        <span className={`TC-dropdown-icon ${list8section ? 'open' : ''}`}>▼</span>
                                    </button>
                                    {list8section && (
                                        <div className="TC-PPI-section">
                                            <h1>PROCESSING PERSONAL INFORMATION</h1>
                                            <ol type="A">
                                                <li>
                                                    Collection
                                                    <p>
                                                        The bank’s data collection process for the core banking system starts upon client application.
                                                        After getting consent, the branch provides the client with KYC documents such as Client Information Form (CIF)
                                                        and the signature card, in compliance with Customer Due Diligence required under AMLC. Personal information and
                                                        Sensitive Personal Information, as well as financial data are included in these documents.
                                                        For employee files, data collection starts during the recruitment process, wherein applicants for various positions
                                                        are required to submit personal files in compliance with the Labor Code and the bank’s internal policies.
                                                    </p>
                                                </li>
                                                <li>
                                                    Use
                                                    <p>
                                                        All data collected from clients, regardless of product or service acquired, is used by the bank for the following purposes, subject to Bank Secrecy Law and Data Privacy Act:
                                                        1. Bank’s operations;
                                                        2. Compliance with regulations;
                                                        3. In agreement with third-party wherein the bank acts as a conduit (e.g. ACPC);
                                                        4. For research purposes with BSP accredited/recognized organizations.
                                                        Transactions indicated in number 3 and 4 requires a Data Privacy Agreement between the bank and the third-party,
                                                        unless the agreement is inherent in the transaction or third-party’s operations, to ensure that accountability and adherence to the applicable laws are in place.
                                                        Data collected from employees are used during assignment of duties, evaluation, promotion and demotion,
                                                        compensation and benefits, and other purposes allowed under the Labor Law.
                                                    </p>
                                                </li>
                                                <li>
                                                    STORAGE, RENTENTION AND DESTRUCTION
                                                    <p>
                                                        The bank shall ensure that personal data under its custody are protected against any accidental or unlawful destruction,
                                                        alteration and disclosure as well as against any other unlawful processing. The bank shall implement appropriate security
                                                        measures in storing collected personal information, depending on the nature of the information. All information gathered
                                                        shall be retained based on the MORB and shall be disposed and destroyed, through secured means.
                                                    </p>
                                                </li>
                                                <li>
                                                    ACCESS
                                                    <p>
                                                        Access to data collected by the bank is limited to those with appropriate authority necessary to carry-out their duties
                                                        and functions in the bank. Access beyond this is subject to approval of the President and/or the Board.
                                                    </p>
                                                </li>
                                                <li>
                                                    DISCLOSURE AND SHARING
                                                    <p>
                                                        Disclosure and sharing of any personal information from clients or employees beyond what are necessary for the performance
                                                        of the bank’s duties and purposes mentioned above are strictly prohibited. All employees and personnel of the bank shall
                                                        maintain the confidentiality and secrecy of all personal data that come to their knowledge and possession, even after resignation,
                                                        termination of contract, or other contractual relations. Personal data under the custody of the bank shall be disclosed only pursuant
                                                        to a lawful purpose, and to authorized recipients of such data.
                                                    </p>
                                                </li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                <div className="TC-RDS-outer-section">
                                    <button
                                        className="TC-toggle-button"
                                        onClick={() => togglevisibility(setlist9section)}
                                    >
                                        RIGHTS OF A DATA SUBJECT
                                        <span className={`TC-dropdown-icon ${list9section ? 'open' : ''}`}>▼</span>
                                    </button>
                                    {list9section && (
                                        <div className="TC-RDS-section">
                                            <h2>RIGHTS OF A DATA SUBJECT</h2>
                                            <p>In adherence to the Data Privacy Act, all data subjects are entitled to the following rights:</p>
                                            <ol>
                                                <li>To be informed whether personal data pertaining to you shall be, are being, or have been processed, including the existence of automated decision-making and profiling.</li>
                                                <li>To object to processing of your personal data, including processing for direct marketing, automated processing, or profiling and in case of changes or amendments in processing.</li>
                                                <li>To access your personal data.</li>
                                                <li>To require the bank to correct any of your personal data, if inaccurate.</li>
                                                <li>To obtain a copy of your personal data in an electronic or structured format for your further use.</li>
                                                <li>To suspend, withdraw, or order the blocking, removal, or destruction of your personal data from RB Cauayan&apos;s system. It is understood that if you exercise this particular right, RB Cauayan has the right to terminate its services with you.</li>
                                                <li>To file a complaint with the NPC.</li>
                                                <li>To be indemnified for any damages sustained due to such inaccurate, incomplete, outdated, false, unlawfully obtained or unauthorized use of your personal data</li>
                                            </ol>
                                            <p>We may charge a fee for processing your request/s for access and/or update. Such a fee depends on the nature and complexity of your request. Information on any processing fee will be made available to you prior to making the request.</p>
                                        </div>
                                    )}
                                </div>

                                <div className="TC-contact-section">
                                    <div className="TC-contacts-contents">
                                        <p>For inquiries regarding your data privacy, you may contact us at:</p>
                                        <h4>Data Protection Officer</h4>
                                        <p>dpo@rbcauayan.com</p>
                                        <p>(+63) 917-705-8812</p>
                                    </div>
                                </div>

                                <div className="TC-CT-container">
                                    <div className="TC-CT-content">
                                        <h2>CHANGES TO THE STATEMENT</h2>
                                        <p>
                                            We may modify or amend this Privacy Statement from time to time
                                            to keep up with any changes in relevant laws and regulations
                                            applicable to us or how we collect, use, protect, store, share or
                                            dispose of your personal information. Any relevant updates will be posted on this website.
                                        </p>
                                        <p>*Last updated June 27, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="TC-applicatio-content">
                            <h4>I hereby acknowledge to have read and fully understood the said terms and conditions.</h4>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                I accept the &quot;terms and conditions&quot; and provide consent as stated in the &quot;data privacy statement&quot;.
                            </label>
                            <br />
                            <button
                                className="TC-proceed-button"
                                onClick={handleContinue}
                                disabled={!isChecked}
                            >Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="TC-scroll-top"
                onClick={scrollltotop}
            > ↑ </button>
        </div>
    );
}

export default TermsCondition;
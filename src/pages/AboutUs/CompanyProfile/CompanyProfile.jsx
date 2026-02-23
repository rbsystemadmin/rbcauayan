import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import "./CompanyProfile.css";
import CompanyProfileImage from '../../../Assets/CompanyProfile.png';
import Founder from '../../../Assets/Founder.png';
import Chairman from '../../../Assets/DocEddie.jpg';
import ViceChairMan from '../../../Assets/SirEdgar.jpg';
import President from '../../../Assets/President.jpg';
import SirIreneo from '../../../Assets/SirIreneo.jpg';
import MaamAttorney from '../../../Assets/MaamAttorney.jpg';
import EngrSusan from '../../../Assets/EngrSusan.jpg';
import MaamMarlyn from '../../../Assets/MaamMarlyn.jpg';
import SirRonaldo from '../../../Assets/SirRonaldo.jpg';
import MaamMarissa from '../../../Assets/MaamMarissa.jpg';
import MaamReggie from '../../../Assets/MaamReggie.jpg';
import MaamAi from '../../../Assets/MaamAi.jpg';
import MaamTeresita from '../../../Assets/MaamTeresita.jpeg';


function CompanyProfile() {

    const directors = [
        { src: SirIreneo, name: "Ireneo R. Bucag Jr.", title: "Board of Director" },
        { src: SirRonaldo, name: "Engr. Ronaldo R. Bucag", title: "Board of Director" }
    ];

    const directors2 = [
        { src: MaamAttorney, name: "Ma. Luisa M. Andres, CPA/Lawyer ", title: "Board of Director" },
        { src: EngrSusan, name: "Engr. Susana S. Wandag", title: "Board of Director" },
        { src: MaamMarlyn, name: "Shirly Leocel A. Narag, CPA", title: "Board of Director" },
        { src: MaamTeresita, name: "Teresita R. San Pedro, CPA", title: "Board of Director" }
    ];

    const COO = [
        { src: MaamMarissa, name: "Marissa M. Paraguison", title: "Chief Operating Officer" },
        { src: MaamReggie, name: "Emerlyne M. Manangan", title: "Chief Operating Officer" },
    ];

    const COO2 = [
        { src: MaamAi, name: "Aileen V. Barlis", title: "Chief Operating Officer" }
    ];

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="CP-company-profile">
            <Navbar />
            {/*Header Section */}
            <section>
                <div className="CP-hero-section">
                    <div className="CP-hero-content">
                        <h1>Our Legacy of Excellence</h1>
                        <p>Building trust and fostering growth since 1965</p>
                    </div>
                </div>
            </section>

            {/*Timeline Sections */}
            <section>
                <div className="CP-timeline-section">
                    <h2>Our Journey Through Time</h2>
                    <div className="CP-timeline">
                        <ScrollAnimation delay={0.1}>
                            <div className="CP-timeline-item">
                                <div className="CP-year">1965</div>
                                <div className="CP-content">
                                    <h3>The Beginning</h3>
                                    <p>Founded by Dr. and Mrs. Ireneo C. Bucag Sr. along with distinguished incorporators,
                                        establishing the first bank in Cauayan, Isabela.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.1}>
                            <div className="CP-timeline-item-2">
                                <div className="CP-content">
                                    <h3>Initial Expansion</h3>
                                    <p>Opened six new branches, marking the beginning of our regional growth.</p>
                                </div>
                                <div className="CP-year">1990-2000</div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.1}>
                            <div className="CP-timeline-item">
                                <div className="CP-year">2001-2010</div>
                                <div className="CP-content">
                                    <h3>Rapid Growth</h3>
                                    <p>Established eight additional branches, strengthening our presence in the region.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.1}>
                            <div className="CP-timeline-item-2">
                                <div className="CP-content">
                                    <h3>Continued Evolution</h3>
                                    <p>Added three more branches, further expanding our banking network.</p>
                                </div>
                                <div className="CP-year">2011-2013</div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/*Founders Section */}
            <section>
                <div className="CP-founders-section">
                    <h2>Our Pioneering Leaders</h2>
                    <div className="CP-founders-card-section">
                        <div className="CP-founder-card">
                            <img src={CompanyProfileImage} alt="Historical Photo" className="CP-founder-image" />
                            <div className="CP-founder-info">
                                <h3>Our Founding Team</h3>
                                <p>The visionaries who established our foundation</p>
                            </div>
                        </div>
                        <div className="CP-founder-story">
                            <p>The RURAL BANK OF CAUAYAN INC. was established on April 7,1965. It is the pioneer bank in Cauayan, Isabela founded by Dr. and Mrs. Ireneo C. Bucag Sr. and its incorporator namely: Mr. Domingo San Pedro, Mrs. Aurea B. Carpio, Mr. Antonio M. Perez, Mrs. Lourdes Cruz, and Mr. Domingo Simangan.
                                <br />
                                <br />
                                The simplified and affordable credit window that it offers immediately became a word of mouth among farmers and businessmen in Cauayan, Isabela, and its nearby municipalities. Since then, it has not stopped counting more satisfied and loyal customers.
                                <br />
                                <br />
                                Because of this, Rural Bank of Cauayan Inc. started branching out. Six (6) branches were opened from 1990 to 2000, Eight (8) other branches were inaugurated from 2001-2010, and 3 more branches started operating from 2011 to 2013.
                                <br />
                                <br />
                                As of now, Rural Bank of Cauayan Inc. has a total of 16 branches and 2 Branch Lite operating in Provinces in Region 2–Isabela, Cagayan, and Nueva Vizcaya with resources of over a Billion pesos, and a total of 200 employees more or less.
                                <br />
                                <br />
                                The bank’s tremendous growth over the years was fueled by the active & dynamic stewardship of its Members of the Board namely:Chairman Dr. Eduardo R. Bucag , Vice Chairman Mr. Edgardo R. Bucag , Board of Director Mr. Ireneo R. Bucag Jr., Board of Director Engr. Ronaldo R. Bucag, Board of Director Mr. Danilo San Pedro, Board of Director Atty. Ma. Luisa M. Andres, Board of Director Engr, Susana S. Wandag, Board of Director Ms. Shirly Leocel A. Narag.and its dedicated Management Team under the leadership of Ms. Charita P. Guinid-President and its hard-working Chief Operating Officers namely Ms. Marissa M. Paraguison, Ms. Jannette B. Domingo, Ms. Emerlyne M. Manangan and Ms. Aileen V. Barlis.
                                <br />
                                <br />
                                Social responsibilities have been a part of Rural Bank of Cauayan’s distinctiveness. By conducting a Job fair, Brigada Eskwela, Operation during Calamities, and Medical Mission.
                                <br />
                                <br />
                                Truly, Rural Bank of Cauayan Inc. has evolved as one of the biggest rural banks in the region and has been receiving recognition from prestigious institutions. Over the years, it has continued its legacy of good governance and excellent customer service.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="CP-mission-section">
                    <div className="CP-mission-vision-row">
                        <div className="CP-vision-content">
                            <h2>Our Vision</h2>
                            <p>
                                To be one of the best provider of financial services in the rural banking industry.
                            </p>
                        </div>
                        <div className="CP-mission-content">
                            <h2>Our Mission</h2>
                            <p>
                                To help improve quality of life by delivering
                                superior and reliable financial products and
                                services and operate with a high level of competence,
                                integrity, honesty, professionalism, and community involvement.
                            </p>
                        </div>
                    </div>

                    <div className="CP-Core-values-wrapper">
                        <div className="CP-Core-values-Title">
                            <h2>Our Core Values</h2>
                        </div>
                        <div className="CP-Core-values-marquee">
                            <div className="CP-core-values-content">
                                <ul>
                                    <li>
                                        <h2>SERVICE</h2>
                                        <p>We provide and deliver the best products and services to all of our clients. We focus on their needs.</p>
                                    </li>
                                    <li>
                                        <h2>INTEGRITY & PROFESSIONALISM</h2>
                                        <p>
                                            We practice honesty, transparency, fairness and demonstrate mutual respect and trust with others.
                                            We uphold high ethical standards and conduct ourselves in a manner that dignifies the reputation
                                            of the bank. We take responsibility and stand up for our actions.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>CARE FOR EMPLOYEES</h2>
                                        <p>We practice a culture that attracts, retains, rewards and empowers employees.</p>
                                    </li>
                                    <li>
                                        <h2>DIVERSITY</h2>
                                        <p>
                                            We recognize that we have varying and sometimes opposing views.
                                            This is only because of differences in perceptions and how to improve
                                            and promote the interest of the company, our clients, and our employees.
                                            As such, we welcome, listen and respect all perspectives and views.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>EXCELLENCE</h2>
                                        <p>
                                            We put the company our first priority. We operate as a competitive and profitable
                                            business and work as a team to attain our organizational goals. We constantly strive
                                            to be the number one. We act quickly and stand for the highest quality we deliver.
                                            Our employees are trained to excel, to deliver their best performance and be as
                                            productive as they can be.
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h2>SERVICE</h2>
                                        <p>We provide and deliver the best products and services to all of our clients. We focus on their needs.</p>
                                    </li>
                                    <li>
                                        <h2>INTEGRITY & PROFESSIONALISM</h2>
                                        <p>
                                            We practice honesty, transparency, fairness and demonstrate mutual respect and trust with others.
                                            We uphold high ethical standards and conduct ourselves in a manner that dignifies the reputation
                                            of the bank. We take responsibility and stand up for our actions.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>CARE FOR EMPLOYEES</h2>
                                        <p>We practice a culture that attracts, retains, rewards and empowers employees.</p>
                                    </li>
                                    <li>
                                        <h2>DIVERSITY</h2>
                                        <p>
                                            We recognize that we have varying and sometimes opposing views.
                                            This is only because of differences in perceptions and how to improve
                                            and promote the interest of the company, our clients, and our employees.
                                            As such, we welcome, listen and respect all perspectives and views.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>EXCELLENCE</h2>
                                        <p>
                                            We put the company our first priority. We operate as a competitive and profitable
                                            business and work as a team to attain our organizational goals. We constantly strive
                                            to be the number one. We act quickly and stand for the highest quality we deliver.
                                            Our employees are trained to excel, to deliver their best performance and be as
                                            productive as they can be.
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h2>SERVICE</h2>
                                        <p>We provide and deliver the best products and services to all of our clients. We focus on their needs.</p>
                                    </li>
                                    <li>
                                        <h2>INTEGRITY & PROFESSIONALISM</h2>
                                        <p>
                                            We practice honesty, transparency, fairness and demonstrate mutual respect and trust with others.
                                            We uphold high ethical standards and conduct ourselves in a manner that dignifies the reputation
                                            of the bank. We take responsibility and stand up for our actions.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>CARE FOR EMPLOYEES</h2>
                                        <p>We practice a culture that attracts, retains, rewards and empowers employees.</p>
                                    </li>
                                    <li>
                                        <h2>DIVERSITY</h2>
                                        <p>
                                            We recognize that we have varying and sometimes opposing views.
                                            This is only because of differences in perceptions and how to improve
                                            and promote the interest of the company, our clients, and our employees.
                                            As such, we welcome, listen and respect all perspectives and views.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>EXCELLENCE</h2>
                                        <p>
                                            We put the company our first priority. We operate as a competitive and profitable
                                            business and work as a team to attain our organizational goals. We constantly strive
                                            to be the number one. We act quickly and stand for the highest quality we deliver.
                                            Our employees are trained to excel, to deliver their best performance and be as
                                            productive as they can be.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Board of Directors Section */}
            <section className="CP-gallery-section">
                <h2>Board of Directors</h2>

                <div className="CP-board-hierarchy">
                    <ScrollAnimation delay={0.1}>
                        <div className="CP-board-top">
                            <div className="CP-board-founder CP-board-position">
                                <div className="CP-board-card">
                                    <img src={Founder} alt="Founder" />
                                    <div className="CP-board-info">
                                        <h3>Mrs. Juana R. Bucag</h3>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="CP-board-middle">
                        <ScrollAnimation delay={0.2}>
                            <div className="CP-board-chairman CP-board-position">
                                <div className="CP-board-card">
                                    <img src={Chairman} alt="Chairman" />
                                    <div className="CP-board-info">
                                        <h3>Dr. Eduardo R. Bucag</h3>
                                        <p>Chairman of the Board</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.3}>
                            <div className="CP-board-vice-chairman CP-board-position">
                                <div className="CP-board-card">
                                    <img src={ViceChairMan} alt="Vice Chairman" />
                                    <div className="CP-board-info">
                                        <h3>Edgardo R. Bucag</h3>
                                        <p>Vice Chairman of the Board</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="CP-board-bottom">

                        <ScrollAnimation>
                            <div className="board-directors-grid">
                                {directors.map((director, index) => (
                                    <div key={index} className="CP-board-position">
                                        <div className="CP-board-card">
                                            <img
                                                src={director.src}
                                                alt={director.name}
                                                className="director-image"
                                            />
                                            <div className="CP-board-info">
                                                <h3>{director.name}</h3>
                                                <p>{director.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <div className="board-directors-grid2">
                                {directors2.map((director2, index) => (
                                    <div key={index} className="CP-board-position">
                                        <div className="CP-board-card">
                                            <img
                                                src={director2.src}
                                                alt={director2.name}
                                                className="director-image"
                                            />
                                            <div className="CP-board-info">
                                                <h3>{director2.name}</h3>
                                                <p>{director2.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <div className="CP-board-president CP-board-position">
                                <div className="CP-board-card">
                                    <img src={President} alt="President" />
                                    <div className="CP-board-info">
                                        <h3>Charita P. Guinid, CPA</h3>
                                        <p>President</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <div className="COO-board-grid">
                                {COO.map((COO, index) => (
                                    <div key={index} className="CP-board-position">
                                        <div className="CP-board-card">
                                            <img
                                                src={COO.src}
                                                alt={COO.name}
                                                className="director-image"
                                            />
                                            <div className="CP-board-info">
                                                <h3>{COO.name}</h3>
                                                <p>{COO.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <div className="COO-board-grid2">
                                {COO2.map((COO, index) => (
                                    <div key={index} className="CP-board-position">
                                        <div className="CP-board-card">
                                            <img
                                                src={COO.src}
                                                alt={COO.name}
                                                className="director-image"
                                            />
                                            <div className="CP-board-info">
                                                <h3>{COO.name}</h3>
                                                <p>{COO.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>


            <button
                className="CP-scroll-top"
                onClick={scrolltotop}
            >↑</button>
            <Footer />
        </div>
    );
}

export default CompanyProfile;
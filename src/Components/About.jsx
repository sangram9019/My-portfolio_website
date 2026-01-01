import React from 'react'

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a final year Computer Science and Engineering student at KLE's College of Engineering And
                            Technology, Chikodi (2025).
                            I have a strong foundation in <span className="highlight">Java Core</span>, <span
                                className="highlight">React.js</span>, and <span className="highlight">Spring Boot</span>.
                        </p>
                        <p>
                            I recently completed a Cybersecurity Traineeship at ELEWAYTE, creating a well-rounded profile
                            with both development and security awareness.
                            I love solving complex problems and have participated in competitive events like Flipkart Grid
                            6.0.
                        </p>

                        <div className="education-list">
                            <h3>Education</h3>
                            <div className="edu-item">
                                <span className="year">2021 - 2025</span>
                                <h4>Bachelor of Engineering (B.E.)</h4>
                                <p>KLE's College of Engineering And Technology, Chikodi</p>
                            </div>
                            <div className="edu-item">
                                <span className="year">2019 - 2021</span>
                                <h4>Pre-university courses (PUC)</h4>
                                <p>Shardadevi Kore PU College, Ankali</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
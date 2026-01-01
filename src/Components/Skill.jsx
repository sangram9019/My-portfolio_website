import React from 'react'

const Skill = () => {
    return (
        <section id="skills" className="section bg-alt">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {/* Skill cards */}
                    <div className="skill-card">
                        <i className="fab fa-java" style={{ color: '#f89820' }}></i>
                        <h3>Java</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-react" style={{ color: '#61dbfb' }}></i>
                        <h3>React</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-leaf" style={{ color: '#6db33f' }}></i>
                        <h3>Spring Boot</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-database" style={{ color: '#00758f' }}></i>
                        <h3>MySQL</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-html5" style={{ color: '#e34c26' }}></i>
                        <h3>HTML5</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-css3-alt" style={{ color: '#2965f1' }}></i>
                        <h3>CSS3</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-js" style={{ color: '#f7df1e' }}></i>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-server" style={{ color: '#9e74ce' }}></i>
                        <h3>Data Structures</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skill
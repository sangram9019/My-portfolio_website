import React from 'react'
import './Herosection.css'

const Herosection = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero-content">
                <span className="greeting">Hello, I'm</span>
                <h1 className="name">Sangram Chavan Patil</h1>
                <h2 className="title">Full Stack Developer</h2>
                <p className="description">
                    Enthusiastic Computer Science and Engineering student with hands-on experience in full-stack web
                    development and cybersecurity. Passionate about building seamless web experiences.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/Sangram96k" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://in.linkedin.com/in/sangram-chavan-patil-2b117024b" target="_blank"><i
                        className="fab fa-linkedin"></i></a>
                    <a href="mailto:sangramchavanpatil444@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </section>

    )
}

export default Herosection
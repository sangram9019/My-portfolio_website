import React from 'react'
const Contact = () => {
    return (
        <section id="contact" className="section bg-alt">
            <div className="container contact-wrapper">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">I'm currently looking for new opportunities. Whether you have a question or just
                    want to say hi, I'll try my best to get back to you!</p>

                <div className="contact-methods">
                    <a href="mailto:sangramchavanpatil444@gmail.com" className="contact-box">
                        <i className="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>sangramchavanpatil444@gmail.com</p>
                    </a>
                    <a href="tel:+919019409736" className="contact-box">
                        <i className="fas fa-phone"></i>
                        <h3>Phone</h3>
                        <p>+91 9019409736</p>
                    </a>
                    <a href="https://in.linkedin.com/in/sangram-chavan-patil-2b117024b" target="_blank" className="contact-box">
                        <i className="fab fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <p>Sangram Chavan Patil</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact

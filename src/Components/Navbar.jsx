import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsOpen(false); // Close menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navbarcontext = [
        {
            href_name: "About",
            href_link: "about",
            type: "scroll"
        },
        {
            href_name: "Skills",
            href_link: "skills",
            type: "scroll"
        },
        {
            href_name: "Projects",
            href_link: "projects",
            type: "scroll"
        },
        {
            href_name: "Contact",
            href_link: "contact",
            stylename: "btn-primary",
            type: "scroll"
        },
        {
            href_name: "Resume",
            href_link: "/Sangram_fullstack_resume.pdf",
            stylename: "btn-primary resume",
            type: "download"
        }
    ]
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#hero" className="logo" onClick={(e) => handleScroll(e, 'hero')}>Sangram<span>.</span></a>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navbarcontext.map((item, index) => {
                        if (item.type === "download") {
                            return (
                                <li key={index}>
                                    <a
                                        href={item.href_link}
                                        className={item.stylename}
                                        download="Sangram_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.href_name}
                                    </a>
                                </li>
                            )
                        }
                        return (
                            <li key={index}>
                                <a
                                    href={`#${item.href_link}`}
                                    className={item.stylename}
                                    onClick={(e) => handleScroll(e, item.href_link)}
                                >
                                    {item.href_name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
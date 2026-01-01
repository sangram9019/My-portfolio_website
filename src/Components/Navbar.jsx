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
            href_link: "about" // removed # for logic
        },
        {
            href_name: "Skills",
            href_link: "skills"
        },
        {
            href_name: "Projects",
            href_link: "projects"
        },
        {
            href_name: "Contact",
            href_link: "contact",
            stylename: "btn-primary"
        }
    ]
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#hero" className="logo" onClick={(e) => handleScroll(e, 'hero')}>Sangram<span>.</span></a>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navbarcontext.map((item, index) => {
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
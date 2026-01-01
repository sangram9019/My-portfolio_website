document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked AND smooth scroll with offset
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');

            // Custom Smooth Scroll with Offset
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerOffset = 100; // Height of navbar + buffer
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Reveal Animation (Simple version using Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Add initial hidden class
        observer.observe(section);
    });

    // Add CSS for fade-in manually if not in style.css, but ideally style.css handles it.
    // Let's rely on style.css, but I'll add a quick inline style check or class here to be safe.
    // Adding dynamic style for animation classes
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);
});

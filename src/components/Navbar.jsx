import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onRegisterClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Themes', href: '#themes' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Contact', href: '#coordinators' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="logo">
                    Code<span className="gradient-text">Storm</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <button onClick={onRegisterClick} className="btn btn-primary small-btn">Register</button>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                        <li>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onRegisterClick();
                                }}
                            >
                                Register Now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

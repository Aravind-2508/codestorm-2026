import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + (i * 0.1),
                duration: 0.5
            }
        })
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <div className="container nav-content">
                <a href="#" className="logo">
                    Code<span className="gradient-text">Storm</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.name}
                            custom={i}
                            variants={linkVariants}
                        >
                            <a href={link.href}>{link.name}</a>
                        </motion.li>
                    ))}
                    <motion.li
                        custom={navLinks.length}
                        variants={linkVariants}
                    >
                        <motion.button
                            onClick={onRegisterClick}
                            className="btn btn-primary small-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </motion.li>
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
        </motion.nav>
    );
};

export default Navbar;

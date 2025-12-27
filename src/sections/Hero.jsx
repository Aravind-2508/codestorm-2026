import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = ({ onRegisterClick }) => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <motion.div
                    className="gradient-orb orb-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="gradient-orb orb-2"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                ></motion.div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-badgeglass"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <span>🚀 National Level 36-Hour Hackathon</span>
                </motion.div>

                <h1 className="hero-title">
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Code
                    </motion.span>
                    <motion.span
                        className="gradient-text"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    >
                        Storm
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        2026
                    </motion.span>
                </h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <span className="typing-text">BUILD THE FUTURE. BREAK THE LIMITS.</span>
                </motion.p>

                <motion.div
                    className="hero-info-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <div className="info-item">
                        <span className="icon">📅</span>
                        <div className="text">
                            <span className="label">Date</span>
                            <span className="value">31 Jan - 01 Feb, 2026</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div className="text">
                            <span className="label">Venue</span>
                            <span className="value">NRCM, Hyderabad</span>
                        </div>
                    </div>
                </motion.div>

                <div className="hero-actions">
                    <motion.button
                        onClick={onRegisterClick}
                        className="btn btn-primary btn-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register Now
                    </motion.button>
                    <motion.a
                        href="#themes"
                        className="btn btn-secondary btn-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Themes
                    </motion.a>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

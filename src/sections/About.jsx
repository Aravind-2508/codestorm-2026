import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="gradient-text">CodeStorm</span>
                </motion.h2>
                <div className="about-content">
                    <motion.p
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        CodeStorm 2026 is a high-energy <strong>36-hour non-stop hackathon</strong> challenge designed to unleash creativity, innovation, and real-world problem-solving skills. Organized by Narsimha Reddy Engineering College (NRCM), this event brings together the brightest minds to build the future and break the limits.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;

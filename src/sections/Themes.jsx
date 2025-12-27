import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Themes.css';

const themes = [
    { icon: '🤖', title: 'Generative AI & LLM', desc: 'Build next-gen AI applications.' },
    { icon: '🚁', title: 'Robotics & Drones', desc: 'Autonomous systems and hardware.' },
    { icon: '🔒', title: 'Cybersecurity', desc: 'Threat intelligence and digital safety.' },
    { icon: '🏥', title: 'HealthTech', desc: 'MedAI and diagnostics solutions.' },
    { icon: '💰', title: 'FinTech & Blockchain', desc: 'Digital trust and decentralized finance.' },
    { icon: '🏙️', title: 'Smart Cities', desc: 'IoT and Edge Computing solutions.' },
    { icon: '🌱', title: 'Green Tech', desc: 'Energy optimization and sustainability.' },
    { icon: '🌾', title: 'Agritech', desc: 'Rural innovation and farming tech.' },
    { icon: '🚚', title: 'Logistics', desc: 'AI-driven transportation systems.' },
    { icon: '💡', title: 'Open Innovation', desc: 'Wildcard track for unique ideas.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { duration: 0.5, y: 0, opacity: 1 }
};

const Themes = () => {
    return (
        <section id="themes" className="themes-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Hackathon <span className="gradient-text">Themes</span>
                </motion.h2>
                <motion.div
                    className="themes-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {themes.map((theme, index) => (
                        <motion.div
                            className="theme-card"
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="theme-icon">{theme.icon}</div>
                            <h3>{theme.title}</h3>
                            <p>{theme.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Themes;

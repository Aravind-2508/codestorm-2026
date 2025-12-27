import React from 'react';
import { motion } from 'framer-motion';

const Organizer = () => {
    return (
        <section id="organizer" style={{ background: 'transparent', textAlign: 'center' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Organized <span className="gradient-text">By</span>
                </motion.h2>
                <motion.div
                    className="glass-panel"
                    style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: '20px' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Narsimha Reddy Engineering College</h3>
                    <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        NRMEC is committed to fostering innovation and technical excellence.
                        CodeStorm 2026 is our flagship event to empower the next generation of developers and problem solvers.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Organizer;

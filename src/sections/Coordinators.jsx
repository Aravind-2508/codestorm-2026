import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Coordinators.css';

const coordinators = [
    { name: 'Mrs. D. Nikitha Reddy', role: 'Faculty Coordinator', phone: '8125207382' },
    { name: 'Mr. G. Praveen Kumar', role: 'Faculty Coordinator', phone: '9959732146' },
    { name: 'Ms. Manepally Archana', role: 'Student Coordinator', phone: '8309734530' },
    { name: 'Mr. Tulasi Tilak', role: 'Student Coordinator', phone: '7780554004' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Coordinators = () => {
    return (
        <section id="coordinators" className="coordinators-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Event <span className="gradient-text">Coordinators</span>
                </motion.h2>

                <motion.div
                    className="coordinators-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {coordinators.map((person, index) => (
                        <motion.div
                            className="coordinator-card"
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="avatar-placeholder">{person.name.charAt(0)}</div>
                            <h3>{person.name}</h3>
                            <p className="role">{person.role}</p>
                            <a href={`tel:${person.phone}`} className="phone-btn">
                                📞 {person.phone}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Coordinators;

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Prizes.css';

const Prizes = () => {
    return (
        <section id="prizes" className="prizes-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Prize <span className="gradient-text">Pool</span>
                </motion.h2>

                <div className="prize-podium">
                    {/* Runner Up */}
                    <motion.div
                        className="prize-card side"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="trophy">🥈</div>
                        <h3>1st Runner Up</h3>
                        <p className="prize-amount">₹30,000</p>
                        <p>+ Goodies & Vouchers</p>
                    </motion.div>

                    {/* Winner */}
                    <motion.div
                        className="prize-card main"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="crown">👑</div>
                        <div className="trophy">🏆</div>
                        <h3>Winner</h3>
                        <p className="prize-amount huge">₹50,000</p>
                        <p className="highlight">Cash + Rewards</p>
                    </motion.div>

                    {/* 2nd Runner Up */}
                    <motion.div
                        className="prize-card side"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="trophy">🥉</div>
                        <h3>2nd Runner Up</h3>
                        <p className="prize-amount">₹20,000</p>
                        <p>+ Goodies & Vouchers</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Prizes;

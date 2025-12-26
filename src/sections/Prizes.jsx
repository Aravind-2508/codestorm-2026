import React from 'react';
import '../styles/Prizes.css';

const Prizes = () => {
    return (
        <section id="prizes" className="prizes-section">
            <div className="container">
                <h2 className="section-title">Prize <span className="gradient-text">Pool</span></h2>

                <div className="prize-podium">
                    {/* Runner Up */}
                    <div className="prize-card side">
                        <div className="trophy">🥈</div>
                        <h3>1st Runner Up</h3>
                        <p className="prize-amount">₹30,000</p>
                        <p>+ Goodies & Vouchers</p>
                    </div>

                    {/* Winner */}
                    <div className="prize-card main">
                        <div className="crown">👑</div>
                        <div className="trophy">🏆</div>
                        <h3>Winner</h3>
                        <p className="prize-amount huge">₹50,000</p>
                        <p className="highlight">Cash + Rewards</p>
                    </div>

                    {/* 2nd Runner Up */}
                    <div className="prize-card side">
                        <div className="trophy">🥉</div>
                        <h3>2nd Runner Up</h3>
                        <p className="prize-amount">₹20,000</p>
                        <p>+ Goodies & Vouchers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prizes;

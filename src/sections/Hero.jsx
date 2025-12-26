import React from 'react';
import '../styles/Hero.css';

const Hero = ({ onRegisterClick }) => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badgeglass">
                    <span>🚀 National Level 36-Hour Hackathon</span>
                </div>

                <h1 className="hero-title">
                    Code<span className="gradient-text">Storm</span> 2026
                </h1>

                <p className="hero-subtitle">
                    <span className="typing-text">BUILD THE FUTURE. BREAK THE LIMITS.</span>
                </p>

                <div className="hero-info-grid">
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
                </div>

                <div className="hero-actions">
                    <button onClick={onRegisterClick} className="btn btn-primary btn-lg">Register Now</button>
                    <a href="#themes" className="btn btn-secondary btn-lg">View Themes</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

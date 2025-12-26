import React from 'react';
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

const Themes = () => {
    return (
        <section id="themes" className="themes-section">
            <div className="container">
                <h2 className="section-title">Hackathon <span className="gradient-text">Themes</span></h2>
                <div className="themes-grid">
                    {themes.map((theme, index) => (
                        <div className="theme-card" key={index}>
                            <div className="theme-icon">{theme.icon}</div>
                            <h3>{theme.title}</h3>
                            <p>{theme.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;

import React from 'react';

const Organizer = () => {
    return (
        <section id="organizer" style={{ background: 'var(--color-dark)', textAlign: 'center' }}>
            <div className="container">
                <h2 className="section-title">Organized <span className="gradient-text">By</span></h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', background: '#1a1a1a', padding: '3rem', borderRadius: '20px', border: '1px solid #333' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Narsimha Reddy Engineering College</h3>
                    <p style={{ color: '#aaa', lineHeight: '1.8' }}>
                        NRMEC is committed to fostering innovation and technical excellence.
                        CodeStorm 2024 is our flagship event to empower the next generation of developers and problem solvers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Organizer;

import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#050505', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #222' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Code<span className="gradient-text">Storm</span> 2026</h2>
                <p style={{ color: '#666', marginBottom: '2rem' }}>&copy; 2026 Narsimha Reddy Engineering College. All rights reserved.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="#" style={{ color: '#888' }}>Privacy Policy</a>
                    <a href="#" style={{ color: '#888' }}>Terms of Service</a>
                    <a href="#" style={{ color: '#888' }}>Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

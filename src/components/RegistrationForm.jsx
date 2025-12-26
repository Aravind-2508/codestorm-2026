import React, { useState } from 'react';
import '../styles/Registration.css';

const RegistrationForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        teamName: '',
        leaderName: '',
        email: '',
        phone: '',
        college: '',
        teamSize: '2',
        theme: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        try {
            console.log('Sending registration request...');
            const response = await fetch('http://127.0.0.1:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Registration Successful! Check your email.' });
                setFormData({
                    teamName: '',
                    leaderName: '',
                    email: '',
                    phone: '',
                    college: '',
                    teamSize: '2',
                    theme: ''
                });
                setTimeout(() => {
                    onClose();
                    setStatus({ type: '', message: '' });
                }, 2000);
            } else {
                setStatus({ type: 'error', message: data.error || 'Registration failed.' });
            }
        } catch (error) {
            console.error('Registration Error:', error);
            if (error.name === 'AbortError') {
                setStatus({ type: 'error', message: 'Request timed out. Server is not responding.' });
            } else {
                setStatus({ type: 'error', message: `Connection failed: ${error.message}. Is the server running?` });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => { if (e.target.className.includes('modal-overlay')) onClose(); }}>
            <div className="registration-modal">
                <button className="close-modal" onClick={onClose}>&times;</button>

                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                    Team <span className="gradient-text">Registration</span>
                </h2>

                {status.message && (
                    <div className={`submission-status ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Team Name</label>
                        <input type="text" name="teamName" className="form-control" value={formData.teamName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Team Leader Name</label>
                        <input type="text" name="leaderName" className="form-control" value={formData.leaderName} onChange={handleChange} required />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>College / Institution</label>
                        <input type="text" name="college" className="form-control" value={formData.college} onChange={handleChange} required />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Team Size</label>
                            <select name="teamSize" className="form-control" value={formData.teamSize} onChange={handleChange}>
                                <option value="2">2 Members</option>
                                <option value="3">3 Members</option>
                                <option value="4">4 Members</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Preferred Theme</label>
                            <select name="theme" className="form-control" value={formData.theme} onChange={handleChange} required>
                                <option value="">Select Theme</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Robotics">Robotics</option>
                                <option value="Smart Vehicles">Smart Vehicles</option>
                                <option value="Automation">Automation</option>
                                <option value="Green Technology">Green Technology</option>
                                <option value="Blockchain">Blockchain</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="Disaster Management">Disaster Management</option>
                                <option value="Game Development">Game Development</option>
                                <option value="Open Innovation">Open Innovation</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                        {loading ? 'Registering...' : 'Submit Registration'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;

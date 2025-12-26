import React from 'react';
import '../styles/Coordinators.css';

const coordinators = [

    { name: 'Mrs. D. Nikitha Reddy', role: 'Faculty Coordinator', phone: '8125207382' },
    { name: 'Mr. G. Praveen Kumar', role: 'Faculty Coordinator', phone: '9959732146' },
    { name: 'Ms. Manepally Archana', role: 'Student Coordinator', phone: '8309734530' },
    { name: 'Mr. Tulasi Tilak', role: 'Student Coordinator', phone: '7780554004' },

];

const Coordinators = () => {
    return (
        <section id="coordinators" className="coordinators-section">
            <div className="container">
                <h2 className="section-title">Event <span className="gradient-text">Coordinators</span></h2>

                <div className="coordinators-grid">
                    {coordinators.map((person, index) => (
                        <div className="coordinator-card" key={index}>
                            <div className="avatar-placeholder">{person.name.charAt(0)}</div>
                            <h3>{person.name}</h3>
                            <p className="role">{person.role}</p>
                            <a href={`tel:${person.phone}`} className="phone-btn">
                                📞 {person.phone}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coordinators;

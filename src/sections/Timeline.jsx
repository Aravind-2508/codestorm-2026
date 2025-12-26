import React from 'react';
import '../styles/Timeline.css';

const formattedTimeline = [
    { date: '15 Jan 2026', title: 'Pitch Submission', desc: 'Submit your idea & problem statement.' },
    { date: '20 Jan 2026', title: 'Acceptance', desc: 'Announcement of shortlisted teams.' },
    { date: '31 Jan 2026', title: 'Hackathon Starts', desc: '36-Hour Non-stop coding begins at 10:00 AM.' },
    { date: '01 Feb 2026', title: 'Demo & Pitch Day', desc: 'Final presentations & judging at 07:00 PM.' },
];

const Timeline = () => {
    return (
        <section id="timeline" className="timeline-section">
            <div className="container">
                <h2 className="section-title">Event <span className="gradient-text">Timeline</span></h2>
                <div className="timeline-container">
                    {formattedTimeline.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

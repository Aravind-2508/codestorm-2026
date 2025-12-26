import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Themes from './sections/Themes';
import Timeline from './sections/Timeline';
import Prizes from './sections/Prizes';
import Coordinators from './sections/Coordinators';
import Organizer from './sections/Organizer';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  /* Registration is now handled via Google Forms */
  const openRegister = () => {
    window.open('https://forms.gle/dGLWwQUD5XcjtjuS6', '_blank');
  };

  return (
    <div className="app-container">
      <Navbar onRegisterClick={openRegister} />
      <main>
        <Hero onRegisterClick={openRegister} />
        <About />
        <Themes />
        <Timeline />
        <Prizes />
        <Coordinators />
        <Organizer />
      </main>
      <Footer />
      {/* Registration handled by Google Form */}
    </div>
  );
}

export default App;

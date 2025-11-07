import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import BeltJourney from './components/BeltJourney';
import ImageScroller from './components/Images';
import Coaches from './components/Coaches';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <AboutSection />
      <BeltJourney />
      <Coaches />
      <RegistrationForm />
      <ImageScroller />
      <Footer />
    </div>
  );
}

export default App;
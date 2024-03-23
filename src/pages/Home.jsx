import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactMe from '../components/ContactMe.jsx';

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <AboutSection />
      <ContactMe />
    </div>
  );
}

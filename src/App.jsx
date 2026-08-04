import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ThreeSteps from './components/ThreeSteps.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import AccordionFAQ from './components/AccordionFAQ.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import ContactFormSection from './components/ContactBottom.jsx';
import Footer from './components/Footer.jsx';

// Service pages
import Personal from './pages/services/Personal.jsx';
import Missing from './pages/services/Missing.jsx';
import Covert from './pages/services/Covert.jsx';
import Fraud from './pages/services/Fraud.jsx';
import Background from './pages/services/Background.jsx';
import ThankYou from './pages/ThankYou.jsx';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll to top
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ensures page scrolls to top on route change */}
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <ContactFormSection sectionId="contact" />
                <WhyChooseUs />
                <ThreeSteps />
                <ServicesGrid />
                <AccordionFAQ />
                <TestimonialSlider />
                <ContactFormSection />
              </main>
            }
          />

          {/* Single service pages */}
          <Route path="/services/personal" element={<Personal />} />
          <Route path="/services/missing" element={<Missing />} />
          <Route path="/services/covert" element={<Covert />} />
          <Route path="/services/fraud" element={<Fraud />} />
          <Route path="/services/background" element={<Background />} />
          
          {/* Thank You page */}
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

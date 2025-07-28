import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ClientLogos from './components/ClientLogos';
import ColorReference from './components/ColorReference';
import Layout from './components/Layout';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  const [showColors, setShowColors] = React.useState(false);

  // Check URL for colors page and listen for hash changes
  React.useEffect(() => {
    const checkHash = () => {
      setShowColors(window.location.hash === '#colors');
    };
    
    checkHash(); // Check initial hash
    window.addEventListener('hashchange', checkHash);
    
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <ThemeProvider>
      {showColors ? (
        <ColorReference />
      ) : (
        <Layout>
          <Header />
          <HeroSection />
          <ClientLogos />
          <FeaturesSection />
          <PricingSection />
          <BlogSection />
          <Footer />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
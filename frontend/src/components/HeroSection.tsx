import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const heroImage = '/hero-image.svg';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <section style={{ 
    display: 'flex', 
    alignItems: 'center', 
    padding: '4rem 2rem', 
    minHeight: '90vh', 
    background: 'transparent' 
  }}>
    <div style={{ flex: 1, paddingRight: '2rem' }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        margin: 0, 
        color: theme.white, 
        fontWeight: '800', 
        lineHeight: '1.1', 
        marginBottom: '1rem', 
        textShadow: `0 0 30px ${theme.primary[500]}60` 
      }}>
        Hire Top Remote Talent
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        color: theme.gray[700], 
        marginTop: '1rem', 
        lineHeight: '1.6', 
        maxWidth: '90%' 
      }}>
        Get access to our pool of handpicked, pre-vetted remote software engineers, designers, and product managers.
      </p>
      <a href="#signup" style={{ 
        display: 'inline-block', 
        marginTop: '2.5rem', 
        textDecoration: 'none', 
        color: theme.black, 
        backgroundColor: theme.success, 
        padding: '1rem 2.5rem', 
        borderRadius: '12px', 
        fontSize: '1.1rem', 
        fontWeight: '600', 
        boxShadow: `0 0 30px ${theme.success}50`, 
        transition: 'all 0.3s ease', 
        transform: 'translateY(0)' 
      }}>
        Hire Talent
      </a>
    </div>
    <div style={{ flex: 1 }}>
      <img src={heroImage} alt="Remote Talent" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  </section>
  );
};

export default HeroSection;
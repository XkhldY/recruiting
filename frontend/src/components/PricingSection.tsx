import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const PricingSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <section id="pricing" style={{ 
    padding: '5rem 2rem', 
    backgroundColor: theme.glass?.medium || 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(20px)' 
  }}>
    <h2 style={{ 
      textAlign: 'center', 
      fontSize: '2.75rem', 
      marginBottom: '4rem', 
      color: theme.primary[600], 
      fontWeight: '700', 
      textShadow: '0 1px 2px rgba(184, 114, 61, 0.2)' 
    }}>
      Pricing Plans
    </h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}>
      {/* Basic Plan */}
      <div style={{ 
        padding: '2.5rem', 
        border: `1px solid ${theme.gray[300]}`, 
        borderRadius: '16px', 
        backgroundColor: theme.white, 
        textAlign: 'center', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
        transition: 'all 0.3s ease' 
      }}>
        <h3 style={{ 
          fontSize: '1.8rem', 
          color: theme.primary[500], 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Basic
        </h3>
        <p style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: theme.gray[900], 
          marginBottom: '2rem' 
        }}>
          $19<span style={{ fontSize: '1rem', color: theme.gray[500] }}>/mo</span>
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>5 Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Basic Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Email Support</li>
        </ul>
        <a href="#signup" style={{ 
          display: 'inline-block', 
          textDecoration: 'none', 
          color: theme.primary[500], 
          border: `2px solid ${theme.primary[500]}`, 
          padding: '0.8rem 2rem', 
          borderRadius: '8px', 
          fontWeight: '600', 
          transition: 'all 0.2s ease' 
        }}>
          Choose Plan
        </a>
      </div>
      
      {/* Pro Plan */}
      <div style={{ 
        padding: '2.5rem', 
        border: `2px solid ${theme.success}`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(15px)', 
        textAlign: 'center', 
        transform: 'scale(1.05)', 
        boxShadow: '0 16px 40px rgba(56, 161, 105, 0.25)', 
        position: 'relative' 
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '-12px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          backgroundColor: theme.success, 
          color: theme.white, 
          padding: '0.5rem 1.5rem', 
          borderRadius: '20px', 
          fontSize: '0.875rem', 
          fontWeight: '600' 
        }}>
          Most Popular
        </div>
        <h3 style={{ 
          fontSize: '1.8rem', 
          color: theme.success, 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Pro
        </h3>
        <p style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: theme.gray[900], 
          marginBottom: '2rem' 
        }}>
          $49<span style={{ fontSize: '1rem', color: theme.gray[500] }}>/mo</span>
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>Unlimited Job Postings</li>
          <li style={{ marginBottom: '1rem' }}>Advanced Candidate Tracking</li>
          <li style={{ marginBottom: '1rem' }}>Priority Email Support</li>
          <li style={{ marginBottom: '1rem' }}>Interview Scheduling</li>
        </ul>
        <a href="#signup" style={{ 
          display: 'inline-block', 
          textDecoration: 'none', 
          color: theme.white, 
          backgroundColor: theme.success, 
          padding: '1rem 2.5rem', 
          borderRadius: '8px', 
          fontWeight: '600', 
          boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)', 
          transition: 'all 0.2s ease' 
        }}>
          Choose Plan
        </a>
      </div>
      
      {/* Enterprise Plan */}
      <div style={{ 
        padding: '2.5rem', 
        border: `1px solid ${theme.gray[300]}`, 
        borderRadius: '16px', 
        backgroundColor: theme.white, 
        textAlign: 'center', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
        transition: 'all 0.3s ease' 
      }}>
        <h3 style={{ 
          fontSize: '1.8rem', 
          color: theme.primary[500], 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Enterprise
        </h3>
        <p style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: theme.gray[900], 
          marginBottom: '2rem' 
        }}>
          Contact Us
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li style={{ marginBottom: '1rem' }}>All Pro Features</li>
          <li style={{ marginBottom: '1rem' }}>Dedicated Account Manager</li>
          <li style={{ marginBottom: '1rem' }}>Custom Integrations</li>
        </ul>
        <a href="#contact" style={{ 
          display: 'inline-block', 
          textDecoration: 'none', 
          color: theme.primary[500], 
          border: `2px solid ${theme.primary[500]}`, 
          padding: '0.8rem 2rem', 
          borderRadius: '8px', 
          fontWeight: '600', 
          transition: 'all 0.2s ease' 
        }}>
          Contact Sales
        </a>
      </div>
    </div>
  </section>
  );
};

export default PricingSection;
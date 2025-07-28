import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <section id="features" style={{ 
    padding: '5rem 2rem', 
    backgroundColor: theme.glass?.light || 'rgba(255, 255, 255, 0.1)', 
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
      Key Features
    </h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem' 
    }}>
      <div style={{ 
        padding: '2.5rem', 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginTop: 0, 
          color: theme.primary[500], 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Candidate Tracking
        </h3>
        <p style={{ color: theme.gray[600], lineHeight: '1.6' }}>
          Effortlessly manage your candidates from application to hire with our intuitive applicant tracking system.
        </p>
      </div>
      <div style={{ 
        padding: '2.5rem', 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginTop: 0, 
          color: theme.primary[500], 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Interview Scheduling
        </h3>
        <p style={{ color: theme.gray[600], lineHeight: '1.6' }}>
          Automate interview scheduling and coordination with candidates and your team.
        </p>
      </div>
      <div style={{ 
        padding: '2.5rem', 
        border: `1px solid rgba(203, 213, 224, 0.3)`, 
        borderRadius: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)', 
        transition: 'all 0.3s ease' 
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginTop: 0, 
          color: theme.primary[500], 
          fontWeight: '600', 
          marginBottom: '1rem' 
        }}>
          Advanced Analytics
        </h3>
        <p style={{ color: theme.gray[600], lineHeight: '1.6' }}>
          Gain insights into your recruitment process with powerful analytics and reporting.
        </p>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSection;
import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import ThemeSelector from './ThemeSelector';

const Header: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <header style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1.5rem 2rem', 
    borderBottom: `1px solid ${theme.glass?.medium || 'rgba(255, 255, 255, 0.1)'}`, 
    backgroundColor: theme.background?.secondary || theme.background?.darkSecondary || theme.gray[900], 
    backdropFilter: 'blur(20px)', 
    boxShadow: theme.shadow.lg
  }}>
    <div style={{ 
      fontSize: '1.75rem', 
      fontWeight: 'bold', 
      color: theme.primary[500], 
      textShadow: `0 0 20px ${theme.primary[500]}40` 
    }}>
      TalentFlow
    </div>
    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><a href="#features" style={{ textDecoration: 'none', color: theme.gray[700], fontWeight: '500', transition: 'all 0.2s ease' }}>Features</a></li>
        <li><a href="#pricing" style={{ textDecoration: 'none', color: theme.gray[700], fontWeight: '500', transition: 'all 0.2s ease' }}>Pricing</a></li>
        <li><a href="#blog" style={{ textDecoration: 'none', color: theme.gray[700], fontWeight: '500', transition: 'all 0.2s ease' }}>Blog</a></li>
        <li><a href="#colors" onClick={() => window.location.hash = '#colors'} style={{ textDecoration: 'none', color: theme.gray[700], fontWeight: '500', transition: 'all 0.2s ease' }}>Colors</a></li>
        <li><a href="#login" style={{ textDecoration: 'none', color: theme.gray[700], fontWeight: '500', transition: 'all 0.2s ease' }}>Login</a></li>
        <li><a href="#signup" style={{ textDecoration: 'none', color: theme.black, backgroundColor: theme.success, padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', boxShadow: `0 0 20px ${theme.success}40`, transition: 'all 0.2s ease' }}>Sign Up</a></li>
      </ul>
      <ThemeSelector />
    </nav>
  </header>
  );
};

export default Header;
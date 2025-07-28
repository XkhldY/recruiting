import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
  <footer style={{ 
    backgroundColor: theme.gray[800], 
    color: theme.gray[100], 
    padding: '4rem 2rem' 
  }}>
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '2rem' 
    }}>
      <div>
        <h4 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '1rem', 
          color: theme.white, 
          fontWeight: '600' 
        }}>
          TalentFlow
        </h4>
        <p style={{ 
          color: theme.gray[300], 
          lineHeight: 1.6 
        }}>
          The modern recruiting software to streamline your hiring process.
        </p>
      </div>
      <div>
        <h4 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '1rem', 
          color: theme.white, 
          fontWeight: '600' 
        }}>
          Quick Links
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#features" style={{ 
              textDecoration: 'none', 
              color: theme.gray[300], 
              transition: 'color 0.2s ease' 
            }}>
              Features
            </a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#pricing" style={{ 
              textDecoration: 'none', 
              color: theme.gray[300], 
              transition: 'color 0.2s ease' 
            }}>
              Pricing
            </a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#blog" style={{ 
              textDecoration: 'none', 
              color: theme.gray[300], 
              transition: 'color 0.2s ease' 
            }}>
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '1rem', 
          color: theme.white, 
          fontWeight: '600' 
        }}>
          Legal
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ 
              textDecoration: 'none', 
              color: theme.gray[300], 
              transition: 'color 0.2s ease' 
            }}>
              Privacy Policy
            </a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ 
              textDecoration: 'none', 
              color: theme.gray[300], 
              transition: 'color 0.2s ease' 
            }}>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '1rem', 
          color: theme.white, 
          fontWeight: '600' 
        }}>
          Connect With Us
        </h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: theme.gray[300], 
            transition: 'color 0.2s ease' 
          }}>
            Twitter
          </a>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: theme.gray[300], 
            transition: 'color 0.2s ease' 
          }}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div style={{ 
      textAlign: 'center', 
      marginTop: '3rem', 
      paddingTop: '1rem', 
      borderTop: '1px solid #444' 
    }}>
      <p style={{ 
        color: theme.gray[300], 
        fontSize: '0.9rem' 
      }}>
        &copy; {new Date().getFullYear()} TalentFlow. All rights reserved.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
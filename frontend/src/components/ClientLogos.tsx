import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeContext';

const ClientLogos: React.FC = () => {
  const { theme } = useTheme();
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const importLogos = async () => {
      const logoContext = require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/);
      const logoPaths = logoContext.keys();
      const loadedLogos = logoPaths.map(path => logoContext(path));
      setLogos([...loadedLogos, ...loadedLogos]);
    };

    importLogos();
  }, []);

  const slideKeyframes = `
    @keyframes slide {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    @keyframes shimmer {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
  `;

  return (
    <>
      <style>{slideKeyframes}</style>
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: theme.glass?.medium || 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${theme.glass?.medium || 'rgba(255, 255, 255, 0.2)'}`,
        margin: '2rem 0'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: theme.white,
            margin: '0 0 1rem 0',
            textShadow: `0 0 20px ${theme.primary[500]}40`
          }}>Trusted by Industry Leaders</h3>
          <p style={{
            fontSize: '1.1rem',
            color: theme.gray[300],
            margin: 0,
            opacity: 0.9
          }}>Join thousands of companies that trust TalentFlow</p>
        </div>
        <div style={{
          overflow: 'hidden',
          padding: '2rem 0',
          whiteSpace: 'nowrap',
          position: 'relative',
          background: theme.glass?.dark || 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: `1px solid ${theme.glass?.medium || 'rgba(255, 255, 255, 0.1)'}`
        }}>
          <div style={{
            display: 'inline-block',
            animation: 'slide 60s linear infinite'
          }}>
            {logos.map((logo, index) => (
              <div key={index} style={{
                display: 'inline-block',
                margin: '0 2rem',
                height: '80px',
                background: theme.glass?.light || 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '1rem',
                border: `1px solid ${theme.glass?.medium || 'rgba(255, 255, 255, 0.1)'}`,
                transition: 'all 0.3s ease'
              }}>
                <img 
                  src={logo} 
                  alt={`Client logo ${index + 1}`} 
                  style={{
                    height: '100%',
                    width: 'auto',
                    verticalAlign: 'middle',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.8,
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, ${theme.primary[500]}10, transparent)`,
            animation: 'shimmer 3s ease-in-out infinite',
            pointerEvents: 'none'
          }} />
        </div>
      </section>
    </>
  );
};

export default ClientLogos;

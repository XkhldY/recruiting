import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, themeType, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: `linear-gradient(135deg, ${theme.primary[500]}, ${theme.primary[600]})`,
          color: theme.white,
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: theme.shadow.md,
        }}
      >
        🎨 {availableThemes.find(t => t.key === themeType)?.name}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '0.5rem',
          background: theme.themeType === 'cyberpunk' ? theme.background.secondary : theme.white,
          border: `1px solid ${theme.gray[200]}`,
          borderRadius: '12px',
          boxShadow: theme.shadow.xl,
          overflow: 'hidden',
          zIndex: 1000,
          minWidth: '250px',
        }}>
          {availableThemes.map((themeOption) => (
            <button
              key={themeOption.key}
              onClick={() => {
                setTheme(themeOption.key);
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                background: themeType === themeOption.key 
                  ? `linear-gradient(135deg, ${theme.primary[500]}20, ${theme.primary[600]}10)`
                  : 'transparent',
                color: theme.themeType === 'cyberpunk' ? theme.gray[800] : theme.gray[800],
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.875rem',
              }}
              onMouseEnter={(e) => {
                if (themeType !== themeOption.key) {
                  e.currentTarget.style.background = `${theme.primary[500]}10`;
                }
              }}
              onMouseLeave={(e) => {
                if (themeType !== themeOption.key) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                {themeOption.name} {themeType === themeOption.key && '✓'}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: theme.themeType === 'cyberpunk' ? theme.gray[600] : theme.gray[500],
                lineHeight: '1.4'
              }}>
                {themeOption.description}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, themeType } = useTheme();

  const getBackgroundStyle = () => {
    switch (themeType) {
      case 'dark':
        return {
          background: `
            radial-gradient(circle at 25% 25%, ${theme.primary[500]}25 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${theme.accent[500]}20 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, ${theme.primary[600]}15 0%, transparent 50%),
            linear-gradient(135deg, ${theme.background.darkPrimary} 0%, ${theme.background.darkSecondary} 50%, ${theme.background.dark} 100%)
          `,
          color: theme.gray[100],
        };
      case 'warm':
        return {
          background: `
            radial-gradient(circle at 25% 30%, rgba(184, 114, 61, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 75% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(160, 87, 47, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, ${theme.background.light} 0%, ${theme.background.cream} 30%, ${theme.background.warm} 100%)
          `,
          color: theme.gray[800],
        };
      case 'cyberpunk':
        return {
          background: `
            radial-gradient(circle at 25% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 75% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, ${theme.background.darker} 0%, ${theme.background.dark} 30%, ${theme.background.primary} 100%)
          `,
          color: theme.gray[800],
        };
      default:
        return {
          background: theme.background.light,
          color: theme.gray[800],
        };
    }
  };

  return (
    <div style={{
      ...getBackgroundStyle(),
      minHeight: '100vh',
      position: 'relative',
      backgroundAttachment: 'fixed'
    }}>
      {children}
    </div>
  );
};

export default Layout;
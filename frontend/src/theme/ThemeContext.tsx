import React, { createContext, useContext, useState } from 'react';
import { darkTheme, warmTheme, cyberpunkTheme, Theme } from './themes';

export type ThemeType = 'dark' | 'warm' | 'cyberpunk';

interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setTheme: (theme: ThemeType) => void;
  availableThemes: { name: string; key: ThemeType; description: string }[];
}

const themes: Record<ThemeType, Theme> = {
  dark: darkTheme,
  warm: warmTheme,
  cyberpunk: cyberpunkTheme,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('dark');

  const availableThemes = [
    { name: 'Dark', key: 'dark' as ThemeType, description: 'Modern dark theme with purple accents' },
    { name: 'Warm', key: 'warm' as ThemeType, description: 'Cozy earth tones with brown and orange' },
    { name: 'Cyberpunk', key: 'cyberpunk' as ThemeType, description: 'Ultra-dark with electric neon accents' },
  ];

  const value: ThemeContextType = {
    theme: themes[themeType],
    themeType,
    setTheme: setThemeType,
    availableThemes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
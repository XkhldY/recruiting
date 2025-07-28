// Dark Theme (Original)
export const darkTheme = {
  primary: {
    50: '#F0F4FF',
    100: '#E0E7FF', 
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',  // Main brand color
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81'
  },
  
  accent: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0', 
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',  // Main accent
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D'
  },
  
  gray: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1', 
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917'
  },

  background: {
    light: '#FAFBFF',
    dark: '#0F0F23',
    darkPrimary: '#1A1B2E',
    darkSecondary: '#16213E',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  
  success: '#10B981',
  warning: '#F59E0B', 
  error: '#EF4444',
  info: '#3B82F6',
  
  glass: {
    light: 'rgba(255, 255, 255, 0.25)',
    medium: 'rgba(255, 255, 255, 0.15)',
    dark: 'rgba(255, 255, 255, 0.05)',
    backdrop: 'rgba(16, 24, 40, 0.6)'
  },
  
  white: '#FFFFFF',
  black: '#000000',
  
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)'
  }
} as const;

// Warm Theme
export const warmTheme = {
  primary: {
    50: '#FDF7F0',
    100: '#F7E6D3',
    200: '#F1D5B7',
    300: '#E8B885',
    400: '#D4935C',
    500: '#B8723D',
    600: '#A0572F',
    700: '#8B4513',
    800: '#7A3E11',
    900: '#5D2F0C'
  },
  
  accent: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F'
  },
  
  gray: {
    50: '#FEFCF9',
    100: '#F9F6F2',
    200: '#F0EAE2',
    300: '#D6C7B8',
    400: '#A3927A',
    500: '#8B7355',
    600: '#6B5B47',
    700: '#4A3F35',
    800: '#332A23',
    900: '#1F1814'
  },
  
  background: {
    light: '#FEFCF9',
    cream: '#F9F6F2',
    warm: '#F0EAE2',
    dark: '#332A23'
  },
  
  success: '#16A34A',
  warning: '#EA580C',
  error: '#DC2626',
  info: '#0EA5E9',
  
  glass: {
    light: 'rgba(255, 255, 255, 0.25)',
    medium: 'rgba(255, 255, 255, 0.15)',
    dark: 'rgba(255, 255, 255, 0.05)',
    backdrop: 'rgba(16, 24, 40, 0.6)'
  },
  
  white: '#FFFFFF',
  black: '#1F1814',
  
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(184, 114, 61, 0.3)'
  }
} as const;

// Ultra-Dark Cyberpunk Theme
export const cyberpunkTheme = {
  primary: {
    50: '#0A0A0F',
    100: '#131318',
    200: '#1C1C23',
    300: '#252530',
    400: '#2F2F3E',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81'
  },
  
  accent: {
    50: '#0F0A1A',
    100: '#1A0F2E',
    200: '#2A1A4A',
    300: '#3D2463',
    400: '#533080',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95'
  },
  
  gray: {
    50: '#0A0A0A',
    100: '#141414',
    200: '#1F1F1F',
    300: '#2A2A2A',
    400: '#404040',
    500: '#525252',
    600: '#737373',
    700: '#A3A3A3',
    800: '#D4D4D4',
    900: '#F5F5F5'
  },
  
  background: {
    dark: '#0A0A0A',
    darker: '#050505',
    primary: '#0F0F0F',
    secondary: '#141414',
    accent: '#1A1A1A'
  },
  
  success: '#00FF88',
  warning: '#FF6B00',
  error: '#FF0055',
  info: '#00CCFF',
  
  glass: {
    dark: 'rgba(255, 255, 255, 0.03)',
    medium: 'rgba(255, 255, 255, 0.06)',
    light: 'rgba(255, 255, 255, 0.10)',
    glow: 'rgba(99, 102, 241, 0.15)'
  },
  
  white: '#FFFFFF',
  black: '#000000',
  
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(99, 102, 241, 0.5)'
  }
} as const;

export type Theme = typeof darkTheme;
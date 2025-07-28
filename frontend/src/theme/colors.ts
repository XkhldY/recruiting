export const colors = {
  // Modern Primary Brand Colors (Deep Purple-Blue)
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
  
  // Vibrant Accent Colors (Electric Green)
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
  
  // Sophisticated Neutrals (Warm Grays)
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

  // Background Gradients
  background: {
    light: '#FAFBFF',
    dark: '#0F0F23',
    darkPrimary: '#1A1B2E',
    darkSecondary: '#16213E',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  
  // Semantic Colors
  success: '#10B981',
  warning: '#F59E0B', 
  error: '#EF4444',
  info: '#3B82F6',
  
  // Glass Morphism
  glass: {
    light: 'rgba(255, 255, 255, 0.25)',
    medium: 'rgba(255, 255, 255, 0.15)',
    dark: 'rgba(255, 255, 255, 0.05)',
    backdrop: 'rgba(16, 24, 40, 0.6)'
  },
  
  // Pure Colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Modern Shadows
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)'
  }
} as const;

export type Colors = typeof colors;
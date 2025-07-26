export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#EDF2F7',
    100: '#E2E8F0',
    500: '#4A5568',
    600: '#2D3748',
    900: '#1A202C'
  },
  
  // Accent Colors
  accent: {
    50: '#FFF5F0',
    100: '#FED7D7',
    500: '#E53E3E',
    600: '#C53030',
  },
  
  // Success/Action Colors
  success: '#38A169',
  warning: '#D69E2E',
  
  // Neutral Colors
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    300: '#CBD5E0',
    500: '#718096',
    700: '#4A5568',
    900: '#1A202C'
  },
  
  // Semantic Colors
  white: '#FFFFFF',
  black: '#000000'
} as const;

export type Colors = typeof colors;
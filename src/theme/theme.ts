import { createTheme } from '@mui/material/styles';

// Material Design 3 Color Tokens
const md3Colors = {
  primary: {
    main: '#2563eb', // Blue 600
    light: '#60a5fa', // Blue 400
    dark: '#1d4ed8', // Blue 700
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#14b8a6', // Teal 500
    light: '#5eead4', // Teal 300
    dark: '#0f766e', // Teal 700
    contrastText: '#ffffff',
  },
  tertiary: {
    main: '#8b5cf6', // Violet 500
    light: '#c4b5fd', // Violet 300
    dark: '#7c3aed', // Violet 600
    contrastText: '#ffffff',
  },
  error: {
    main: '#dc2626', // Red 600
    light: '#f87171', // Red 400
    dark: '#b91c1c', // Red 700
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f59e0b', // Amber 500
    light: '#fbbf24', // Amber 400
    dark: '#d97706', // Amber 600
    contrastText: '#000000',
  },
  success: {
    main: '#16a34a', // Green 600
    light: '#4ade80', // Green 400
    dark: '#15803d', // Green 700
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

// Create Material Design 3 Theme
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: md3Colors.primary,
    secondary: md3Colors.secondary,
    error: md3Colors.error,
    warning: md3Colors.warning,
    success: md3Colors.success,
    grey: md3Colors.grey,
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: md3Colors.grey[900],
      secondary: md3Colors.grey[600],
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

// Dark theme variant
export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa', // Blue 400
      light: '#93c5fd', // Blue 300
      dark: '#3b82f6', // Blue 500
      contrastText: '#000000',
    },
    secondary: {
      main: '#5eead4', // Teal 300
      light: '#99f6e4', // Teal 200
      dark: '#2dd4bf', // Teal 400
      contrastText: '#000000',
    },
    background: {
      default: '#0f172a', // Slate 900
      paper: '#1e293b', // Slate 800
    },
    text: {
      primary: '#f1f5f9', // Slate 100
      secondary: '#cbd5e1', // Slate 300
    },
  },
});
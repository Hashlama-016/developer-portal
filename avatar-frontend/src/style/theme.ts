import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5865F2', // Primary color
    },
    secondary: {
      main: '#1976D2', // Secondary color
    },
    background: {
      default: '#121212', // Dark background
      paper: 'rgba(255, 255, 255, 0.05)', // Card background
    },
    text: {
      primary: '#E0E0E0', // Primary text color
      secondary: '#B0B0B0', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
  },
  spacing: 8, 
});

export default theme;
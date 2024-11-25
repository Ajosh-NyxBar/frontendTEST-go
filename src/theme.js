import { extendTheme } from '@chakra-ui/react';

// Define your custom theme
const theme = extendTheme({
  colors: {
    primary: {
      50: '#e0f2f1',
      100: '#b2dfdb',
      200: '#80cbc4',
      300: '#4db6ac',
      400: '#26a69a',
      500: '#009688', // Your primary color
      600: '#00897b',
      700: '#00796b',
      800: '#00695c',
      900: '#004d40',
    },
    secondary: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0', // Your secondary color
    },
    accent: {
      500: '#f44336', // Accent color (for buttons, highlights, etc.)
    }
  },
});

export default theme;

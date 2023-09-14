
import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
    
  colors: {
    primary: {
      100: '#E6F7FF',
      greyText: 'rgb(156 163 175)',
      white: '#fff',
      black: '#000',
      gray: '#808080',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    
  },
  fontSizes: { 
    font22px: '22px',
    font18px: '18px',
    font14px: '14px',
    font32px: '32px',   
  },
  fontWeights: {
    light: '100',
    normal: '400',
    bold: '600', 
  }
});

export default Theme;

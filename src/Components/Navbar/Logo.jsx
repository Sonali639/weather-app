import React from 'react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import logo from '../../images/logo.png';
import logodark from '../../images/logoblack.png';

function Logo() {
  const imgSrc = useColorModeValue(logo, logodark);

  return (
    <Box sx={{ color: 'black' }}>
      <h4>
        <img src={imgSrc} alt="Logo" width="140px" />
      </h4>
    </Box>
  );
}

export default Logo;

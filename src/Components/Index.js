import React from 'react'
import { Box, } from '@chakra-ui/react'
import Navbar from './Navbar/Navbar';
import AllCards from './WeatherCards/AllCards';
import { Container } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/color-mode";


function Index() {
  const bg = useColorModeValue("#f3f4f6");
  const color = useColorModeValue("black", "darkwhite");
  return (
    <Box sx={{ backgroundColor: bg, color:color }}>
      <Container maxW="94%" >
        <Navbar />

        <AllCards />
      </Container>
    </Box>
  )
}

export default Index

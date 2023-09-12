import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar/Navbar';
import AllCards from './WeatherCards/AllCards';
import { Container } from '@chakra-ui/react'

function Index() {
  return (
    <Box>
     <Container maxW="94%" >
      <Navbar />
      <AllCards />
      </Container>
    </Box>
  )
}

export default Index

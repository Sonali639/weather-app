import React from 'react'
import { Box } from '@chakra-ui/react'
import { HiOutlineMoon } from 'react-icons/hi2';
import { Button, ButtonGroup } from '@chakra-ui/react'

function Buttons() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button mx={3} fontSize='20px' px={3} py={4} colorScheme='black' size='sm' sx={{ borderRadius: '50px', backgroundColor: 'black', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}>
    °C
  </Button>
  <Button px={3} mr={6} fontSize='20px' py={4} colorScheme='gray' size='sm' sx={{ borderRadius: '50px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}>
    °F
  </Button>
  <Box ml={3}>
    <HiOutlineMoon size={25} />
  </Box>
    </Box>
  )
}

export default Buttons

import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import { Box, Divider,Flex ,Grid, GridItem } from '@chakra-ui/react'
import Logo from './Logo';
import {Buttons} from './Buttons';

import { SearchBar } from './Searchbar';


function Navbar() {




  return (
  
    <Box sx={{ bgcolor: 'green', py: 2 }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 5 }}>
        
        <Logo />
        <Box   display={{ base: 'none', md: 'block' }}>
          <SearchBar />
        </Box>

        <Buttons />
      </Box>
      <Divider />
    </Box>
   
    
  )
}


export { Navbar}

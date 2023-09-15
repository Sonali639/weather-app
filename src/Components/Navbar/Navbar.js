import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import { Box, Divider,Flex ,Grid, GridItem } from '@chakra-ui/react'
import Logo from './Logo';
import Buttons from './Buttons';

import { SearchBar } from './Searchbar';


function Navbar() {




  return (
  
    <Box sx={{ bgcolor: 'green', py: 2 }}>
<Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} py={5}>
  <GridItem colEnd={{ base: 3, md: 1 }} w={{ base: '100%', md: 'auto' }} > {/* Set auto width on medium screens */}
    <Logo />
  </GridItem>
  <GridItem w='100%' colStart={{ base: 2, md: 2 }}> 
    <SearchBar />
  </GridItem>
  <GridItem w='100%' colStart={{ base: 2, md: 4 }} colEnd={{ base: 0, md: 6 }}> 
    <Buttons />
  </GridItem>
</Grid>

      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 5 }}>
        
        <Logo />
        <Box>
          <SearchBar />
        </Box>

        <Buttons />
      </Box> */}
      <Divider />
    </Box>
   
    
  )
}


export { Navbar}

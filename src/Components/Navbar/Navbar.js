import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Logo from './Logo';
import Buttons from './Buttons';

import { SearchBar } from './Searchbar';


function Navbar() {

  return (

    <Box sx={{ bgcolor: 'green', py: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
<Logo/>

        <Box>
          <SearchBar />
        </Box>

        <Buttons />
      </Box>
    </Box>
  )
}

export default Navbar

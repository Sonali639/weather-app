import React from 'react'
import { Box } from '@chakra-ui/react'
import TodayCard from './TodayCard'
import { Grid, GridItem } from '@chakra-ui/react'
import WeekCard from './WeekCard'
import Highlights from './Highlights'

function AllCards() {
  return (
    <Box>

<Grid templateColumns="repeat(12, 1fr)" gap={6}>
  <GridItem colSpan={4} bg="blue.500" h="100%" border='1px solid white' borderRadius='25px'>
    <TodayCard/>
    </GridItem>

  <GridItem colSpan={8} bg="white.500" h="500px" >
<WeekCard/>
<Highlights/>
  </GridItem>

  
</Grid>

        </Box>
  )
}

export default AllCards

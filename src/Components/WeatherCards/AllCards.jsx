import React from 'react'
import { Box } from '@chakra-ui/react'
import TodayCard from './TodayCard'
import { Grid, GridItem } from '@chakra-ui/react'

function AllCards() {
  return (
    <Box>

<Grid templateColumns="repeat(12, 1fr)" gap={6}>
  <GridItem colSpan={4} bg="blue.500" h="100%" >
    <TodayCard/>
    </GridItem>
  <GridItem colSpan={8} bg="blue.500" h="500px" />
</Grid>

        </Box>
  )
}

export default AllCards

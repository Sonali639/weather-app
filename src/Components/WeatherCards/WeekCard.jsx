import React from 'react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"


function WeekCard() {
    const itemsToRender = [1, 2, 3, 4, 5];
  return (
  <Box pt={10}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {itemsToRender.map((item, index) => (
        <GridItem key={index} w='100%' h='40' bg='gray.500' py={5} borderRadius='12px'  sx={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', transition: 'margin 0.2s ease-in-out', // Add a transition for smooth hover effect
            ':hover': {
              marginTop: '16px', // Add margin on hover
            },
          }}>
          Wed {item} <br />22 c
        </GridItem>
      ))}
</Grid>
  </Box>
  )
}

export default WeekCard

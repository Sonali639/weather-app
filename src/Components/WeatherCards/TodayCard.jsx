import { Box } from '@chakra-ui/react'
import React from 'react'

function TodayCard() {
  return (
    <Box>
        <h1>TodayCard</h1>

        <Box sx={{display:'flex', justifyContent: 'space-between' }}>
            <Box>
                <h1>Dehradun</h1>
            </Box>

            <Box>
                <h1>Monday , oct 7</h1>
            </Box>
        </Box>
    </Box>
  )
}

export default TodayCard

import { Box , flex} from '@chakra-ui/react'
import React from 'react'
import { Divider } from '@chakra-ui/react'
import { TiWeatherCloudy } from 'react-icons/ti';
import { AiOutlineClockCircle } from 'react-icons/ai';
function TodayCard() {
  return (
    <Box px={6} py={10} sx={{textAlign:'left'}}>
       <Box fontSize='52px'>12°C</Box>
        <Box display='flex' sx={{ justifyContent: 'space-between' }}>
         
            <Box>
                <h1>Dehradun</h1>
            </Box>

            <Box>
                <h1>Monday , oct 7</h1>
            </Box>
        </Box>
        <Divider py={2}/>
    <h4 sx={{display:'flex'}}><TiWeatherCloudy/>  Patchy Drizzle Day</h4>
    <h1 sx={{display:'flex'}} ><AiOutlineClockCircle/> 25°C</h1>
      
    </Box>
  )
}

export default TodayCard

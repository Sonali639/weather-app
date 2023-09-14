import React from "react";
import { Box } from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";
import WeekCardGrid from "./WeekCardGrid";
import CardDataSlider from "./CardDataSlider";
import { SlideData } from "./SlideData";

function WeekCard(props) {
  
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });
      
  return (
    <Box pt={10}>


{isSmallScreen ? (
 <Box w="100%" p={4} color="white">
 <CardDataSlider slides={SlideData} forecastday={props.forecastday} />
</Box>
) : (
  <Box>
    <WeekCardGrid forecastday={props.forecastday}/>
    </Box>
)}

    </Box>
  );
}




export {WeekCard};

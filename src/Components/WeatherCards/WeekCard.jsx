import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";
import WeekCardGrid from "./WeekCardGrid";
import CardDataSlider from "./CardDataSlider";


function WeekCard(props) {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
const color = useColorModeValue("white", "gray.800");
  return (
    <Box pt={10}>
      {isSmallScreen ? (
        <Box w="100%" p={4} color={color}>
          <CardDataSlider  forecastday={props.forecastday} />
        </Box>
      ) : (
        <Box>
          <WeekCardGrid forecastday={props.forecastday} />
        </Box>
      )}
    </Box>
  );
}

export { WeekCard };

import { Box, flex } from "@chakra-ui/react";
import React from "react";
import { Divider } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { TiWeatherCloudy } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
function TodayCard(props) {
  const d = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = daysOfWeek[d.getDay()];

  const dayOfMonth = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "long" });
  return (
    <Box px={6} py={10} sx={{ textAlign: "left" }}>

<img src="" alt="" srcset={props.condition.icon} />

      <Box fontSize="52px" py={3} fontWeight="light">
        {props.temp_c}°C
      </Box>
      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Box fontSize="font18px" fontWeight="bold">
            {day} , <span fontWeight="light">{dayOfMonth} {month}</span>{" "}
          </Box>
        </Box>
        <Box>
          <Box
            fontFamily="heading"
            fontSize="font22px"
            fontWeight="bold"
            display="flex"
          >
            <CiLocationOn />
            {props.name}
          </Box>
        </Box>
      </Box>
      <Divider py={2} />
      <Box display="flex" pt={5} pb={3}>
        <TiWeatherCloudy /> &nbsp; {props.condition.text} 
      </Box>
      <Box display="flex">
        <AiOutlineClockCircle /> &nbsp; 15:45
      </Box>
    </Box>
  );
}

export default TodayCard;

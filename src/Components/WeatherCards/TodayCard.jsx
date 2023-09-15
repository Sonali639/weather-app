import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Divider } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { TiWeatherCloudy } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import fog from "../../gifs/fog.gif";
import { useSelector } from "react-redux";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { SearchBar } from "../Navbar/Searchbar";
import { CelFarBtns } from "../Navbar/Buttons";
import PartialCloudy from "../../images/weather/cloudy-sun.png"
import ModerateRain from "../../images/weather/light-rain.png"
import patchyrain from "../../images/weather/patchy-rain.png"

function TodayCard(props) {
  const temp = useSelector((state) => state.temp);

const weatherimg=[
  {
    "weather": "Partly cloudy",
    "icon": PartialCloudy
  },
  {
    "weather": "Moderate rain",
    "icon": ModerateRain
  },
  {
    "weather": "Patchy rain possible",
    "icon": fog
  }
]
  const d = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[d.getDay()];

  const dayOfMonth = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const colorText = useColorModeValue("black", "white");
  return (
    <Box px={6} py={10} sx={{ textAlign: "left" }}>
      {/* <img src="" alt=""  srcset={props.condition.icon} /> */}
      <SearchBar todisplay={true} />

      {weatherimg.map((item, index) => {
  if (item.weather === props.condition.text) {
    return (
      <img
        src={item.icon}
        alt={props.condition.text}
        width="80%"
        key={index} 
      />
    );
  } else {
    return null; 
  }
})}


      <Box fontSize="52px" py={3} fontWeight="light">
        {temp ? `${props.temp_c}°C` : `${props.temp_f}°F`}
      </Box>

      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Box fontSize="font18px" fontWeight="bold" sx={{ color: colorText }}>
            {day} , <br />{" "}
            <span fontWeight="light">
              {dayOfMonth} {month}
            </span>{" "}
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

      <CelFarBtns smbtnVisible={true}/>
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

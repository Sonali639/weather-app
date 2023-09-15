
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { useColorModeValue } from "@chakra-ui/color-mode";

import {  GridItem,Text } from "@chakra-ui/react";



// If you want to use your own Selectors look up the Advancaed Story book examples
const CardDataSlider = (props) => {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const temp = useSelector((state) => state.temp);


  const bg = useColorModeValue("white","#3b3f4b");
  const color = useColorModeValue("black","white");
  return (
    <Carousel infiniteLoop autoPlay className="custom-carousel" >
      {props.forecastday.map((item,index) => {
         const dayIndex = (currentDayIndex + index) % 7;
         const dayName = daysOfWeek[dayIndex];
        return (
          <GridItem
            key={index}
            w="100%"
            color={color}
            bg={bg}
            py={5}
            borderRadius="12px"
            sx={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              transition: "margin 0.2s ease-in-out",
              ":hover": {
                marginTop: "16px",
              },
            }}
          >
            <Text fontWeight='bold'>{dayName}</Text>
            <img
  src={item.day.condition.icon}
  alt=""
  srcSet={item.day.condition.icon}
  style={{
    display: "block",
    margin: "0 auto",
    width: "100px", // Adjust the width to your desired size
    height: "100px", // Adjust the height to your desired size
  }}
/>

            <Text fontSize="22px">  {temp
  ? `${item.hour[0].temp_c} °C`
  : `${item.hour[0].temp_f} °F`
  }
  </Text>
            <Text fontSize="14px" color={color}>{item.day.condition.text}</Text>
          </GridItem>
        );
      })}
    </Carousel>
  );
};

export default CardDataSlider;

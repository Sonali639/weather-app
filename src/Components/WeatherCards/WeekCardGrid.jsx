import React from 'react'
import { Box } from "@chakra-ui/react";
import { Grid, GridItem,Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useColorModeValue } from "@chakra-ui/color-mode";

function WeekCardGrid(props) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const temp = useSelector((state) => state.temp);


    const bg = useColorModeValue("white","#3b3f4b");

  return (
  
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 2fr)" }}  gap={3}>
    {props.forecastday.map((item, index) => {
              const dayIndex = (currentDayIndex + index) % 7;
              const dayName = daysOfWeek[dayIndex];
      return (
        <GridItem
          key={index}
          w="100%"
          h="200px"
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
            style={{ display: "block", margin: "0 auto" }}
          />
          <Text fontSize="22px">  {temp
? `${item.hour[0].temp_c} °C`
: `${item.hour[0].temp_f} °F`
}
</Text>
          <Text fontSize="14px">{item.day.condition.text}</Text>
        </GridItem>
      );
    })}
  </Grid>

  )
}

export default WeekCardGrid

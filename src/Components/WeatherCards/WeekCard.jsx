import React from "react";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem,Text } from "@chakra-ui/react";

function WeekCard(props) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
      
  return (
    <Box pt={10}>
        
      <Grid templateColumns="repeat(5, 2fr)" gap={3}>
        {props.forecastday.map((item, index) => {
                  const dayIndex = (currentDayIndex + index) % 7;
                  const dayName = daysOfWeek[dayIndex];
        

          return (
            <GridItem
              key={index}
              w="100%"
              h="200px"
              bg="primary.white"
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
              <Text fontSize="22px">{item.hour[0].temp_c}°C</Text>
              <Text fontSize="14px">{item.day.condition.text}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default WeekCard;

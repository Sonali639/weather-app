import React from "react";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem,Text } from "@chakra-ui/react";

function WeekCard(props) {

  return (
    <Box pt={10} >
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {props.forecastday.map((item, index) => (
          <GridItem
            key={index}
            w="100%"
            h="40"
            bg="primary.white"
            py={5}
            borderRadius="12px"
            sx={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              transition: "margin 0.2s ease-in-out", // Add a transition for smooth hover effect
              ":hover": {
                marginTop: "16px", // Add margin on hover
              },
            }}
          >
            <img src="" alt="" srcset={item.day.condition.icon}   style={{ display: "block", margin: "0 auto" }} />
        <Text fontSize='font22px'> {item.hour[0].temp_c}°C </Text>
        <Text fontSize='font14px'>  {item.day.condition.text} </Text>
        
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default WeekCard;

import React from "react";
import { Box,Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import wind from "../../images/wind.jpg"
import humidity from "../../images/humidity.png"
import visibility from "../../images/visibility.png"
import airQuality from "../../images/airquality.jpg"
import sunrise from "../../images/uv.png"


function Highlights() {

  return (
    <Box pt={16}>
      <Box fontSize="20px" align="left" pb={3}>
        Today's Highlights
      </Box>
     
        <HighlightsMap />
      
    </Box>
  );
}




function HighlightsMap(props) {
  const itemsToRender = [
    {
      name: "UV Index",
      key: "uv",
      img: sunrise
    },
    {
      name: "Wind Status",
      key: "wind_kph",
      img: wind
        },
    {
      name: "Humidity",
      key: "humidity",
      img: humidity
    },
    {
      name: "Visibility",
      key: "vis_km",
        img: visibility
    },
    {
      name: "Air Quality",
      key: "air_quality",
      img:airQuality
     },
    {
      name: "Sunrise & Sunset",
      key: "sunrise",
    },
  ];
  return (
    <Box>
       <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}  gap={6}>
      {itemsToRender.map((item, index) => (
          <GridItem
            key={index}
            w="100%"
          
            bg="primary.white"
            py={5}
            borderRadius="12px"
            sx={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              textAlign: "left",
            }}
          >
            <Box pl={6} color="primary.greyText">
              {item.name}
            </Box>
            
            <img
              src={item.img}
              alt=""
             
              srcSet=""
              width="34%"
              style={{ display: "block", margin: "0 auto",paddingTop:"14px" }}
            />
         <Text fontSize="32px" textAlign="center" pt={3}>
      {props[item.key]}
    </Text>
          </GridItem>
        ))}
        </Grid>
    </Box>
  )
}

export { Highlights, HighlightsMap };

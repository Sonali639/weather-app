import React from "react";
import { Box, Text,Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import wind from "../../images/wind.png";
import humidity from "../../images/humidity.png";
import visibility from "../../images/visibility.png";
import airQuality from "../../images/airquality.png";
import sunrise from "../../images/uv.png";
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { useColorModeValue } from "@chakra-ui/color-mode";

function Highlights(props) {
  return (
    <Box pt={16}>
      <Box fontSize="20px" align="left" pb={3}>
        Today's Highlights
      </Box>

      <HighlightsMap {...props}  />
    </Box>
  );
}

function HighlightsMap(props) {
  
  const bg = useColorModeValue("white","#3b3f4b");
  const itemsToRender = [
    {
      name: "UV Index",
      key: "uv",
      img: sunrise,
    },
    {
      name: "Wind Status",
      key: "wind_kph",
      img: wind,
    },
    {
      name: "Humidity",
      key: "humidity",
      img: humidity,
    },
    {
      name: "Visibility",
      key: "vis_km",
      img: visibility,
    },
    {
      name: "Air Quality",
      key: "no2",
      img: airQuality,
    },
    {
      name: "Sunrise & Sunset",
      key1: "sunrise",
      key2: "sunset",
      img1: sun,
      img2: moon,
    },
  ];
  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        {itemsToRender.map((item, index) => (
          <GridItem
            key={index}
            w="100%"
            bg={bg}
            pt={5}
            pb={5}
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
              width={item.img1 ? "16%" : "30%"}
              style={{
                display: "block",
                margin: item.img1 ? "0px" : "0 auto",

                paddingTop: item.img1 ? "24px" : "14px",
                marginLeft: item.img1 ? "20px" : "auto",
              }}
            />
     

{
  item.name === "Sunrise & Sunset" ? (
    <Box pl={["4","8"]}>
<Flex direction="row">
<img src="" alt=""  srcset={item.img1} width="18%"/>
<Text fontSize="18px" textAlign="center" pt={3} pl={["2", "5"]}>{props.sunSetRise[item.key1]}</Text>
</Flex >
<Flex direction="row" pt={5} >
<img src="" alt="" srcset={item.img2} width="18%"/>
<Text fontSize="18px" textAlign="center" pt={3} pl={["2","5"]}>{props.sunSetRise[item.key2]}</Text>
</Flex >
    </Box>
  ) : null
}
            <Text fontSize="32px" textAlign="center" pt={3}>
              {props[item.key]}{props.aqi[item.key]}
             
            <br />
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export { Highlights, HighlightsMap };

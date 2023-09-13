import React from "react";
import { Box,Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function Highlights(props) {
  console.log(props);
  const itemsToRender = [
    {
      name: "UV Index",
      key: "uv",
      img: "https://weather.baronsa.dev/uv.png",
    },
    {
      name: "Wind Status",
      key: "wind_kph",
      img: "https://media.istockphoto.com/id/1368763816/vector/wind-blow-vector-icon-air-puff-symbol.jpg?s=1024x1024&w=is&k=20&c=XYawUGZz7xqfRnCiO5rh6queiHI8fd_rat3lHXQLOf8=",
    },
    {
      name: "Humidity",
      key: "humidity",
      img: "https://cdn.vectorstock.com/i/1000x1000/45/10/humidity-icon-vector-17374510.webp",
    },
    {
      name: "Visibility",
      key: "vis_km",
        img: "https://cdn-icons-png.flaticon.com/512/4005/4005908.png",
    },
    {
      name: "Air Quality",
      key: "air_quality",
      img:'https://media.istockphoto.com/id/1256527934/vector/air-quality-index-educational-scheme-with-excessive-quantities-of-substances-or-gases-in.jpg?s=612x612&w=0&k=20&c=vx4E-KMNVGwXLz7CQaziOSotMHDMa0_6CRnDazYdHEM='
    },
    {
      name: "Sunrise & Sunset",
      key: "sunrise",
    },
  ];

  return (
    <Box pt={16}>
      <Box fontSize="20px" align="left" pb={3}>
        Today's Highlights
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
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
              style={{ display: "block", margin: "0 auto" }}
            />
         <Text fontSize="32px" textAlign="center" pt={3}>
      {props[item.key]}
    </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Highlights;

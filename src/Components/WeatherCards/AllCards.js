import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import TodayCard from './TodayCard'
import { Grid, GridItem, Flex } from '@chakra-ui/react'
import { WeekCard } from './WeekCard'
import { Highlights } from './Highlights'
import axios from 'axios'
import { useColorModeValue } from "@chakra-ui/color-mode";
import Loading from '../Animation/loading';
import { useSelector } from 'react-redux';

function AllCards() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [time, setTime] = useState('12:00');

  const inputloc = useSelector((state) => state.location.location);
  console.log(inputloc);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=${inputloc}&days=5&hour=12&alerts=yes&aqi=yes`);
        setWeatherData(res.data);
        setCity(res.data.location.name);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        alert("Location not found!😥 Please enter a valid location.");
      }
    }
    getData();
  }, [inputloc]);
  
  const bg = useColorModeValue("white", "#3b3f4b");
  const border = useColorModeValue("1px solid white", "1px solid #3b3f4b");

  return (
    !weatherData ? (<Loading />) :
      (

        <Box pt={5}>

          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={{ base: 12, md: 4 }} bg={bg} h="100%" border={border} borderRadius='25px'>
              <TodayCard {...weatherData.current} name={city} region={weatherData.location} alerts={weatherData.alerts.alert} />
            </GridItem>

            <GridItem colSpan={{ base: 12, md: 8 }} bg="white.500" h="500px" >
              <WeekCard {...weatherData.forecast} />
              <Highlights {...weatherData.current} aqi={weatherData.current.air_quality} sunSetRise={weatherData.forecast.forecastday[0].astro} />

            </GridItem>


          </Grid>

        </Box>
      )


  )
}

export default AllCards

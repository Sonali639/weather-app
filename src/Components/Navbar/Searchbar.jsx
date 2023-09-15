import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";
import { BiSearchAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { useColorModeValue } from "@chakra-ui/color-mode";
import axios from 'axios'

export const SearchBar = () => {
  const bg = useColorModeValue("white", "#898b93");
  const border = useColorModeValue("1px solid #fff", "1px solid #3b3f4b");
  const color = useColorModeValue("black", "black");

  const [searchValue, setSearchValue] = useState("");
  const[inputLocation, setInputLocation] = useState("");
  const [InputCity, setInputCity] = useState("");

  const handleInputChange = (event) => {
    const inputLocation = event.target.value;
    setSearchValue(inputLocation);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputLocation(searchValue)
      setSearchValue("");
    }
  };

  console.log(inputLocation);

  useEffect(() => {
    async function LocNameData() {
        const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=dehradun&days=5&hour=12&alerts=yes`);
        setInputCity(res.data.name);
        console.log(res.data.name);
        
    }
    LocNameData();
  });

  return (
    <>
      <InputGroup borderRadius={5} size="md" width='400px'>
        <InputLeftElement
          pointerEvents="none"
          color={color}
          children={<BiSearchAlt />}
        />
        <Input
          type="text"
          placeholder="Search for places"
          border={border}
          bgColor={bg}
          sx={{ borderRadius: '50px', '::placeholder': { color: 'black' } }}
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <InputRightElement p={0} color={color} border="none" children={<CiLocationOn />} />
      </InputGroup>
    </>
  );
};

import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useColorModeValue } from "@chakra-ui/color-mode";
import axios from "axios";

export const SearchBar = (props) => {
  const bg = useColorModeValue("white", "#898b93");
  const border = useColorModeValue("1px solid grey", "1px solid #3b3f4b");
  const color = useColorModeValue("black", "black");

  const [searchValue, setSearchValue] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [InputCity, setInputCity] = useState("");

  const handleInputChange = (event) => {
    const inputLocation = event.target.value;
    setSearchValue(inputLocation);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputLocation(searchValue);
      setSearchValue("");
    }
  };

  console.log(inputLocation);

  useEffect(() => {
    async function LocNameData() {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=dehradun&days=5&hour=12&alerts=yes`
      );
      setInputCity(res.data.name);
      console.log(res.data.name);
    }
    LocNameData();
  });
  // console.log(props.display ? props.display : "none");
  return (
    <>
      <InputGroup
        borderRadius={5}
        size="md"
        width="100%"
        display={
          props.todisplay
            ? { base: "block", md: "none", lg: "none" }
            : { base: "block" }
        }
      >
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
  sx={{
    borderRadius: "50px",
    "::placeholder": { color: "black" },
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)", // Add shadow here
  }}
  value={searchValue}
  onChange={handleInputChange}
  onKeyPress={handleKeyPress}
/>

        <InputRightElement
          p={0}
          color={color}
          border="none"
          children={<CiLocationOn />}
        />
      </InputGroup>
    </>
  );
};

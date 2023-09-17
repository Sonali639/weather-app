import React, { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";

import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSearchAlt, BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useColorModeValue } from "@chakra-ui/color-mode";
import axios from "axios";
import { useDispatch } from "react-redux";
import setlocation from "../../Redux/Location/Action";

export const SearchBar = (props) => {
  const bg = useColorModeValue("white", "#898b93");
  const border = useColorModeValue("1px solid grey", "1px solid #3b3f4b");
  const color = useColorModeValue("black", "black");
  const suggbg = useColorModeValue("white", "#898b93");

  const [searchValue, setSearchValue] = useState("");
  const [InputCity, setInputCity] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    console.log(event);
    const inputLocation = event.target.value;
    setSearchValue(inputLocation);
    suggest(searchValue);
  };

  const dispatch = useDispatch();

  async function suggest(searchValue) {
    if (searchValue === "") {
      return;
    }
    const res = await axios
      .get(
        `https://api.weatherapi.com/v1/search.json?key=7126e91d17b34e038b0133451231209&q=${searchValue}`
      )
      .then((res) => {
        setSuggestion(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        return;
      });
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(setlocation(searchValue));
      setSearchValue("");
    }
  };

  useEffect(() => {
    async function LocNameData() {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=dehradun&days=5&hour=12&alerts=yes`
      );
      setInputCity(res.data.name);
    }

    LocNameData();
  }, [InputCity]);
  // console.log(props.display ? props.display : "none");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Click occurred outside the input element
        //setSearchValue("");
        setSuggestion([]); // Reset the suggestions
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          ref={inputRef}
        />

        <InputRightElement
          p={0}
          color={color}
          border="none"
          children={<CiLocationOn />}
        />
      </InputGroup>

      <Box position="absolute" zIndex="1000" bg="suggbg">
  {suggestion.length > 0 &&
    suggestion.map((item, index) => {
      return (
        <Box key={index}>
          <Button
            onClick={() => {
              dispatch(setlocation(item.name));
              setSearchValue(item.name + ", " + item.region);
            }}
            width="270px"
            justifyContent="flex-start"
            fontSize="14px"
            fontWeight="light"
            bgColor={suggbg}
            _hover={{ bg: "#f5f5f5" }}
          >
            <BiSearch />
            {item.name}, {item.region}
          </Button>
        </Box>
      );
    })}
</Box>

    </>
  );
};

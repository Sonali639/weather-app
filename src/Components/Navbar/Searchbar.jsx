import React from "react";
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

export const SearchBar = () => {

  const bg = useColorModeValue("white","#898b93 ");
  const border = useColorModeValue("1px solid #fff","1px solid #3b3f4b");
  const color = useColorModeValue("black","black");
  return (
    <>
      <InputGroup borderRadius={5} size="md" width='400px' >
        <InputLeftElement
          pointerEvents="none"
          color={color}
          children={<BiSearchAlt  />}
        />
        <Input type="text"  placeholder="Search for places" border={border} bgColor={bg} sx={{borderRadius:'50px','::placeholder': {
      color: 'black', // Replace with the color you want
    },}}/>
        <InputRightElement
          p={0}
          color={color}
          border="none"
          children={<CiLocationOn  />}
        >
          {/* <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button> */}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

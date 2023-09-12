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

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="md" width='400px' >
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearchAlt color="gray.600" />}
        />
        <Input type="text" placeholder="Search for places" border="1px solid #f3f4f6"   sx={{borderRadius:'50px', backgroundColor:'#f3f4f6'}}/>
        <InputRightElement
          p={0}
          border="none"
          children={<CiLocationOn color="gray.600" />}
        >
          {/* <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button> */}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

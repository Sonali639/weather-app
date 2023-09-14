import React, { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineMoon } from "react-icons/hi2";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { cbutton, fbutton } from "../../Redux/ButtonC&F/Action";
import { useDispatch, useSelector } from "react-redux";
import { useColorMode } from "@chakra-ui/react";
import { BiSun } from "react-icons/bi";

function Buttons() {
  const { toggleColorMode } = useColorMode();
  const check =useColorModeValue("white","#3b3f4b");

  const dispatch = useDispatch();
  const temp = useSelector((state) => state.temp);
  const handleC = () => {
    dispatch(cbutton());
  };

  const handleF = () => {
    dispatch(fbutton());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        mx={3}
        onClick={handleC}
        fontSize="20px"
        px={3}
        py={4}
        colorScheme="black"
        size="sm"
        sx={{
          borderRadius: "50px",
          backgroundColor: "black",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        °C
      </Button>
      <Button
        px={3}
        mr={6}
        onClick={handleF}
        fontSize="20px"
        py={4}
        colorScheme="gray"
        size="sm"
        sx={{
          borderRadius: "50px",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        °F
      </Button>
      <Box ml={3}>
      {check === "white" ? (
  <HiOutlineMoon size={25} onClick={toggleColorMode} />
) : (
  <BiSun size={25} onClick={toggleColorMode} />
)}

        
      </Box>
    </Box>
  );
}

export default Buttons;

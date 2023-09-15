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
  const check = useColorModeValue("white", "#3b3f4b");

  // const temp = useSelector((state) => state.temp);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
<Box display={{ base: 'none', md: 'block' }} >
        <CelFarBtns />
        </Box>
      {/* <CelFarBtns display={{ base: 'none', md: 'block' }}/> */}
      <Box ml={3}>
        {check === "white" ? (
          <HiOutlineMoon
            size={25}
            onClick={toggleColorMode}
            style={{
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
            }}
          />
        ) : (
          <BiSun
            size={25}
            onClick={toggleColorMode}
            style={{
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
            }}
          />
        )}
      </Box>
    </Box>
  );
}

function CelFarBtns(props) {
  const bgC = useColorModeValue("black", "white");
  const colorC = useColorModeValue("white", "black");
  const bgCHover = useColorModeValue("#222", "#eee");
  const bgF = useColorModeValue("white", "#898b93");
  const dispatch = useDispatch();
  const handleC = () => {
    dispatch(cbutton());
  };

  const handleF = () => {
    dispatch(fbutton());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}  justifyContent={props.smbtnVisible ? "right" : "none"}  py={props.smbtnVisible ? "4" : "none"}>
      <Button
        mx={3}
        onClick={handleC}
        fontSize="20px"
        px={3}
        py={1.5}
       
        display={props.smbtnVisible ? { base: "block", md: "none" ,lg:"none"} : {base: "block",}}
        bgColor={bgC}
        size="sm"
        color={colorC}
        sx={{
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            transform: "scale(1.2)",
            bgColor: bgCHover,
          },
        }}
      >
        °C
      </Button>
      <Button
        px={3}
        mr={6}
        display={props.smbtnVisible ? { base: "block", md: "none" ,lg:"none"} : {base: "block"}}
        onClick={handleF}
        fontSize="20px"
        py={1.5}
        bgColor={bgF}
        size="sm"
        color="black"
        sx={{
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      >
        °F
      </Button>
    </Box>
  );
}

export { Buttons, CelFarBtns };

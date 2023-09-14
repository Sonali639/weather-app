import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: {
      100: "#E6F7FF",
      greyText: "rgb(156 163 175)",
      white: "#fff",
      black: "#000",
      gray: "#808080",
      darkgray: "#2f2f2f",
      darkwhite:'#B5B5B5',
      darkmodebox:'#3b3f4b'
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    font22px: "22px",
    font18px: "18px",
    font14px: "14px",
    font32px: "32px",
  },
  fontWeights: {
    light: "100",
    normal: "400",
    bold: "600",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default Theme;

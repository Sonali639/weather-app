import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SlideData } from "./SlideData";
import { useSelector } from "react-redux";
import { useColorModeValue } from "@chakra-ui/color-mode";


// If you want to use your own Selectors look up the Advancaed Story book examples
const CardDataSlider = (props) => {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const temp = useSelector((state) => state.temp);


  const bg = useColorModeValue("white","#3b3f4b");

  return (
    <Carousel infiniteLoop autoPlay>
      {SlideData.map((slide) => {
        return <Image src={slide.image} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default CardDataSlider;

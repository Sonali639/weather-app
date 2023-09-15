import React from 'react';
import './loadingCSS.css';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from "@chakra-ui/color-mode";

const Loading = () => {

    const bg = useColorModeValue("#f5f5f7", "darkwhite");

  return (
    <Box className='  animationbody' bgColor={bg}>
    <article >
      <section className="spinner-block">
        <section className="comet-spinner" bgColor={bg} tabIndex="1" aria-label="comet spinner">
          <div className="inner-circle"></div>
          <div className="comet"></div>
        </section>
      </section>
    </article>
    </Box>
  );
};

export default Loading;

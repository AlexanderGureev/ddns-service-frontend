import React from "react";
import { StyledParallaxLayerCircle } from "./styles";

const CirclesLayer = () => {
  return (
    <>
      <StyledParallaxLayerCircle
        size={321}
        top={10}
        left={90}
        offset={1.6}
        speed={0.2}
      />
      <StyledParallaxLayerCircle
        size={123}
        top={25}
        left={2}
        offset={1.6}
        speed={0.1}
      />
      <StyledParallaxLayerCircle
        size={70}
        top={15}
        left={65}
        offset={1.6}
        speed={0.2}
      />
      <StyledParallaxLayerCircle
        size={34}
        top={25}
        left={75}
        offset={1.6}
        speed={0.1}
      />
    </>
  );
};

export default CirclesLayer;
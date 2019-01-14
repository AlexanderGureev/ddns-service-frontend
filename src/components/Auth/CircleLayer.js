import React from "react";
import {
  StyledParallaxLayerCircle,
} from "./styles";
import { useMedia } from "react-use";

const CircleLayer = () => {
  let isSmall = useMedia("(min-width: 760px)");

  return (
    <>
      {isSmall && <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={160}
        top={5}
        offset={0.12}
        speed={-1}
      /> }
      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={50}
        top={6}
        offset={0.07}
        speed={-1}
      />
      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={15}
        top={2}
        offset={0.2}
        speed={-1}
      />

      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={100}
        top={50}
        offset={0.04}
        speed={-1}
      />
      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={120}
        top={80}
        offset={0.11}
        speed={-1}
      />

      {isSmall && <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={40}
        top={7}
        offset={0.62}
        speed={-1}
      /> }
      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={70}
        top={2}
        offset={0.55}
        speed={-1}
      />
      {isSmall && <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={15}
        top={2}
        offset={0.65}
        speed={-1}
      /> }
      {isSmall && <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={25}
        top={5}
        offset={0.67}
        speed={-1}
      /> }

      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={240}
        top={37}
        offset={0.75}
        speed={-1}
      />

      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={50}
        top={15}
        offset={0.92}
        speed={-1}
      />
      <StyledParallaxLayerCircle
        color1={"#6EE8FD"}
        color2={"rgba(44,166,187, .55)"}
        size={20}
        top={93}
        offset={0.75}
        speed={-1}
      />
    </>
  );
};

export default CircleLayer;
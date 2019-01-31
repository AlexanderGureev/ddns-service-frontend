import React from "react";
import { StyledCircle } from "./styles";

const CircleLayer = () => (
  <>
    <StyledCircle size={160} top={70} right={80} />
    <StyledCircle size={20} top={70} right={40} />
    <StyledCircle size={30} top={85} right={30} />
    <StyledCircle size={50} top={55} right={20} />
    <StyledCircle size={10} top={75} right={10} />
  </>
);

export default CircleLayer;

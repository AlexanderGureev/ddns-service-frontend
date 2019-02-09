import React from "react";
import { StyledCircle } from "./styles";

const CircleLayer = () => (
  <>
    <StyledCircle size={160} top={650} right={230} />
    <StyledCircle size={20} top={850} right={70} />
    <StyledCircle size={30} top={720} right={140} />
    <StyledCircle size={50} top={560} right={50} />
    <StyledCircle size={10} top={730} right={30} />
  </>
);

export default CircleLayer;

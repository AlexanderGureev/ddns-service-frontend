import React from "react";
import { useMedia } from "react-use";
import { Circle } from "../Common/styles";

const FooterBackgroundCircles = () => {
  const isSmall = useMedia("(min-width: 690px)");

  return (
    <>
      <Circle size={isSmall ? 230 : 230 / 2} left={3} top={isSmall ? 5 : 25} />

      <Circle size={80} left={5} top={70} />
      <Circle size={70} left={55} top={5} />

      <Circle size={isSmall ? 365 : 365 / 2} left={80} top={isSmall ? 5 : 15} />
      <Circle size={78} left={70} top={70} />
    </>
  );
};

export default FooterBackgroundCircles;

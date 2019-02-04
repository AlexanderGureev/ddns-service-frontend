import React from "react";
import { useMedia } from "react-use";
import { Circle } from "../Common/styles";

const ContentBackgroundCircles = () => {
  const isMedium = useMedia("(min-width: 1400px)");
  const isSmall = useMedia("(max-width: 690px)");
  return (
    <>
      <Circle size={isMedium ? 52 : 52 / 2} left={35} top={0} />

      <Circle size={isMedium ? 100 : 100 / 2} left={65} top={10} />
      <Circle
        size={isMedium ? 700 : isSmall ? 700 / 3 : 700 / 2}
        left={75}
        top={isMedium ? 5 : 15}
      />

      <Circle size={isMedium ? 50 : 50 / 2} left={65} top={50} />
      <Circle size={isMedium ? 145 : 145 / 2} left={62} top={39} />

      <Circle
        size={isMedium ? 1000 : isSmall ? 1000 / 3 : 1000 / 2}
        left={-15}
        top={isMedium ? 0 : 20}
      />
    </>
  );
};

export default ContentBackgroundCircles;

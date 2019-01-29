import React from "react";
import { useSpring, animated } from "react-spring/hooks";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Menu from "./Menu";
import { HeaderWrapper, CircleBackground } from "./styles";
import ScrollButton from "./ScrollButton";

const trans = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const useAnimate = () =>
  useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

const Header = () => {
  const [{ xy }, set] = useAnimate();

  return (
    <HeaderWrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div style={{ transform: xy.interpolate(trans) }}>
        <CircleBackground />
      </animated.div>

      <Menu />
      <LeftPart />
      <RightPart />

      <ScrollButton anchor="formSection" />
    </HeaderWrapper>
  );
};

export default Header;

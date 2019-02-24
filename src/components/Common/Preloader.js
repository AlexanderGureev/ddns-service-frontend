import React from "react";
import { useSpring, animated } from "react-spring";
import { PreloaderContainer } from "./styles";

const trans = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const useAnimate = () =>
  useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

const Preloader = ({ children, ...rest }) => {
  const [{ xy }, set] = useAnimate();

  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <PreloaderContainer>
        <animated.div style={{ transform: xy.interpolate(trans) }}>
          {children}
        </animated.div>
      </PreloaderContainer>
    </div>
  );
};

export default Preloader;

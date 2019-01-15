import React, { useRef } from "react";
import { Parallax } from "react-spring/addons";
import { StyledParallaxLayer, ParallaxPositioningLayer } from "./styles";
import layerBg from "./img/layer-bg.svg";
import ChangePasswordForm from "./ChangePasswordForm";
import CircleLayer from "./CircleLayer";
import GoToHomeBtn from "./GoToHomeBtn";

const Auth = () => {
  const parallaxLayer = useRef();

  return (
    <Parallax
      pages={1}
      scrolling={false}
      horizontal
      ref={parallaxLayer}
      style={{ height: "100vh", minHeight: "620px" }}
    >
      <StyledParallaxLayer
        color1="#783F99"
        color2="rgba(0, 169, 201, .85)"
        src={layerBg}
        offset={0}
        speed={0}
      />

      <ParallaxPositioningLayer offset={0} speed={0}>
        <ChangePasswordForm />
      </ParallaxPositioningLayer>

      <CircleLayer />

      <ParallaxPositioningLayer
        width={160}
        height={160}
        offset={0}
        speed={-1}
        order={2}
      >
        <GoToHomeBtn />
      </ParallaxPositioningLayer>
    </Parallax>
  );
};

export default Auth;

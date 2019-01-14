import React, { useRef } from "react";
import { Parallax } from "react-spring/addons";
import {
  StyledParallaxLayer,
  ParallaxPositioningLayer
} from "./styles";
import layerBg from "./img/layer-bg.svg";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import CircleLayer from "./CircleLayer";

const Auth = () => {
  let parallaxLayer = useRef();

  return (
    <Parallax
      pages={3}
      scrolling={true}
      horizontal={true}
      ref={parallaxLayer}
      style={{ height: "100vh", minHeight: "620px" }}
    >
      <StyledParallaxLayer
        color1={"#392A9F"}
        color2={"rgba(67, 7, 113, .85)"}
        src={layerBg}
        offset={0}
        speed={0}
      />

      <StyledParallaxLayer
        color1={"#4E3EBE"}
        color2={"rgba(27, 145, 167, .85)"}
        src={layerBg}
        offset={1}
        speed={0}
      />

      <StyledParallaxLayer
        color1={"#4E3EBE"}
        color2={"rgba(180, 100, 138, .85)"}
        src={layerBg}
        offset={2}
        speed={0}
      />

      <ParallaxPositioningLayer offset={0} speed={0}>
        <SignUpForm />
      </ParallaxPositioningLayer>

      <ParallaxPositioningLayer offset={1} speed={0}>
        <SignInForm />
      </ParallaxPositioningLayer>

      <ParallaxPositioningLayer offset={2} speed={0}>
        <ResetPasswordForm />
      </ParallaxPositioningLayer>

      <CircleLayer />
    </Parallax>
  );
};

export default Auth;

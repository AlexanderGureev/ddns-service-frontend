import React, { useRef } from "react";
import { Parallax } from "react-spring/addons";
import { useStore } from "easy-peasy";
import { Redirect } from "react-router-dom";
import { StyledParallaxLayer, ParallaxPositioningLayer } from "./styles";
import layerBg from "./img/layer-bg.svg";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import CircleLayer from "./CircleLayer";
import GoToHomeBtn from "./GoToHomeBtn";

const Auth = () => {
  const { isAuth } = useStore(state => state.session);
  const parallaxLayer = useRef();

  if (isAuth) return <Redirect to="/managed" />;

  return (
    <Parallax
      pages={3}
      scrolling={false}
      horizontal
      ref={parallaxLayer}
      style={{ height: "100vh", minHeight: "760px" }}
    >
      <StyledParallaxLayer
        color1="#392A9F"
        color2="rgba(67, 7, 113, .85)"
        src={layerBg}
        offset={0}
        speed={0}
      />

      <StyledParallaxLayer
        color1="#4E3EBE"
        color2="rgba(27, 145, 167, .85)"
        src={layerBg}
        offset={1}
        speed={0}
      />

      <StyledParallaxLayer
        color1="#4E3EBE"
        color2="rgba(180, 100, 138, .85)"
        src={layerBg}
        offset={2}
        speed={0}
      />

      <ParallaxPositioningLayer offset={0} speed={0}>
        <SignUpForm parallaxLayer={parallaxLayer} />
      </ParallaxPositioningLayer>

      <ParallaxPositioningLayer offset={1} speed={0}>
        <SignInForm parallaxLayer={parallaxLayer} />
      </ParallaxPositioningLayer>

      <ParallaxPositioningLayer offset={2} speed={0}>
        <ResetPasswordForm parallaxLayer={parallaxLayer} />
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

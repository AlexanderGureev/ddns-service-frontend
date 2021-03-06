import React, { useRef, useEffect } from "react";
import { Parallax } from "react-spring/renderprops-addons";
import { useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";
import { StyledParallaxLayer, ParallaxPositioningLayer } from "./styles";
import layerBg from "./img/layer-bg.svg";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import CircleLayer from "./CircleLayer";
import GoToHomeBtn from "./GoToHomeBtn";
import isConfirmEmailRoute from "../Common/isConfirmEmailRoute";

const Auth = props => {
  const { invert = false } = props.location.state || {};
  const { isAuth } = useStoreState(state => state.session);
  const parallaxLayer = useRef();

  useEffect(() => {
    isConfirmEmailRoute(props.location.state || {}, isAuth);
  }, [isAuth, props.location.state]);

  if (isAuth)
    return (
      <Redirect
        to={{
          pathname: "/managed",
          state: props.location.state || {}
        }}
      />
    );

  return (
    <Parallax
      pages={3}
      scrolling={false}
      horizontal
      ref={parallaxLayer}
      style={{ height: "100vh", minHeight: "700px" }}
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

      <ParallaxPositioningLayer offset={invert ? 1 : 0} speed={0}>
        <SignUpForm {...props} parallaxLayer={parallaxLayer} />
      </ParallaxPositioningLayer>

      <ParallaxPositioningLayer offset={invert ? 0 : 1} speed={0}>
        <SignInForm {...props} parallaxLayer={parallaxLayer} />
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

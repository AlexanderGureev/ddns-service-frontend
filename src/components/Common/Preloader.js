import React from "react";
import { PreloaderContainer } from "./styles";

const Preloader = ({ children, ...rest }) => (
  <PreloaderContainer>{children}</PreloaderContainer>
);

export default Preloader;

import { useSpring } from "react-spring/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import {
  Button as StyledButton,
  ButtonLink as StyledButtonLink
} from "./styles";

const useAnimate = visible => {
  const props = useSpring({
    boxShadow: visible
      ? "0 10px 20px rgba(221, 58, 163, 0.2)"
      : "0 10px 20px rgba(60, 210, 255, 0.2)",
    background: visible
      ? "linear-gradient(60deg, #DD3AA3, #4200F4)"
      : "linear-gradient(60deg, #0557a8, #20c4eb)"
  });

  return props;
};

const Button = ({ children, className, loading = false, ...rest }) => {
  const [visible, setVisible] = useState(false);
  const props = useAnimate(visible);

  const onHandleMouse = () => setVisible(!visible);
  return (
    <StyledButton
      {...rest}
      className={className}
      style={props}
      onMouseEnter={onHandleMouse}
      onMouseLeave={onHandleMouse}
    >
      {loading && <Icon type="loading" />}
      {children}
    </StyledButton>
  );
};

export const ButtonLink = ({
  children,
  className,
  to = "/",
  loading = false,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const props = useAnimate(visible);

  const onHandleMouse = () => setVisible(!visible);
  return (
    <StyledButtonLink
      {...rest}
      className={className}
      style={props}
      onMouseEnter={onHandleMouse}
      onMouseLeave={onHandleMouse}
    >
      {loading && <Icon type="loading" />}
      <Link to={to}>{children}</Link>
    </StyledButtonLink>
  );
};

export default Button;

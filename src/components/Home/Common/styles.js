import styled, { keyframes } from "styled-components";
import { animated } from "react-spring/hooks";

const showLoadingCircle = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  top: ${props => `${props.top}%`};
  left: ${props => `${props.left}%`};
  border-radius: 50%;
  background-color: rgba(217, 217, 217, 0.15);
`;

export const Button = styled(animated.div)`
  font-weight: 400;
  color: #fff;
  font-size: 20px;
  padding: 8px 50px;
  border-radius: 50px;
  background: linear-gradient(60deg, #0557a8, #20c4eb);
  box-shadow: 0 10px 20px rgba(60, 210, 255, 0.2);
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  i {
    animation: ${showLoadingCircle} 0.3s ease;
    position: relative;
    right: 10px;
  }
  a {
    color: #fff;
    display: block;
  }
  a:hover {
    color: #fff;
  }
`;
export const ButtonLink = styled(Button)`
  padding: 0;
  i {
    animation: ${showLoadingCircle} 0.3s ease;
    position: relative;
    right: 10px;
  }
  a {
    padding: 8px 50px;
    color: #fff;
    display: block;
  }
`;

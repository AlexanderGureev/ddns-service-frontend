import styled from "styled-components";
import { ParallaxLayer } from "react-spring/addons";

export const StyledParallaxLayer = styled(ParallaxLayer)`
  background: url(${ props => props.src }) no-repeat center top;
  background-size: cover !important;
  z-index: ${ props => props.order * 10 };
`;

export const StyledParallaxLayerCircle = styled(StyledParallaxLayer)`
  background: linear-gradient(140deg, #6EE8FD,rgba(44,166,187, .55));
  filter: drop-shadow(0px 10px 15px rgba(0,0,0, .35));
  border-radius: 50%;
  top: ${ props => `${props.top}%` };
  left: ${ props => `${props.left}%` };
  width: ${ props => `${props.size}px !important` };
  height: ${ props => `${props.size}px !important` };
  z-index: 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 450px;
  z-index: 1000;
`;
export const HeaderForm = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  color: #fff;
`;

export const Input = styled.input`
  border: none;
  color: #8F8F8F;
  filter: drop-shadow(0px 15px 25px rgba(0,0,0, .35));
  font-size: 16px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 50px;
  margin-right: 20px;
  outline: none;
`;

export const Button = styled.button`
  background: linear-gradient(140deg,#2C3FF9,#3673F1);
  border-radius: 10px;
  filter: drop-shadow(0px 15px 25px rgba(0,0,0, .35));
  color: #fff;
  border: none;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 800;
  padding: 10px 50px;
  outline: none;
  cursor: pointer;
`;
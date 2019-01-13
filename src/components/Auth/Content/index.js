import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from 'react-spring/addons';

import layerBg from "./img/layer-bg.svg";
import signUpFormBg from "./img/bg-form-signup.svg";
import signInFormBg from "./img/bg-form-signin.svg";
import twitterIcon from "./img/soc-twitter.svg";
import vkIcon from "./img/soc-vk.svg";
import facebookIcon from "./img/soc-facebook.svg";

import { Checkbox } from 'antd';
import styled from "styled-components";

const StyledParallaxLayer = styled(ParallaxLayer)`
  background: linear-gradient(135deg, ${props => props.color1 }, ${props => props.color2 });
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    z-index: -1;
  }
`;

const StyledParallaxLayerCircle = styled(StyledParallaxLayer)`
  background: linear-gradient(140deg, ${props => props.color1 }, ${props => props.color2 });
  filter: drop-shadow(0px 10px 15px rgba(0,0,0, .35));
  border-radius: 50%;
  top: ${ props => `${props.top}%` };
  width: ${ props => `${props.size}px !important` };
  height: ${ props => `${props.size}px !important` };
  z-index: 0;
`;

const OneCirlceLayer = () => {
  return (
    <>
      <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={240} top={10} offset={.1} speed={.8} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={65} top={10} offset={.05} speed={0.5} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={25} top={6} offset={.1} speed={0.2} />

        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={99} top={5} offset={.5} speed={0.5} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={47} top={12} offset={.58} speed={0.3} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={28} top={18} offset={.55} speed={0.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={18} top={6} offset={.56} speed={0.2} />

        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={355} top={30} offset={.7} speed={.8} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={47} top={22} offset={.90} speed={0.3} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={18} top={48} offset={.96} speed={0.2} />

        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={80} top={50} offset={.06} speed={0.5} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={160} top={65} offset={.2} speed={.8} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={50} top={90} offset={.76} speed={0.3} />
    </>
  )
}
const TwoCircleLayer = () => {
  return (
    <>
    <StyledParallaxLayerCircle color1={"#C369F2"} color2={"rgba(54,11,105, .75)"} size={240} top={10} offset={.5} speed={.4} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={65} top={10} offset={.25} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={25} top={6} offset={.3} speed={.2} />

        <StyledParallaxLayerCircle color1={"#9191FB"} color2={"rgba(19,36,196, .55)"} size={99} top={5} offset={.7} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={47} top={12} offset={.78} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={28} top={18} offset={.75} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={18} top={6} offset={.76} speed={.2} />

        <StyledParallaxLayerCircle color1={"#C369F2"} color2={"rgba(54,11,105, .75)"} size={355} top={30} offset={0.9} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={47} top={22} offset={.95} speed={.1} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={18} top={48} offset={.99} speed={.05} />

        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={80} top={50} offset={.26} speed={.2} />
        <StyledParallaxLayerCircle color1={"#9191FB"} color2={"rgba(19,36,196, .55)"} size={160} top={65} offset={.4} speed={.2} />
        <StyledParallaxLayerCircle color1={"#6EE8FD"} color2={"rgba(44,166,187, .55)"} size={50} top={90} offset={.96} speed={.3} />
    </>
  )
}

const LayerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  box-shadow: 0 15px 35px rgba(0,0,0, .3);
  width: ${props => `${props.width}%`};
  height: ${props => `${props.height}%`};
  background: white;
  position: relative;
`;

const LeftPartForm = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 50%;
  height: 100%;
`;

const RightPartForm = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
`;

const Form = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const FormHeader = styled.p`
  color: #4B4B4B;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: 700;
  margin: 0;
`;
const SocialBlock = styled.div`
  
`;
const HeaderSocial = styled.div`
  color: #4B4B4B;
  font-size: 16;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;
`;
const FooterSocial = styled(HeaderSocial)`
  display: flex;
  justify-content: center;
  align-items: center;

  &::after{
    content: "";
    display: block;
    position: absolute;
    width: 37%;
    height: 1px;
    left: 50px;
    background-color: #DDDDDD;
  }
  &::before{
    content: "";
    display: block;
    position: absolute;
    width: 37%;
    height: 1px;
    right: 50px;
    background-color: #DDDDDD;
  }
`;

const SocialIconBox = styled.div`
  margin: 5px 0
`;

const SocialIcon = styled.img.attrs(props => ({
  src: props.src
}))`
  cursor: pointer;
  padding: 0 10px;
  width: 75px;
  height: 75px;
`;

const Input = styled.input`
  border-radius: 5px;
  color: #6A6A6A;
  font-size: 16;
  font-family: "Montserrat";
  font-weight: 600;
  padding: 15px 20px;
  filter: drop-shadow(0 15px 25px rgba(0,0,0, .3));
  outline: none;
  width: 100%;
  border: none;
  margin: 15px 0;
`;
const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  margin: 10px 0 10px 5px;
`;
const FormCheckBox = styled(Checkbox)`

`;

const Label = styled.p`
  color: #6A6A6A;
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 600;
  margin: 0 0 0 20px;
`;

const Button = styled.button`
  background: linear-gradient(140deg, #0D52DF, #562685);
  border-radius: 10px;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.35));
  color: #fff;
  border: none;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 800;
  padding: 10px 60px;
  outline: none;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
`;

const Text = styled.p`
  color: #6A6A6A;
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0;
  cursor: pointer;
  transition: .3s ease;
  
  &:hover {
    color: #2664B9;
  }
`;

TextContainer.Text = Text;
CheckBoxContainer.Label = Label;
CheckBoxContainer.CheckBox = FormCheckBox;

SocialBlock.Head = HeaderSocial;
SocialBlock.IconBox = SocialIconBox;
SocialBlock.Icon = SocialIcon;
SocialBlock.Footer = FooterSocial;

Form.Header = FormHeader;
Form.SocialBlock = SocialBlock;
Form.Input = Input;
Form.CheckBoxContainer = CheckBoxContainer;
Form.Button = Button;
Form.TextContainer = TextContainer;

const SignUp = () => {
  return (
    <ParallaxLayer offset={0} speed={.3}>
        <LayerContainer>
          <FormWrapper height={75} width={70}>
            <LeftPartForm src={signUpFormBg}/>
            <RightPartForm>
              <Form>
                <Form.Header>Create Your Account</Form.Header>
                <Form.SocialBlock>
                  <Form.SocialBlock.Head>with your social network</Form.SocialBlock.Head>
                  <Form.SocialBlock.IconBox>
                    <Form.SocialBlock.Icon src={facebookIcon} />
                    <Form.SocialBlock.Icon src={twitterIcon} />
                    <Form.SocialBlock.Icon src={vkIcon} />
                  </Form.SocialBlock.IconBox>
                  <Form.SocialBlock.Footer>or</Form.SocialBlock.Footer>
                </Form.SocialBlock>
                <Form.Input placeholder="Email" />
                <Form.Input placeholder="Password" />
                <Form.Input placeholder="Hostname" />
                <Form.CheckBoxContainer>
                  <Form.CheckBoxContainer.CheckBox />
                  <Form.CheckBoxContainer.Label>Create my hostname later</Form.CheckBoxContainer.Label>
                </Form.CheckBoxContainer>
                <Form.CheckBoxContainer>
                  <Form.CheckBoxContainer.CheckBox />
                  <Form.CheckBoxContainer.Label>I agree to the Terms of Service and Privacy Policy. I also agree that I will only create one free account.</Form.CheckBoxContainer.Label>
                </Form.CheckBoxContainer>
                <Form.Button>Sign up</Form.Button>
                <Form.TextContainer>
                  <Form.TextContainer.Text>Already registered? Sign in</Form.TextContainer.Text>
                </Form.TextContainer>
              </Form>
            </RightPartForm>
          </FormWrapper>
        </LayerContainer>
    </ParallaxLayer>
  )
}

const SignIn = () => {
  return (
    <ParallaxLayer offset={.3} speed={.3}>
        <LayerContainer>
          <FormWrapper height={55} width={60}>
            <LeftPartForm src={signInFormBg}/>
            <RightPartForm>
            <Form>
                <Form.Header>Sign in</Form.Header>
                <Form.SocialBlock>
                  <Form.SocialBlock.Head>with your social network</Form.SocialBlock.Head>
                  <Form.SocialBlock.IconBox>
                    <Form.SocialBlock.Icon src={facebookIcon} />
                    <Form.SocialBlock.Icon src={twitterIcon} />
                    <Form.SocialBlock.Icon src={vkIcon} />
                  </Form.SocialBlock.IconBox>
                  <Form.SocialBlock.Footer>or</Form.SocialBlock.Footer>
                </Form.SocialBlock>
                <Form.Input placeholder="Email" />
                <Form.Input placeholder="Password" />
                <Form.Button>Sign in</Form.Button>
                <Form.TextContainer>
                  <Form.TextContainer.Text>Not a member? Sign up</Form.TextContainer.Text>
                  <Form.TextContainer.Text>Recover my password</Form.TextContainer.Text>
                </Form.TextContainer>
              </Form>
            </RightPartForm>
          </FormWrapper>
        </LayerContainer>
    </ParallaxLayer>
  )
}

const Content = () => {
  let parallaxLayer = useRef();

  return (
    <Parallax pages={2} scrolling={true} horizontal={true} ref={parallaxLayer} style={{ "height": "100vh", "minHeight": "500px" }}>
      <StyledParallaxLayer color1={"#392A9F"} color2={"rgba(67, 7, 113, .85)"} src={layerBg} offset={0} speed={0} >
        <OneCirlceLayer />
        <SignUp />
      </StyledParallaxLayer>
      <StyledParallaxLayer color1={"#4E3EBE"} color2={"rgba(27, 145, 167, .85)"} src={layerBg} offset={1} speed={0} >
        <TwoCircleLayer />
        <SignIn />
      </StyledParallaxLayer>
    </Parallax>
  )
}

export default Content;
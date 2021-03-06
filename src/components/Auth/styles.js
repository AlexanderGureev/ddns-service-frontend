import { Checkbox, Form as AntdForm, Input as AntdInput } from "antd";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Link } from "react-router-dom";
import { Button as StyledButton } from "../Common/styles";

export const Button = styled(StyledButton)`
  width: 100%;
  margin-top: 15px;
`;
export const ParallaxPositioningLayer = styled(ParallaxLayer)`
  z-index: ${props => props.order || 1};
  width: ${props => `${props.width}px !important`};
  height: ${props => `${props.width}px !important`};
`;

export const StyledParallaxLayer = styled(ParallaxLayer)`
  background: linear-gradient(
    135deg,
    ${props => props.color1},
    ${props => props.color2}
  );
  background-size: cover;
  position: relative;
  z-index: -10;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    z-index: 10;
  }
`;

export const StyledParallaxLayerCircle = styled(StyledParallaxLayer)`
  background: linear-gradient(
    140deg,
    ${props => props.color1},
    ${props => props.color2}
  );
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.35));
  border-radius: 50%;
  top: ${props => `${props.top}%`};
  width: ${props => `${props.size}px !important`};
  height: ${props => `${props.size}px !important`};
  z-index: 0;
`;

export const LayerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  width: ${props => `${props.width}%`};
  background: white;
  position: relative;
`;

export const LeftPartForm = styled.div`
  background: rgb(39, 37, 116) url(${props => props.src}) no-repeat center
    center;
  background-size: cover;
  position: absolute;
  width: 50%;
  left: 0;
  height: 100%;
`;

export const RightPartForm = styled.div`
  position: relative;
  left: 50%;
  width: 50%;

  @media (max-width: 860px) {
    left: 0;
    width: 100%;
  }
`;

export const Form = styled(AntdForm)`
  && {
    padding: 30px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .ant-input-group-wrapper {
      padding: 0;
      input {
        margin: 0;
        padding: 12px 20px;
        border: none;
        color: #6a6a6a;
        font-size: 16px;
        font-weight: 600;
        @media (max-width: 1200px) {
          font-size: 14px;
        }
        @media (max-width: 980px) {
          font-size: 12px;
        }
        @media (max-width: 560px) {
          padding: 10px 15px;
        }
      }

      .ant-input-group-addon {
        border: none;
        background-color: #e2e2e2;

        .ant-select {
          width: 170px !important;
          font-weight: 500;
          font-size: 14px;

          @media (max-width: 980px) {
            font-size: 12px;
          }

          @media (max-width: 460px) {
            width: 120px !important;
          }
        }
      }
    }
    .ant-form-explain {
      font-size: 12px;
      font-weight: 500;
      margin-top: -5px !important;

      @media (max-width: 560px) {
        font-size: 10px;
      }
    }
    .ant-form-item-control {
      line-height: 1.7;
    }
    @media (max-width: 1200px) {
      padding: 25px 30px 10px;
    }

    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;

const FormHeader = styled.p`
  color: #4b4b4b;
  font-size: 30px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 1375px) {
    font-size: 26px;
  }

  @media (max-width: 980px) {
    font-size: 20px;
  }

  @media (max-width: 560px) {
    font-size: 18px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Caption = styled.div`
  margin: 0;
  padding: 10px 0 5px 0;
`;

const CaptionText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const SocialBlock = styled.div`
  width: 100%;
`;
const HeaderSocial = styled.div`
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 1375px) {
    font-size: 14px;
  }

  @media (max-width: 980px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
const FooterSocial = styled(HeaderSocial)`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 45%;
    height: 1px;
    left: 0;
    top: 50%;
    background-color: #dddddd;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 45%;
    height: 1px;
    right: 0;
    top: 50%;
    background-color: #dddddd;
  }
`;

const SocialIconBox = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  cursor: pointer;
  height: 60px;
  padding: 0 10px;

  @media (max-width: 1200px) {
    height: 50px;
  }
  @media (max-width: 560px) {
    padding: 0 5px;
    height: 40px;
  }
`;

const Input = styled(AntdInput)`
  && {
    border-radius: 5px;
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
    outline: none;
    width: 100%;
    border: none;
    margin: 15px 0;

    @media (max-width: 1200px) {
      font-size: 14px;
    }

    @media (max-width: 980px) {
      font-size: 12px;
    }
    @media (max-width: 560px) {
      padding: 10px 15px;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 5px 0;
`;
const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  padding: 10px 0 10px 5px;

  @media (max-width: 1200px) {
    padding: 5px 0 5px 5px;
  }
`;
const FormCheckBox = styled(Checkbox)`
  color: #6a6a6a;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 12px !important;
  }

  @media (max-width: 560px) {
    font-size: 10px !important;
  }
  .ant-checkbox {
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2));

    + span {
      padding-left: 12px !important;
    }
  }
  .ant-checkbox-inner {
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    box-shadow: ${({ isError = false }) =>
      isError
        ? "0px 0px 0px 4px rgba(252, 7, 7, .35)"
        : "0px 0px 0px 4px rgba(0, 0, 0, 0.1)"};

    &::after {
      left: 4.2px;
      top: 7px;
    }
  }
  .ant-checkbox-checked:after {
    border-radius: 5px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  color: #6a6a6a;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  cursor: pointer;
  transition: 0.3s ease;

  @media (max-width: 1400px) {
    padding-bottom: 5px;
  }
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }

  &:hover {
    color: #2664b9;
  }
`;

export const BtnContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  left: -50%;
  top: -50%;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3);
  background: linear-gradient(140deg, #bdb2f8, #100689);
  position: relative;
  transition: 0.3s linear;
  cursor: pointer;

  @media (max-width: 560px) {
    width: 140px;
    height: 140px;
  }

  &:hover {
    transform: scale(1.1);
    transform: translate(10px, 10px);

    > img {
      transform: scale(1.1);
    }
  }
`;
const Icon = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 46px;
  height: auto;
  position: absolute;
  top: 56%;
  left: 55%;
  transition: 0.3s ease;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 1));

  @media (max-width: 560px) {
    width: 32px;
    top: 63%;
    left: 62%;
  }
`;

const BtnContainerLink = styled(Link)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
`;

BtnContainer.Icon = Icon;
BtnContainer.Link = BtnContainerLink;
TextContainer.Text = Text;
CheckBoxContainer.CheckBox = FormCheckBox;

SocialBlock.Head = HeaderSocial;
SocialBlock.IconBox = SocialIconBox;
SocialBlock.Icon = SocialIcon;
SocialBlock.Footer = FooterSocial;

Form.Header = FormHeader;
Form.Caption = Caption;
Caption.Text = CaptionText;

Form.ContentWrapper = ContentWrapper;
Form.SocialBlock = SocialBlock;
Form.Input = Input;
Form.CheckBoxContainer = CheckBoxContainer;

Form.TextContainer = TextContainer;

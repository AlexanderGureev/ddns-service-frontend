import styled from "styled-components";
import {
  Form as AntdForm,
  Input as AntdInput,
  Select as AntdSelect,
  Row as AntdRow,
  Col as AntdCol
} from "antd";
import StyledButton, { ButtonLink } from "../Common/Button";
import { ReactComponent as EmailIcon } from "./img/email-icon.svg";

export const FooterWrapper = styled.div``;
export const FooterTop = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 150px 0;
  position: relative;
  overflow-x: hidden;

  /* &::before {
    content: "";
    position: absolute;
    top: -80px;
    border-radius: 50px;
    left: 150px;
    width: 85%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  } */
`;

export const Row = styled(AntdRow)``;
export const Col = styled(AntdCol)``;

export const Form = styled(AntdForm)`
  padding: 40px 0 !important;

  .ant-row {
    @media (max-width: 991px) {
      padding-bottom: 30px;
    }
  }
`;
const Input = styled(AntdInput)`
  && {
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    padding: 16.5px 20px;
    font-weight: 500;
    font-size: 20px;
    @media (max-width: 1200px) {
      font-size: 18px;
    }
    @media (max-width: 991px) {
      font-size: 16px;
    }
    @media (max-width: 560px) {
      padding: 12.5px 20px;
      font-size: 14px;
    }
  }
`;
const Button = styled(ButtonLink)`
  border-radius: 15px;
  text-align: center;
  display: block;
  a {
    padding: 15px 0;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 560px) {
    a {
      padding: 11px 0;
    }
  }
`;

export const Select = styled(AntdSelect).attrs(props => ({
  "aria-hidden": true
}))`
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  color: #011457;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }

  .ant-select-selection--single {
    height: auto !important;
  }
  .ant-select-open .ant-select-selection {
    box-shadow: none;
  }
  .ant-select-selection {
    width: 100%;
    padding: 15px 20px;
    border-radius: 15px;
    border: none !important;
    outline: none !important;
    :hover {
      border-color: #fff !important;
      box-shadow: none !important;
    }

    @media (max-width: 560px) {
      padding: 8px 20px;
    }
  }
  .ant-select-selection__rendered {
    margin: 0 !important;
  }
`;

Form.Input = Input;
Form.Button = Button;

export const Header = styled.p`
  font-weight: 700;
  color: #011457;
  text-align: center;
  margin: 0;
  font-size: 50px;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
    font-size: 32px;
  }
  @media (max-width: 460px) {
    font-size: 27px;
  }
`;

export const FooterBottom = styled.div`
  background: url(${props => props.src}) no-repeat top center;
  background-size: cover;
`;

export const StayUpdatedForm = styled.div`
  padding: 100px 0 10px 0;
  text-align: center;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 860px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: auto;
    padding: 100px 40px 0;
  }
`;
const StayUpdatedFormHeader = styled.p`
  margin: 0;
  font-size: 40px;
  color: #fff;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 35px;
  }
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 460px) {
    font-size: 27px;
  }
`;
const StayUpdatedFormButton = styled(StyledButton)`
  font-size: 20px;
  padding: 15px 70px;
  border-radius: 15px;
`;
const StayUpdatedFormInput = styled(Input.Search)`
  && {
    text-align: center !important;
    margin: 30px 0;
    padding: 0 !important;

    span {
      right: -10px !important;
    }
    button {
      border: none;
      border-radius: 50% !important;
      width: 45px !important;
      height: 45px !important;
      padding: 3px 0 0 0;
      z-index: 100 !important;
      background: linear-gradient(135deg, #11013c, #053a80);
      &:hover {
        background: linear-gradient(135deg, #11013c, #053a80);
      }

      @media (max-width: 460px) {
        width: 35px !important;
        height: 35px !important;
      }
    }
    input {
      font-weight: 500;
      font-size: 18px;
      border-radius: 50px !important;
      text-align: center;
      padding: 15px 65px 15px 55px !important;

      @media (max-width: 1200px) {
        font-size: 18px;
      }
      @media (max-width: 991px) {
        font-size: 16px;
      }
      @media (max-width: 460px) {
        padding: 10px 65px 10px 55px !important;
        font-size: 14px;
      }
    }
    .ant-input-prefix i {
      position: absolute;
      left: 5px;
      top: -13px;
      @media (max-width: 460px) {
        top: -10px;
      }
    }
    i {
      font-size: 25px;
      @media (max-width: 460px) {
        font-size: 20px;
      }
    }
    .ant-input-group-addon {
      background: none;
      position: relative;
      right: 45px !important;
      @media (max-width: 460px) {
        right: 30px !important;
      }
    }
  }
`;
const StayUpdatedFormIcon = styled(EmailIcon)`
  margin-bottom: 10px;

  @media (max-width: 991px) {
    width: 80px;
  }
`;
StayUpdatedForm.Header = StayUpdatedFormHeader;
StayUpdatedForm.Input = StayUpdatedFormInput;
StayUpdatedForm.Button = StayUpdatedFormButton;
StayUpdatedForm.Icon = StayUpdatedFormIcon;

export const FooterRow = styled(Row)`
  margin: 40px 0 0 0 !important;
`;
export const ContentColumn = styled.div``;

const Head = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 20px 0;
  color: #fff;

  @media (max-width: 760px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    font-size: 16px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    color: #8ee0ff;
  }
  @media (max-width: 760px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

FooterRow.Col = ContentColumn;
ContentColumn.Head = Head;
ContentColumn.List = List;
ContentColumn.ListItem = Item;

export const SocialContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  @media (max-width: 760px) {
    width: 150px;
  }
  @media (max-width: 375px) {
    width: auto;
    justify-content: space-between;
    padding-right: 10px;
  }
`;
const SocialIcon = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  @media (max-width: 760px) {
    width: 30px;
    height: 15px;
  }
  cursor: pointer;
`;
SocialContainer.Icon = SocialIcon;

export const Copyright = styled.div``;
const CopyrightRow = styled(Row)`
  padding: 100px 0 30px 0;
  align-items: center;
  @media (max-width: 990px) {
    align-items: center;
  }
  @media (max-width: 760px) {
    padding: 50px 0 20px 0;
  }
`;
const CopyrightCol = styled(Col)`
  @media (max-width: 575px) {
    margin: 0 !important;
  }
`;
const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 14px;
  }
  @media (max-width: 575px) {
    margin: 0;
    text-align: center;
  }
`;
const CopyrightLogoWrapper = styled.div`
  @media (max-width: 575px) {
    text-align: center;
  }
  svg {
    @media (max-width: 1200px) {
      width: 150px;
    }
    @media (max-width: 760px) {
      width: 120px;
    }
  }
`;
Copyright.Text = CopyrightText;
Copyright.LogoWrapper = CopyrightLogoWrapper;
Copyright.Row = CopyrightRow;
Copyright.Col = CopyrightCol;

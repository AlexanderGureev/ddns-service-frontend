import {
  Modal as AntdModal,
  Form as AntdForm,
  Input as AntdInput,
  Button as AntdButton,
  Icon as AntdIcon,
  Select as AntdSelect,
  Upload,
  Avatar as AvaBox,
  Tooltip as AntdTooltip
} from "antd";
import styled, { keyframes } from "styled-components";
import uploadIcon from "./img/upload.svg";

export const Modal = styled(AntdModal)`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;

  .ant-modal-footer,
  .ant-modal-header {
    border: none;
  }
`;
export const Form = styled(AntdForm)`
  .ant-form-item-label,
  .ant-form-explain,
  .ant-form-item-control-wrapper {
    font-family: "Montserrat";
  }
  .ant-form-explain {
    font-size: 12px;
  }
`;
export const FormLink = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  color: #2c69cd;
  margin: 0;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    color: #3f4349;
  }
  display: inline-block;
  padding: 0 20px;
`;

export const { Option } = AntdSelect;

export const Input = styled(AntdInput)`
  input {
    font-family: "Montserrat";
    font-size: 16px;
    padding: 8px 20px 8px 40px !important;

    @media (max-width: 680px) {
      font-size: 14px;
    }
  }
`;
export const Select = styled(AntdSelect)`
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 0 !important;
  position: relative;

  @media (max-width: 680px) {
    font-size: 14px;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: 12px;
    top: 11px;
    z-index: 10;
    width: 20px;
    height: 20px;
    background: url(${props => props.prefix});
    background-size: cover;
  }
  .ant-select-selection--single {
    height: auto;
    padding: 10px 40px !important;
  }
  .ant-select-selection__rendered {
    margin: 0 !important;
    display: flex;
    line-height: 1.3 !important;
  }
  .ant-select-selection__placeholder,
  .ant-select-search__field__placeholder {
    position: initial !important;
    margin: 0 !important;
  }
`;

export const Icon = styled(AntdIcon)`
  font-size: 20px;
`;
Form.Item = styled(Form.Item)`
  :not(:last-child) {
    margin: 0 20px 20px 0 !important;
  }
`;
const showLoadingCircle = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const Button = styled(AntdButton)`
  background: ${props =>
    props.primary ? "linear-gradient(140deg, #0d52df, #562685)" : "#fff"};
  border-radius: 10px;
  filter: ${props =>
    props.primary
      ? "drop-shadow(0px 10px 10px rgba(13, 82, 223, 0.25))"
      : "none"};
  color: ${props => (props.primary ? "#fff" : "rgba(0,0,0, .3)")};
  border: ${props => (props.primary ? "none" : "1px solid rgba(0,0,0, .2)")};
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 70px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;

  span {
    transition: 0.5s ease;
  }

  i {
    animation: ${showLoadingCircle} 0.5s ease;
  }
  &:hover,
  &:focus {
    background: ${props =>
      props.primary
        ? "linear-gradient(140deg, #0d52df, #562685) !important"
        : "rgba(0,0,0, .1)"};
    color: ${props => (props.primary ? "#fff !important" : "rgba(0,0,0, .3)")};
    border-color: ${props => (props.primary ? "none" : "rgba(0,0,0, .2)")};
  }
  &:disabled {
    background: rgba(0, 0, 0, 0.3) !important;
  }

  @media (max-width: 680px) {
    font-size: 14px;
    padding: 10px 50px;
  }
  @media (max-width: 560px) {
    font-size: 12px;
    padding: 10px 40px;
  }
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  color: #434343;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    position: relative;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    display: block;
    background: url(${props => props.icon});
    background-size: cover;
    left: 0;
    top: 2px;
  }
  @media (max-width: 680px) {
    font-size: 16px;

    ::before {
      width: 20px;
      height: 20px;
      top: 0;
    }
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};

  @media (max-width: 680px) {
    flex-direction: column;
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const InputGroup = styled.div`
  display: flex;
  @media (max-width: 680px) {
    flex-direction: column;
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 460px) {
    flex-direction: column-reverse;

    button:last-child {
      margin-bottom: 10px;
    }
  }
`;

export const ProfilePageWrapper = styled.div`
  > div:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const ProfileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const Dragger = styled(Upload.Dragger)`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;
`;

const DraggerIcon = styled(Icon)`
  svg {
    width: 50px;
    height: 50px;
  }
  margin-bottom: 10px;
`;
const DraggerText = styled.p``;
const DraggerContainer = styled.div``;
Dragger.Container = DraggerContainer;
Dragger.Icon = DraggerIcon;
Dragger.Text = DraggerText;

export const Avatar = styled(AvaBox)`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  background: #fff;
  cursor: pointer;
  ::before {
    border-radius: 5px;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: 0.3s ease;
  }
  ::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    left: 38px;
    top: 38px;
    opacity: 0;
    transition: 0.3s ease;
    background: url(${uploadIcon});
    background-size: cover;
  }
  :hover::after,
  :hover::before {
    opacity: 1;
  }

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const AccountInfo = styled.div`
  text-align: left;
  margin-left: 20px;

  @media (max-width: 1100px) {
    margin: 20px 0;
    text-align: center;
  }

  div:not(:last-child) {
    margin-bottom: 5px;
  }
`;
const Name = styled.div`
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 500;
  position: relative;

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;
const Email = styled(Name)`
  font-size: 14px;
  font-weight: 400;

  ::before {
    content: "Email:";
    position: relative;
    left: 0;
    top: 0;
    margin-right: 5px;
  }

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
const AccountType = styled(Name)`
  font-size: 16px;
  font-weight: 600;

  ::before {
    font-size: 14px;
    font-weight: 400;
    content: "Account type:";
    position: relative;
    left: 0;
    top: 0;
    margin-right: 5px;
  }

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

AccountInfo.Name = Name;
AccountInfo.Email = Email;
AccountInfo.AccountType = AccountType;

export const AccountStatistics = styled.div`
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;

  @media (max-width: 1100px) {
    align-items: flex-start;
  }
  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StatItem = styled.div`
  :not(:last-child) {
    margin-right: 5%;
  }
  @media (max-width: 460px) {
    :not(:last-child) {
      margin: 0 0 20px 0;
    }
  }
`;
const StatNum = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #070606;
  margin: 0;
  padding-bottom: 15px;

  @media (max-width: 460px) {
    font-size: 18px;
  }
`;

const StatTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #434343;
  margin: 0;

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
const StatCaption = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #434343;
  margin: 0;

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
AccountStatistics.Item = StatItem;
AccountStatistics.Item.Num = StatNum;
AccountStatistics.Item.Title = StatTitle;
AccountStatistics.Item.Caption = StatCaption;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tooltip = styled(AntdTooltip)``;

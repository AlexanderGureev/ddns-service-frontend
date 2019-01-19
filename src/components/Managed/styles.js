import { Layout, Menu, Icon, Input } from "antd";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const logoShow = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const LogoContainer = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 125px;
  height: 120px;
  animation: ${logoShow} 2s ease;
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.4));
`;
const Text = styled.p`
  font-size: 28px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${logoShow} 2s ease;
`;

const LogoLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 160px;
`;

const MiniLogo = styled(Logo)``;

const MenuIcon = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 28px;
  height: auto;
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #fff !important;
  padding-left: 25px;
`;
export const MenuItem = styled(Menu.Item)`
  display: flex !important;
  align-items: center !important;
`;

export const StyledBtn = styled.div`
  position: relative;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
  background: #fff;
  margin: 0 20px;
  transition: 0.3s ease;

  &:hover {
    background: #449ceeb0;
  }
  @media (max-width: 400px) {
    margin: 0 10px;
  }
`;

const BtnIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #707070;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  transition: 0.3s ease;
`;
const BtnText = styled.span`
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 600;
  color: #707070;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  transition: 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const ShortProfile = styled.div`
  width: 100%;
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: space-around;
  animation: ${logoShow} 2s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ProfileAvatar = styled.div`
  width: 90px;
  height: 90px;
  background: url(${props => props.src}) no-repeat center center;
  border-radius: 50%;
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.25));
`;
const ProfileName = styled.p`
  margin: 0;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #fff;
`;
const ProfileEmail = styled(ProfileName)`
  font-size: 15px;
  font-weight: 300;
`;
const ProfileBtn = styled(Icon)`
  position: absolute;
  top: 36px;
  left: 95px;
  font-size: 18px;
  color: #707070;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: -6px;
    top: -6px;
    background: white;
    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
    z-index: -1;
    border-radius: 50%;
  }
`;
export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0;
  position: relative;
  height: 7vh;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled(Input.Search)`
  width: 350px;
  margin: 0 50px;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15));
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #6a6a6a;
  position: relative;

  .ant-input-suffix {
    height: 99%;
  }
  input {
    border: none;
    padding: 10px 20px;
    height: auto;
  }
  button {
    height: 100%;
    background: white;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
    border: none;
    box-shadow: none;

    i {
      color: #707070;
      font-size: 18px !important;
      line-height: 2.7 !important;
    }

    &:hover {
      background: #449ceeb0;
    }
  }

  @media (max-width: 1200px) {
    width: 200px;
  }
`;

export const SideMenuContainer = styled(Sider)`
  transition: none;
  overflow: auto;
  position: fixed;
  left: 0;
  height: 100vh;
  min-height: 600px;
  background: url(${props => props.src}) no-repeat center top !important;
  background-size: cover !important;
  width: 300px;
  .ant-menu {
    background: transparent;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #3b30a191;
  }
  .ant-menu-inline-collapsed > .ant-menu-item {
    padding: 0 25px !important;
  }
`;

export const StyledContent = styled(Content)`
  background: #eeeeee url(${props => props.src}) no-repeat center center;
  background-size: cover;
  height: 93vh;
  min-height: 700px;
`;

LogoContainer.Text = Text;
LogoContainer.Logo = Logo;
LogoContainer.MiniLogo = MiniLogo;
LogoContainer.Link = LogoLink;

StyledBtn.Icon = BtnIcon;
StyledBtn.Text = BtnText;

MenuItem.Icon = MenuIcon;
MenuItem.Link = MenuLink;

StyledHeader.Container = HeaderContainer;

ShortProfile.Button = ProfileBtn;
ShortProfile.Container = Container;
ShortProfile.Avatar = ProfileAvatar;
ShortProfile.Name = ProfileName;
ShortProfile.Email = ProfileEmail;

export const Main = styled.div`
  padding: 20px;
`;

export const ActiveHostnamesWrapper = styled.div`
  background: linear-gradient(135deg, #586cc4, #7343c7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 50px;
  border-radius: 5px;
  margin: 20px 0;
  filter: drop-shadow(5px 15px 15px rgba(0, 0, 0, 0.2));
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

export const UpdatedHostnamesWrapper = styled(ActiveHostnamesWrapper)`
  background: linear-gradient(135deg, #4e8bbc, #3e2ba7);
`;

export const ActiveHostnameContainer = styled.div``;

export const UpdatedHostnameContainer = styled(ActiveHostnameContainer)``;

const BlockCount = styled.span`
  display: block;
  color: #fff;
  font-weight: 800;
  font-size: 25px;
  font-family: "Montserrat";
  margin-bottom: 10px;

  @media (max-width: 560px) {
    font-size: 18px;
  }
`;
const BlockTitle = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: "Montserrat";
  margin: 0;

  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

const BlockText = styled(BlockTitle)`
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

ActiveHostnameContainer.Title = BlockTitle;
ActiveHostnameContainer.Text = BlockText;
ActiveHostnameContainer.Count = BlockCount;

UpdatedHostnameContainer.Title = BlockTitle;
UpdatedHostnameContainer.Text = BlockText;
UpdatedHostnameContainer.Count = BlockCount;

export const AccountOverviewWrapper = styled.div`
  border-radius: 5px;
  background: linear-gradient(to right top, #348eb4, #255bc7);
  filter: drop-shadow(5px 15px 15px rgba(0, 0, 0, 0.2));
  margin: 20px 0;
  padding: 20px 50px;
  text-align: center;

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

export const AccountOverviewTitle = styled(BlockCount)``;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const ContentBlockTitle = styled(BlockText)``;
const ContentBlockText = styled(BlockTitle)``;

export const Footer = styled.div`
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  font-family: "Montserrat";
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.32);
  }

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

ContentBlock.Title = ContentBlockTitle;
ContentBlock.Text = ContentBlockText;

export const InfoBlock = styled.div`
  padding: 20px 50px;
  background: white;
  filter: drop-shadow(5px 15px 15px rgba(0, 0, 0, 0.2));
  border-radius: 5px;

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

const InfoBlockTitle = styled.p`
  color: #707070;
  font-weight: 600;
  font-size: 16px;
  font-family: "Montserrat";
`;
const InfoBlockText = styled(InfoBlockTitle)`
  font-weight: 400;
  font-size: 14px;
  margin: 0;

  @media (max-width: 376px) {
    font-size: 12px;
  }
`;

InfoBlock.Title = InfoBlockTitle;
InfoBlock.Text = InfoBlockText;

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

const MenuText = styled.span`
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #fff;
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
  height: 75px;
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
  }

  @media (max-width: 1200px) {
    width: 200px;
  }
`;

export const SideMenuContainer = styled(Sider)`
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
  min-height: 280px;
`;

LogoContainer.Text = Text;
LogoContainer.Logo = Logo;
LogoContainer.MiniLogo = MiniLogo;
LogoContainer.Link = LogoLink;

StyledBtn.Icon = BtnIcon;
StyledBtn.Text = BtnText;

MenuItem.Icon = MenuIcon;
MenuItem.Text = MenuText;

StyledHeader.Container = HeaderContainer;

ShortProfile.Button = ProfileBtn;
ShortProfile.Container = Container;
ShortProfile.Avatar = ProfileAvatar;
ShortProfile.Name = ProfileName;
ShortProfile.Email = ProfileEmail;

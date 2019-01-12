import styled from "styled-components";
import { ParallaxLayer } from "react-spring/addons";
import { Row } from "antd";

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

export const ShortForm = styled.form`
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const HeaderForm = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  color: #fff;

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 870px) {
    font-size: 25px;
  }

  @media (max-width: 470px) {
    font-size: 20px;
    text-align: center;
    padding: 0 20px;
  }
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

  @media (max-width: 1200px) {
    padding: 10px 20px;
  }
  @media (max-width: 870px) {
    margin: 0 0 20px 0;
  }
  @media (max-width: 470px) {
    font-size: 14px;
    padding: 5px 15px;
  }

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
  padding: 10px 60px;
  outline: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding: 10px 40px;
  }
  @media (max-width: 470px) {
    font-size: 16px;
    padding: 5px 25px;
  }

`;

export const ContentColumn = styled.div`

`;

const Head = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 20px 0;
  color: #fff;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 870px) {
    font-size: 20px;
  }
  @media (max-width: 470px) {
    font-size: 18px;
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
  transition: .3s ease;
  &:hover {
    color: #2868D7;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 870px) {
    font-size: 16px;
  }
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;

ContentColumn.Head = Head;
ContentColumn.List = List;
ContentColumn.ListItem = Item;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SocialBarIcon = styled.div`
  background: url(${ props => props.src }) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-left: -5px;
  cursor: pointer;
`;

SocialContainer.Icon = SocialBarIcon;

export const MiniLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    height: 100px;
  }
`;

const Logo = styled.img.attrs(({ src }) => ({ src }))`
 @media (max-width: 960px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 760px) {
    width: 120px;
    height: 120px;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: 800;

  @media (max-width: 960px) {
    font-size: 20px;
  }
  
`;

MiniLogo.Logo = Logo;
MiniLogo.Text = Text;

export const Copyright = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
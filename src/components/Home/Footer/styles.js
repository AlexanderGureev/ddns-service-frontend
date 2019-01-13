import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
`;

export const FooterTopWrapper = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 100%;
  position: absolute;
  top: -460px;
  height: 1060px;
  display: flex;
  justify-content: center;
`;
export const FooterMidWrapper = styled(FooterTopWrapper)`
  display: block;
  top: 600px;
  height: 680px;
`;

export const FooterMidContainer = styled.div`
  display: block;
  position: relative;
`;

export const FooterBottomContainer = styled.div`
  position: relative;
  top: 1125px;
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
  position: absolute;
  top: 450px;
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
    font-size: 30px;
  }

  @media (max-width: 470px) {
    font-size: 25px;
    text-align: center;
    padding: 0 20px;
  }
`;

export const Input = styled.input`
  border: none;
  color: #8f8f8f;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.35));
  font-size: 16px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 30px;
  margin-right: 20px;
  outline: none;

  @media (max-width: 870px) {
    width: 320px;
    margin: 0 0 20px 0;
  }
  @media (max-width: 470px) {
    font-size: 14px;
    width: 250px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(140deg, #2c3ff9, #3673f1);
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

  @media (max-width: 1200px) {
    padding: 10px 40px;
  }
`;

export const ContentColumn = styled.div``;

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
    margin: 15px 0;
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
  transition: 0.3s ease;
  &:hover {
    color: #2868d7;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 870px) {
    font-size: 16px;
  }
  @media (max-width: 870px) {
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
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-left: -5px;
  cursor: pointer;

  @media (max-width: 960px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 780px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 470px) {
    width: 30px;
    height: 30px;
  }
`;

SocialContainer.Icon = SocialBarIcon;

export const MiniLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 100px;
  position: relative;
  top: 40px;

  @media (max-width: 1200px) {
    top: 55px;
    width: 300px;
    height: 90px;
  }
  @media (max-width: 760px) {
    width: 240px;
    left: -15px;
  }
`;

const Logo = styled.img.attrs(({ src }) => ({ src }))`
  height: 120px;

  @media (max-width: 1200px) {
    height: 90px;
  }
  @media (max-width: 760px) {
    width: 100px;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: 800;

  @media (max-width: 760px) {
    font-size: 23px;
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
  padding-top: 80px;

  @media (max-width: 960px) {
    font-size: 14px;
  }
`;

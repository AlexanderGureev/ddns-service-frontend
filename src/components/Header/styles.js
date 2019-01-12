import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 100%;
`;

export const HeaderImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  z-index: -1;
`;

export const MenuBtnWrapper = styled.div`
  cursor: pointer;
  z-index: 1;
`;

export const MenuBtn = styled.img.attrs(({ src }) => ({ src }))`
  width: 35px;
  height: auto;
`;

export const LeftPartWrapper = styled.div`
  position: absolute;
  width: 700px;
  height: 60%;
  top: 40px;
  left: 100px;

  @media (max-width: 570px) {
    left: 30px;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 700px;
  top: 130px;

  @media (max-width: 1800px) {
    width: 600px;
  }
  @media (max-width: 1400px) {
    width: 500px;
  }
  @media (max-width: 570px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Logo = styled.img.attrs(({ src }) => ({ src }))`
  width: 640px;
  height: auto;
  filter: drop-shadow(5px 35px 15px rgba(0, 0, 0, 0.05));

  @media (max-width: 1800px) {
    width: 540px;
  }
  @media (max-width: 1400px) {
    width: 460px;
  }
  @media (max-width: 760px) {
    width: 360px;
  }
  @media (max-width: 570px) {
    width: 320px;
    margin-left: 50px;
  }
  @media (max-width: 400px) {
    width: 290px;
    margin-left: 30px;
  }
`;
export const HeaderContentText = styled.div`
  font-size: 18px;
  font-family: "Montserrat";
  color: #707070;
  padding: 30px 0;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 760px) {
    font-size: 14px;
  }
  @media (max-width: 570px) {
    text-align: center;
  }
`;
export const HeaderButton = styled.button`
  background: linear-gradient(140deg, rgba(17, 148, 232), rgb(120, 170, 245));
  color: white;
  text-transform: uppercase;
  padding: 13px 60px;
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;

  @media (max-width: 760px) {
    padding: 10px 40px;
    font-size: 18px;
  }
  @media (max-width: 570px) {
    padding: 10px 30px;
    font-size: 16px;
  }
`;

export const ScrollBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(180deg, #2c3d89, #3b51b2);
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.35));
  cursor: pointer;
  width: 60px;
  height: 60px;
  &::before {
    content: "";
    background: url(${props => props.src}) no-repeat center center;
    background-size: contain;
    display: block;
    width: 40px;
    height: 40px;
    left: 10px;
    top: 10px;
    position: absolute;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
    @media (max-width: 1200px) {
      width: 30px;
      height: 30px;
      left: 10px;
      top: 10px;
    }
  }
  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 570px) {
    left: 45%;
  }
`;

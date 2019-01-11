import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-height: 700px;
  height: 100vh;
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
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 700px;
  top: 130px;
`;
export const Logo = styled.img.attrs(({ src }) => ({ src }))`
  width: 640px;
  height: auto;
  filter: drop-shadow(5px 35px 15px rgba(0,0,0, .05));
`;
export const HeaderContentText = styled.div`
  font-size: 18px;
  font-family: "Montserrat";
  color: #707070;
  padding: 30px 0;
`;
export const HeaderButton = styled.button`
  background: linear-gradient(140deg,rgba(17,148,232),rgb(120, 170, 245));
  color: white;
  text-transform: uppercase;
  padding: 13px 60px;
  filter: drop-shadow(5px 10px 25px rgba(0,0,0, .25));
  cursor: pointer;
  border:none;
  border-radius: 30px;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;
`;

export const ScrollBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(180deg, #2C3D89, #3B51B2);
  filter: drop-shadow(5px 10px 25px rgba(0,0,0, .35));
  cursor: pointer;
  width: 60px;
  height: 60px;
  &::before {
    content: "";
    background: url(${ props => props.src }) no-repeat center center;
    background-size: contain;
    display: block;
    width: 40px;
    height: 40px;
    left: 10px;
    top: 10px;
    position: absolute;
    filter: drop-shadow(0px 5px 5px rgba(0,0,0,.25));
  }
`;
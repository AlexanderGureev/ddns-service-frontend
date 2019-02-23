import styled from "styled-components";
import React from "react";
import { Button as StyledBtn } from "../../Common/styles";

export const PricingContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1500px) {
    padding: 30px;
    justify-content: space-between;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 30px 0;
    > div:not(:last-child) {
      margin-bottom: 50px;
    }
  }
  @media (max-width: 460px) {
    padding: 0;
    > div:not(:last-child) {
      margin: 0;
    }
  }
`;

const PriceCardContainer = styled.div``;
export const PriceCard = styled.div`
  box-shadow: ${props =>
    props.primary ? "0 20px 60px rgba(0,0,0, .15)" : "none"};
  padding: ${props => (props.primary ? "20px 90px 40px" : "20px 0px 40px")};
  border-radius: 10px;

  @media (max-width: 1500px) {
    padding: ${props => (props.primary ? "20px 40px 40px" : "20px 0px 40px")};
  }
  @media (max-width: 460px) {
    box-shadow: none;
    padding: 20px 0 40px;
  }
`;

const IconContainer = styled.div`
  svg {
    width: 180px;
    @media (max-width: 1500px) {
      width: 150px;
    }
    @media (max-width: 460px) {
      width: 120px;
    }
  }
`;
const Icon = ({ component: Component }) => (
  <IconContainer>
    <Component />
  </IconContainer>
);

const Price = styled.div`
  font-size: 55px;
  font-weight: 700;
  position: relative;
  color: #313131;
  display: inline-block;

  ::after {
    content: "/mo";
    font-size: 25px;
    position: relative;
    right: -5px;
    bottom: 2px;
  }
  ::before {
    content: "$";
    font-size: 25px;
    position: relative;
    left: -5px;
    bottom: 2px;
  }

  @media (max-width: 1500px) {
    font-size: 45px;
    ::before {
      font-size: 20px;
    }
    ::after {
      font-size: 20px;
    }
  }
  @media (max-width: 890px) {
    font-size: 30px;
    ::before {
      font-size: 18px;
    }
    ::after {
      font-size: 18px;
    }
  }
`;

const PlanName = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #313131;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 1500px) {
    font-size: 25px;
  }

  @media (max-width: 890px) {
    font-size: 20px;
  }
`;

const DescriptionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  margin: 60px 0 70px 0;
  li:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Item = styled.li`
  color: #313131;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding-left: 25px;
  display: flex;
  align-items: center;
  ::before {
    content: "";
    display: block;
    min-width: 15px;
    min-height: 15px;
    background: url(${props => props.src}) no-repeat center center;
    background-size: contain;
    position: relative;
    left: -20px;
    top: 0px;
  }

  @media (max-width: 1500px) {
    font-size: 14px;
  }

  @media (max-width: 890px) {
    font-size: 12px;
  }
`;

export const Button = styled(StyledBtn)`
  && {
    background: linear-gradient(135deg, #5780f2, #cc5df3);
    text-transform: uppercase;

    font-size: 18px;
    box-shadow: ${props =>
      props.disabled
        ? "0 15px 20px rgba(0,0,0,.1)"
        : "0 15px 20px rgba(45, 64, 228, 0.15)"};
    max-width: 260px;

    :hover,
    :focus {
      background: ${props =>
        props.disabled
          ? "rgba(0,0,0, .3)"
          : "linear-gradient(135deg, #5780f2, #cc5df3)"};
      box-shadow: ${props =>
        props.disabled
          ? "0 15px 20px rgba(0,0,0,.1)"
          : "0 15px 20px rgba(45, 64, 228, 0.15)"};
    }

    @media (max-width: 890px) {
      font-size: 16px;
    }
    @media (max-width: 460px) {
      font-size: 14px;
    }
  }
`;

const PriceCardLink = styled.span`
  text-align: center;
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: #2c69cd;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    color: #3f4349;
  }
`;
DescriptionList.Item = Item;
PriceCard.Icon = Icon;
PriceCard.Price = Price;
PriceCard.PlanName = PlanName;
PriceCard.DescriptionList = DescriptionList;
PriceCard.Container = PriceCardContainer;
PriceCard.Link = PriceCardLink;

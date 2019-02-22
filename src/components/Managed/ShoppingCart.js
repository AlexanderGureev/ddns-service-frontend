import React from "react";
import { Dropdown } from "antd";
import { ReactComponent as shopIcon } from "./img/shop-icon.svg";
import {
  Icon,
  Badge,
  CartBody,
  CartContainer,
  NoContent,
  CartTitle as Title,
  CartCaption as Caption,
  CartButton as Button
} from "./styles";

const content = (
  <CartContainer>
    <CartBody>
      <NoContent>
        <Title>Your cart is empty</Title>
        <Caption>Add a service to continue</Caption>
      </NoContent>
      <Button>Continue to checkout</Button>
    </CartBody>
  </CartContainer>
);

const ShoppingCart = () => (
  <Badge count={0} showZero>
    <Dropdown overlay={content} trigger={["click"]}>
      <Icon component={shopIcon} />
    </Dropdown>
  </Badge>
);
export default ShoppingCart;

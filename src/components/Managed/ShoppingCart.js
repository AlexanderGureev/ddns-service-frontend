import React, { useState } from "react";
import { Dropdown } from "antd";
import { useStore, useAction } from "easy-peasy";
import debounce from "lodash/debounce";
import { ReactComponent as DeleteIcon } from "./img/delete.svg";

import {
  Badge,
  CartBody,
  CartContainer,
  NoContent,
  NoContentCartTitle as Title,
  NoContentCartCaption as Caption,
  CartButton as Button,
  CartItem,
  CartContent,
  CartTitle
} from "./styles";

const CartItemComponent = ({
  id,
  name,
  months,
  price,
  onRemove,
  onUpdateItemCart
}) => {
  const [totalPrice, setTotalPrice] = useState(price * months);

  const handleChange = (value = 1) => {
    setTotalPrice(price * value);
    onUpdateItemCart({ id, name, months: value, price });
  };

  return (
    <CartItem>
      <CartItem.Label>
        Name
        <CartItem.Name>{name}</CartItem.Name>
      </CartItem.Label>
      <CartItem.Label>
        Months
        <CartItem.Input
          min={1}
          onChange={handleChange}
          defaultValue={months}
          size="small"
        />
      </CartItem.Label>
      <CartItem.Label>
        Total Price
        <CartItem.Price>{totalPrice}</CartItem.Price>
      </CartItem.Label>
      <CartItem.Btn component={DeleteIcon} onClick={() => onRemove(id)} />
    </CartItem>
  );
};
const Content = props => {
  const { cart } = useStore(state => state.session);
  const { removeItemFromCartAction, updateItemInCartAction } = useAction(
    dispatch => dispatch.session
  );

  const debouncedUpdateCart = debounce(updateItemInCartAction, 1000);
  const onRemove = id => removeItemFromCartAction(id);

  return (
    <CartContainer>
      <CartBody>
        {cart.length ? (
          <>
            <CartTitle>You’ve added (1 item)</CartTitle>
            <CartContent>
              {cart.map(item => (
                <CartItemComponent
                  key={item.id}
                  {...item}
                  onRemove={onRemove}
                  onUpdateItemCart={debouncedUpdateCart}
                />
              ))}
            </CartContent>
          </>
        ) : (
          <NoContent>
            <Title>Your cart is empty</Title>
            <Caption>Add a service to continue</Caption>
          </NoContent>
        )}
        <Button disabled={!cart.length}>Continue to checkout</Button>
      </CartBody>
    </CartContainer>
  );
};

const ShoppingCart = ({ children, noBadge = false }) => {
  const [visible, setVisible] = useState(false);
  const { cart } = useStore(state => state.session);

  const handleVisibleChange = e => setVisible(!visible);

  return noBadge ? (
    <Dropdown
      overlay={<Content />}
      onVisibleChange={handleVisibleChange}
      trigger={["click"]}
      visible={visible}
    >
      {children}
    </Dropdown>
  ) : (
    <Badge count={cart.length} showZero>
      <Dropdown
        overlay={<Content />}
        onVisibleChange={handleVisibleChange}
        trigger={["click"]}
        visible={visible}
      >
        {children}
      </Dropdown>
    </Badge>
  );
};

export default ShoppingCart;

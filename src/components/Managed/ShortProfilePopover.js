import React from "react";
import { useMedia } from "react-use";
import { ShortProfileContainer } from "./styles";
import ShoppingCart from "./ShoppingCart";

const ShortProfilePopover = ({ logout = () => {} }) => {
  const isMediumSize = useMedia("(max-width: 1200px)");

  return (
    <ShortProfileContainer>
      <ShortProfileContainer.List>
        <ShortProfileContainer.Item>
          <ShortProfileContainer.Item.Icon type="user" />
          <ShortProfileContainer.Item.Text>
            Account
          </ShortProfileContainer.Item.Text>
        </ShortProfileContainer.Item>
        <ShortProfileContainer.Item>
          <ShortProfileContainer.Item.Icon type="exception" />
          <ShortProfileContainer.Item.Text>
            Invoices
          </ShortProfileContainer.Item.Text>
        </ShortProfileContainer.Item>

        {isMediumSize && (
          <>
            <ShortProfileContainer.Item>
              <ShortProfileContainer.Item.Icon type="bell" />
              <ShortProfileContainer.Item.Text>
                Notification
              </ShortProfileContainer.Item.Text>
            </ShortProfileContainer.Item>

            <ShoppingCart noBadge>
              <ShortProfileContainer.Item>
                <ShortProfileContainer.Item.Icon type="shopping-cart" />
                <ShortProfileContainer.Item.Text>
                  Purchases
                </ShortProfileContainer.Item.Text>
              </ShortProfileContainer.Item>
            </ShoppingCart>

            <ShortProfileContainer.Item>
              <ShortProfileContainer.Item.Icon type="global" />
              <ShortProfileContainer.Item.Text>
                Language
              </ShortProfileContainer.Item.Text>
            </ShortProfileContainer.Item>
          </>
        )}

        <ShortProfileContainer.Item onClick={logout}>
          <ShortProfileContainer.Item.Icon type="logout" />
          <ShortProfileContainer.Item.Link>
            Log out
          </ShortProfileContainer.Item.Link>
        </ShortProfileContainer.Item>
      </ShortProfileContainer.List>
    </ShortProfileContainer>
  );
};

export default ShortProfilePopover;

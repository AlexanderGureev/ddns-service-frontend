import React from "react";
import { ShortProfileContainer } from "./styles";

const ShortProfilePopover = ({ logout }) => (
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
      <ShortProfileContainer.Item onClick={logout}>
        <ShortProfileContainer.Item.Icon type="logout" />
        <ShortProfileContainer.Item.Link>
          Log out
        </ShortProfileContainer.Item.Link>
      </ShortProfileContainer.Item>
    </ShortProfileContainer.List>
  </ShortProfileContainer>
);

export default ShortProfilePopover;

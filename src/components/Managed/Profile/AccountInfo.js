import React from "react";
import { AccountInfo, Tooltip } from "./styles";

const AccountInfoComponent = ({
  email = "-",
  firstName = "",
  lastName = ""
}) => (
  <AccountInfo>
    <AccountInfo.Name>{`${firstName} ${lastName}`}</AccountInfo.Name>
    <AccountInfo.Email>{email}</AccountInfo.Email>
    <Tooltip title="Account type..." placement="right">
      <AccountInfo.AccountType>free</AccountInfo.AccountType>
    </Tooltip>
  </AccountInfo>
);

export default AccountInfoComponent;

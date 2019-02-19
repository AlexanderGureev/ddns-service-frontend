import React from "react";
import { AccountStatistics } from "./styles";

const data = [
  {
    num: 0,
    title: "Active",
    caption: "hostnames"
  },
  {
    num: 0,
    title: "Active",
    caption: "updates detected"
  },
  {
    num: 0,
    title: "Registered",
    caption: "domains"
  }
];
const AccountStat = () => (
  <AccountStatistics>
    {data.map(({ num, title, caption }, i) => (
      <AccountStatistics.Item key={i}>
        <AccountStatistics.Item.Num>{num}</AccountStatistics.Item.Num>
        <AccountStatistics.Item.Title>{title}</AccountStatistics.Item.Title>
        <AccountStatistics.Item.Caption>
          {caption}
        </AccountStatistics.Item.Caption>
      </AccountStatistics.Item>
    ))}
  </AccountStatistics>
);

export default AccountStat;

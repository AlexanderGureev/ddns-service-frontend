import React from "react";
import { BackTop as AntdBackTop } from "antd";

const BackTop = () => (
  <AntdBackTop target={() => document.querySelector(".ant-anchor-wrapper")} />
);

export default BackTop;

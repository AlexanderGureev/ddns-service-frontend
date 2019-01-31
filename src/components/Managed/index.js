import React, { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { Layout } from "./styles";

import SideBlock from "./SideBlock";
import Header from "./Header";
import Content from "./Content";

const Managed = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const isSmallSize = useMedia("(max-width: 800px)");

  const toggleSideMenu = () => setCollapsed(!collapsed);
  const handleVisibleChange = () => setVisible(!visible);

  useEffect(
    () => {
      if (isSmallSize && !collapsed) {
        toggleSideMenu();
      }
    },
    [isSmallSize]
  );

  return (
    <Layout>
      <SideBlock collapsed={collapsed} toggleSideMenu={toggleSideMenu} />
      <Layout>
        <Header
          collapsed={collapsed}
          visible={visible}
          toggleSideMenu={toggleSideMenu}
          handleVisibleChange={handleVisibleChange}
        />
        <Content {...props} />
      </Layout>
    </Layout>
  );
};

export default Managed;

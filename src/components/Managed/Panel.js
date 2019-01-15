import React, { useState } from "react";
import { useMedia } from "react-use";
import { Layout } from "antd";
import Content from "./Content";
import SideMenu from "./SideMenu";
import Header from "./Header";

const Panel = props => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleVisible = () => setVisible(!visible);
  const toggleClicked = () => setClicked(!clicked);

  const isMedium = useMedia("(max-width: 920px)");

  if (isMedium && !visible && !clicked) {
    setVisible(true);
  }

  return (
    <Layout>
      <SideMenu visible={visible} />
      <Layout>
        <Header toggleVisible={toggleVisible} toggleClicked={toggleClicked} />
        <Content />
      </Layout>
    </Layout>
  );
};

export default Panel;

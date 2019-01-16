import React, { useState } from "react";
import { useMedia } from "react-use";
import { Layout } from "antd";
import Content from "./Content";
import SideMenu from "./SideMenu";
import Header from "./Header";

const Panel = props => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [margin, setMargin] = useState(300);

  const toggleVisible = () => {
    setVisible(!visible);
    setMargin(visible ? 300 : 80);
  };
  const toggleClicked = () => setClicked(!clicked);

  const isMedium = useMedia("(max-width: 920px)");

  if (isMedium && !visible && !clicked) {
    setVisible(true);
    setMargin(80);
  }

  return (
    <Layout>
      <SideMenu visible={visible} />
      <Layout style={{ marginLeft: margin, transition: ".2s ease" }}>
        <Header toggleVisible={toggleVisible} toggleClicked={toggleClicked} />
        <Content {...props} />
      </Layout>
    </Layout>
  );
};

export default Panel;

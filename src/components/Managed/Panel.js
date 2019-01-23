import React, { useState } from "react";
import { useMedia } from "react-use";
import { Layout } from "antd";
import { FixedLayout } from "./styles";
import Content from "./Content";
import SideMenu from "./SideMenu";
import Header from "./Header";

const Panel = props => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const isMedium = useMedia("(max-width: 920px)");

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const toggleClicked = () => setClicked(!clicked);

  if (isMedium && !visible && !clicked) {
    setVisible(true);
  }

  return (
    <FixedLayout>
      <SideMenu visible={visible} {...props} />
      <Layout>
        <Header toggleVisible={toggleVisible} toggleClicked={toggleClicked} />
        <Content {...props} />
      </Layout>
    </FixedLayout>
  );
};

export default Panel;

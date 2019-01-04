import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "./blocks/Header";
import Content from "./blocks/Content";

import "antd/dist/antd.css";

const App = () => {
  return (
    <Fragment>
      <Header>
        <Header.LeftPart />
        <Header.RightPart />
      </Header>
      <Content />
    </Fragment>
  );
};

export default App;

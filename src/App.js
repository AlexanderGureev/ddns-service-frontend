import React from "react";
import styled from "styled-components";
import Header from "./blocks/Header";

import "antd/dist/antd.css";


const App = () => {
  return (
    <Header>
      <Header.LeftPart />
      <Header.RightPart />
    </Header>
  );
};

export default App;

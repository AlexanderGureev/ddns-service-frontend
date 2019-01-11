import React, { useRef } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Parallax } from "react-spring/addons";
import { AppContext } from "./Context";

import "antd/dist/antd.css";

const App = () => {
  let parallaxLayer = useRef(null);

  return (
    <AppContext.Provider value={{ parallaxLayer }}>
      <Parallax pages={3.2} scrolling={true} ref={parallaxLayer}>
        <Header />
        <Content />
        <Footer />
      </Parallax>
    </AppContext.Provider>
  );
};

export default App;

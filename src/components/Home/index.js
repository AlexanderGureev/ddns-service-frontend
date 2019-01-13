import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { AppContext } from "../../Context";

import "antd/dist/antd.css";

const Home = () => {
  return (
    <AppContext.Provider value={{}}>
      <Header />
      <Content />
      <Footer />
    </AppContext.Provider>
  );
};

export default Home;

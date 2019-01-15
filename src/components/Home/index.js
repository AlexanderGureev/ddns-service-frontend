import "antd/dist/antd.css";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { AppContext } from "../../Context";

const Home = () => (
  <AppContext.Provider value={{}}>
    <Header />
    <Content />
    <Footer />
  </AppContext.Provider>
);

export default Home;

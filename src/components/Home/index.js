import "antd/dist/antd.css";
import React from "react";
import { BackTop } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AppContext from "../../Context";

const Home = () => (
  <AppContext.Provider value={{}}>
    <Header />
    <Content />
    <Footer />
    <BackTop />
  </AppContext.Provider>
);

export default Home;

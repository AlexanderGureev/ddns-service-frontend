import React from "react";
import { Anchor } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import BackTop from "./Common/BackTop";

const Home = props => (
  <Anchor>
    <BackTop />
    <Header />
    <Content />
    <Footer />
  </Anchor>
);

export default Home;

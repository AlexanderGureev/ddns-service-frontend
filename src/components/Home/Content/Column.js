import React from "react";
import styled from "styled-components";
import { Head, Text, LinkMore, Image } from "./styles";

const Column = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const ContentColumn = styled(Column)`
  text-align: center;
  color: white;
  font-family: "Montserrat";
`;

ContentColumn.Head = Head;
ContentColumn.Text = Text;
ContentColumn.LinkMore = LinkMore;
ContentColumn.Image = Image;

export default ContentColumn;

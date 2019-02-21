import React from "react";
import { Content as StyledContent } from "../styles";
import { Title } from "../Profile/styles";
import hostnameIcon from "./img/hostname.svg";

import HostnamesTable from "./HostnamesTable";

const HostnamePage = () => (
  <StyledContent.Wrapper>
    <Title icon={hostnameIcon}>Hostnames</Title>
    <HostnamesTable />
  </StyledContent.Wrapper>
);

export default HostnamePage;

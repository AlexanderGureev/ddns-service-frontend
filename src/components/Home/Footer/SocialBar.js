import React from "react";
import vkIcon from "./img/soc-vk.svg";
import fbIcon from "./img/soc-fb.svg";
import googleIcon from "./img/soc-google.svg";
import yandexIcon from "./img/soc-yandex.svg";
import { SocialContainer } from "./styles";

const SocialBar = () => (
  <SocialContainer>
    <SocialContainer.Icon src={vkIcon} />
    <SocialContainer.Icon src={fbIcon} />
    <SocialContainer.Icon src={yandexIcon} />
    <SocialContainer.Icon src={googleIcon} />
  </SocialContainer>
);

export default SocialBar;

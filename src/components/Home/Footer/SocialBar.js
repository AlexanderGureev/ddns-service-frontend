import React from "react";
import vkIcon from "./img/soc-vk.svg";
import fbIcon from "./img/soc-fb.svg";
import googleIcon from "./img/soc-google.svg";
import yandexIcon from "./img/soc-yandex.svg";
import { SocialContainer } from "./styles";

const SocialBar = () => (
  <SocialContainer>
    <SocialContainer.Icon src={vkIcon} alt="vk" />
    <SocialContainer.Icon src={fbIcon} alt="facebook" />
    <SocialContainer.Icon src={yandexIcon} alt="yandex" />
    <SocialContainer.Icon src={googleIcon} alt="google" />
  </SocialContainer>
);

export default SocialBar;

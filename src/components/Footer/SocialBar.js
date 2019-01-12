import React from "react";
import { SocialContainer } from "./styles";
import twitterIcon from "./img/twitter.svg";
import telegramIcon from "./img/telegram.svg";
import vkIcon from "./img/vk.svg";
import facebookIcom from "./img/facebook.svg";

const SocialBar = () => {
  return (
    <SocialContainer>
      <SocialContainer.Icon src={vkIcon} />
      <SocialContainer.Icon src={facebookIcom} />
      <SocialContainer.Icon src={twitterIcon} />
      <SocialContainer.Icon src={telegramIcon} />
    </SocialContainer>
  )
}

export default SocialBar;
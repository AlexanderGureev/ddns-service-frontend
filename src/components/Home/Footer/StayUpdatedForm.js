import React from "react";
import { Icon } from "antd";
import { StayUpdatedForm } from "./styles";
import { ReactComponent as EmailInputIcon } from "./img/email-input-icon.svg";
import { ReactComponent as RightArrowIcon } from "./img/right-arrow.svg";

const Form = () => (
  <StayUpdatedForm>
    <StayUpdatedForm.Icon />
    <StayUpdatedForm.Header>Stay updated!</StayUpdatedForm.Header>
    <StayUpdatedForm.Input
      type="text"
      placeholder="Your Email"
      prefix={<Icon component={EmailInputIcon} />}
      enterButton={<Icon component={RightArrowIcon} />}
    />
  </StayUpdatedForm>
);

export default Form;

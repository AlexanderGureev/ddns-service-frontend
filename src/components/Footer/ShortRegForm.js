import React from "react";
import { FormWrapper, HeaderForm, Input, Button } from "./styles";
import { StyledParallaxLayer, ShortForm } from "./styles";

const ShortRegForm = () => {
  return (
    <StyledParallaxLayer offset={0.45} speed={0}>
      <FormWrapper>
        <HeaderForm>Create Your Hostname Now</HeaderForm>
        <ShortForm>
          <Input type="text" placeholder="Hostname" />
          <Input type="text" placeholder=".ddns.com" />
          <Button>Sign Up</Button>
        </ShortForm>
      </FormWrapper>
    </StyledParallaxLayer>
  );
};

export default ShortRegForm;

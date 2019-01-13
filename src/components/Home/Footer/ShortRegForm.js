import React from "react";
import { FormWrapper, HeaderForm, Input, Button } from "./styles";
import { ShortForm } from "./styles";

const ShortRegForm = () => {
  return (
    <FormWrapper>
      <HeaderForm>Create Your Hostname Now</HeaderForm>
      <ShortForm>
        <Input type="text" placeholder="Hostname" />
        <Input type="text" placeholder=".ddns.com" />
        <Button>Sign Up</Button>
      </ShortForm>
    </FormWrapper>
  );
};

export default ShortRegForm;

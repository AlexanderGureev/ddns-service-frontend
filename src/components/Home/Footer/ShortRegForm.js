import React from "react";
import { FormWrapper, HeaderForm, Input, Button, ShortForm } from "./styles";

const ShortRegForm = () => (
  <FormWrapper>
    <HeaderForm>Create Your Hostname Now</HeaderForm>
    <ShortForm>
      <Input type="text" placeholder="Hostname" />
      <Input type="text" placeholder=".ddns.com" />
      <Button>Sign Up</Button>
    </ShortForm>
  </FormWrapper>
);

export default ShortRegForm;

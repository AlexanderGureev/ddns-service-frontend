import React from "react";
import { FormWrapper, HeaderForm, Input, Button } from "./styles";

const ShortRegForm = () => {
  return (
    <FormWrapper>
      <HeaderForm>Create Your Hostname Now</HeaderForm>
      <form>
        <Input type="text" placeholder="Hostname"/>
        <Input type="text" placeholder=".ddns.com"/>
        <Button>Sign Up</Button>
      </form>
    </FormWrapper>
  );
}

export default ShortRegForm;
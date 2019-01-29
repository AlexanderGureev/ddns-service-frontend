import React from "react";
import { Form } from "antd";
import {
  FormWrapper,
  HeaderForm,
  Input,
  ButtonLink,
  ShortForm,
  Select
} from "./styles";
import { DecoratedFormItem } from "../../Auth/DecoratedFormItem";

const ShortRegForm = ({ form }) => (
  <FormWrapper>
    <HeaderForm>Create Your Hostname Now</HeaderForm>
    <ShortForm>
      <DecoratedFormItem type="hostname" form={form}>
        <Input type="text" placeholder="Hostname" />
      </DecoratedFormItem>

      <DecoratedFormItem type="domain" form={form}>
        <Select>
          <Select.Option value=".shrt.zone">.shrt.zone</Select.Option>
        </Select>
      </DecoratedFormItem>

      <ButtonLink
        to={{ pathname: "/login", state: { data: form.getFieldsValue() } }}
      >
        Sign Up
      </ButtonLink>
    </ShortForm>
  </FormWrapper>
);

export default Form.create()(ShortRegForm);

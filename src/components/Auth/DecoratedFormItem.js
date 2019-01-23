import React from "react";
import { Form } from "./styles";

const compareToFirstPassword = form => (rule, value, callback) => {
  if (value && value !== form.getFieldValue("password")) {
    callback("Two passwords that you enter is inconsistent!");
  } else {
    callback();
  }
};
const hostnameValidate = form => (rule, value, callback) => {
  if (form.getFieldValue("createLater")) {
    callback();
    return;
  }
  if (!value) {
    callback("Please input your hostname.");
  } else {
    callback();
  }
};
const policyConfirmValidate = form => (rule, value, callback) => {
  if (!value) {
    callback("Please accept the Privacy Policy.");
  } else {
    callback();
  }
};

const validateRules = (type, form) => {
  const inputs = {
    email: {
      rules: [
        {
          type: "email",
          message: "The input is not valid E-mail!"
        },
        { required: true, message: "Please input your email." }
      ]
    },
    password: {
      rules: [{ required: true, message: "Please input your password." }]
    },
    confirm: {
      rules: [
        {
          required: true,
          message: "Please confirm your password."
        },
        { validator: compareToFirstPassword(form) }
      ]
    },
    hostname: {
      rules: [{ validator: hostnameValidate(form) }],
      hidden: form.getFieldValue("createLater")
    },
    policyConfirm: { rules: [{ validator: policyConfirmValidate(form) }] },
    createLater: { initialValue: false }
  };

  return inputs[type];
};

const DecoratedFormItem = props => {
  const { render, type, form } = props;

  return form.getFieldDecorator(type, validateRules(type, form))(render());
};

export default DecoratedFormItem;

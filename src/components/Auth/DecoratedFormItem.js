import React from "react";
import { Form } from "./styles";

const compareToFirstPassword = form => (rule, value, callback) => {
  if (value && value !== form.getFieldValue("password1")) {
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

const policyСonfirmValidate = form => (rule, value, callback) => {
  if (!value) {
    callback("");
  } else {
    callback();
  }
};

const getOptions = (type, form) => {
  const rules = {
    email: {
      rules: [
        {
          type: "email",
          message: "The input is not valid E-mail!"
        },
        { whitespace: true, message: "The string cannot contain spaces" },
        { required: true, message: "Please input your email." }
      ]
    },
    password1: {
      rules: [
        { required: true, message: "Please input your password." },
        {
          pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?!.*\\s).{8,}$",
          message:
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number and without spaces"
        }
      ]
    },
    password2: {
      rules: [
        {
          required: true,
          message: "Please confirm your password."
        },
        { validator: compareToFirstPassword(form) }
      ]
    },
    hostname: {
      rules: [
        { validator: hostnameValidate(form) },
        {
          pattern:
            "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$",
          message: "The input is not valid Hostname!"
        }
      ],
      hidden: form.getFieldValue("createLater")
    },
    policyСonfirm: { rules: [{ validator: policyСonfirmValidate(form) }] },
    createLater: { initialValue: false },
    domain: {
      initialValue: ".shrt.zone",
      hidden: form.getFieldValue("createLater")
    }
  };

  return rules[type];
};

export const DecoratedFormItem = ({ type, form, children, decorate = true }) =>
  decorate ? (
    <Form.Item>
      {form.getFieldDecorator(type, { ...getOptions(type, form) })(children)}
    </Form.Item>
  ) : (
    form.getFieldDecorator(type, { ...getOptions(type, form) })(children)
  );

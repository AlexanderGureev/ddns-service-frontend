import React from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
import { Form as AntdForm, Icon, Input, Button, Checkbox, Popover } from "antd";
import DecoratedFormItem from "./DecoratedFormItem";
import signUpFormBg from "./img/bg-form-signup.svg";
import twitterIcon from "./img/soc-twitter.svg";
import vkIcon from "./img/soc-vk.svg";
import facebookIcon from "./img/soc-facebook.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form
} from "./styles";

const SignUpForm = props => {
  const { parallaxLayer, form } = props;
  const isLarge = useMedia("(min-width: 860px)");

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      console.log(err);
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  const hostnameValidate = (rule, value, callback) => {
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
  const policyConfirmValidate = (rule, value, callback) => {
    if (!value) {
      callback("Please accept the Privacy Policy.");
    } else {
      callback();
    }
  };

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
        { validator: compareToFirstPassword }
      ]
    },
    hostname: {
      rules: [{ validator: hostnameValidate }],
      hidden: form.getFieldValue("createLater")
    },
    policyConfirm: { rules: [{ validator: policyConfirmValidate }] },
    createLater: { initialValue: false }
  };

  return (
    <ParallaxLayer offset={0} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isLarge ? 80 : 90}>
          {isLarge && <LeftPartForm src={signUpFormBg} />}
          <RightPartForm>
            <Form onSubmit={handleSubmit}>
              <Form.Header>Create Your Account</Form.Header>
              <Form.SocialBlock>
                <Form.SocialBlock.Head>
                  with your social network
                </Form.SocialBlock.Head>
                <Form.SocialBlock.IconBox>
                  <Form.SocialBlock.Icon src={facebookIcon} />
                  <Form.SocialBlock.Icon src={twitterIcon} />
                  <Form.SocialBlock.Icon src={vkIcon} />
                </Form.SocialBlock.IconBox>
                <Form.SocialBlock.Footer>or</Form.SocialBlock.Footer>
              </Form.SocialBlock>

              <Form.Item>
                {form.getFieldDecorator("email", inputs.email)(
                  <Form.Input placeholder="Email" type="text" />
                )}
              </Form.Item>

              <Form.Item>
                {form.getFieldDecorator("password", inputs.password)(
                  <Form.Input placeholder="Password" type="password" />
                )}
              </Form.Item>
              <Form.Item>
                {form.getFieldDecorator("confirm", inputs.confirm)(
                  <Form.Input placeholder="Confirm password" type="password" />
                )}
              </Form.Item>
              <Form.Item>
                {form.getFieldDecorator("hostname", inputs.hostname)(
                  <Form.Input
                    disabled={form.getFieldValue("createLater")}
                    placeholder="Hostname"
                    type="text"
                  />
                )}
              </Form.Item>
              <Form.CheckBoxContainer>
                {form.getFieldDecorator("createLater", inputs.createLater)(
                  <Form.CheckBoxContainer.CheckBox
                    onChange={() => {
                      form.setFields({ hostname: { value: "" } });
                    }}
                  />
                )}
                <Form.CheckBoxContainer.Label>
                  Create my hostname later
                </Form.CheckBoxContainer.Label>
              </Form.CheckBoxContainer>
              <Form.CheckBoxContainer>
                {form.getFieldDecorator("policyСonfirm", inputs.policyConfirm)(
                  <Form.CheckBoxContainer.CheckBox
                    isError={form.getFieldError("policyСonfirm")}
                  />
                )}
                <Form.CheckBoxContainer.Label>
                  I agree to the Terms of Service and Privacy Policy. I also
                  agree that I will only create one free account.
                </Form.CheckBoxContainer.Label>
              </Form.CheckBoxContainer>
              <Form.Button htmlType="submit">Sign up</Form.Button>
              <Form.TextContainer>
                <Form.TextContainer.Text
                  onClick={() => parallaxLayer.current.scrollTo(1)}
                >
                  Already registered? Sign in
                </Form.TextContainer.Text>
              </Form.TextContainer>
            </Form>
          </RightPartForm>
        </FormWrapper>
      </LayerContainer>
    </ParallaxLayer>
  );
};

export default AntdForm.create({ name: "register" })(SignUpForm);

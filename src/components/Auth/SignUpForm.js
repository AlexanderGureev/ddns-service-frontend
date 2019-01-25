import React, { useState } from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
import { Form as AntdForm, Select, message as messageBlock } from "antd";
import { withCookies } from "react-cookie";
import { registration, isAuth } from "../../services/api";
import { DecoratedFormItem } from "./DecoratedFormItem";
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

const SignUpForm = ({ parallaxLayer, form, cookies }) => {
  const [loading, setLoading] = useState(false);
  const isLarge = useMedia("(min-width: 860px)");

  const showMessage = (text, type = "success") => {
    const fn = {
      success: messageBlock.success,
      error: messageBlock.error
    };
    fn[type](text, 5);
  };

  const registerUser = async body => {
    try {
      setLoading(!loading);
      const response = await registration(body);
      setLoading(false);
      showMessage(
        "User created successfully. Data has been sent to your email to confirm registration."
      );
      const data = await isAuth();
      console.log(data);
    } catch ({ message }) {
      setLoading(false);
      showMessage(message, "error");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        registerUser(values);
      }
      const [invalidField] = Object.keys(err);
      form.getFieldInstance(invalidField).focus();
    });
  };

  const goToNextForm = () => {
    form.resetFields();
    parallaxLayer.current.scrollTo(1);
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

              <DecoratedFormItem type="email" form={form}>
                <Form.Input placeholder="Email" type="text" />
              </DecoratedFormItem>

              <DecoratedFormItem type="password1" form={form}>
                <Form.Input placeholder="Password" type="password" />
              </DecoratedFormItem>

              <DecoratedFormItem type="password2" form={form}>
                <Form.Input placeholder="Confirm password" type="password" />
              </DecoratedFormItem>

              <DecoratedFormItem type="hostname" form={form}>
                <Form.Input
                  disabled={form.getFieldValue("createLater")}
                  placeholder="Hostname"
                  type="text"
                  addonAfter={
                    <DecoratedFormItem
                      type="domain"
                      form={form}
                      decorate={false}
                    >
                      <Select disabled={form.getFieldValue("createLater")}>
                        <Select.Option value=".best-service.online">
                          .best-service.online
                        </Select.Option>
                        <Select.Option value=".shrt.zone">
                          .shrt.zone
                        </Select.Option>
                      </Select>
                    </DecoratedFormItem>
                  }
                />
              </DecoratedFormItem>

              <Form.ContentWrapper>
                <DecoratedFormItem type="createLater" form={form}>
                  <Form.CheckBoxContainer>
                    <Form.CheckBoxContainer.CheckBox
                      onChange={() => {
                        form.setFields({ hostname: { value: "" } });
                      }}
                    >
                      Create my hostname later
                    </Form.CheckBoxContainer.CheckBox>
                  </Form.CheckBoxContainer>
                </DecoratedFormItem>

                <DecoratedFormItem type="policyСonfirm" form={form}>
                  <Form.CheckBoxContainer>
                    <Form.CheckBoxContainer.CheckBox
                      isError={form.getFieldError("policyСonfirm")}
                    >
                      I agree to the Terms of Service and Privacy Policy. I also
                      agree that I will only create one free account.
                    </Form.CheckBoxContainer.CheckBox>
                  </Form.CheckBoxContainer>
                </DecoratedFormItem>
              </Form.ContentWrapper>
              <Form.Button htmlType="submit" loading={loading}>
                Sign up
              </Form.Button>

              <Form.TextContainer>
                <Form.TextContainer.Text onClick={goToNextForm}>
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

export default withCookies(AntdForm.create({ name: "register" })(SignUpForm));

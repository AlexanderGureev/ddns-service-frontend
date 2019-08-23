import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { useMedia } from "react-use";
import { Form as AntdForm, Select, message as messageBlock } from "antd";
import { useStoreActions } from "easy-peasy";
import SocialBlock from "./SocialBlock";
import { DecoratedFormItem } from "./DecoratedFormItem";
import signUpFormBg from "./img/bg-form-signup.svg";

import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form,
  Button
} from "./styles";

const SignUpForm = ({ parallaxLayer, form, location: { state = {} } }) => {
  const { invert = false, data = null } = state;
  const { registerUserAction } = useStoreActions(actions => actions.session);
  const [loading, setLoading] = useState(false);
  const [checkedLater, setCheckedLater] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const isLarge = useMedia("(min-width: 861px)");

  useEffect(() => {
    if (data && Object.values(state.data).length) {
      form.setFields({
        hostname: { value: state.data.hostname },
        domain: { value: state.data.domain }
      });
      form.getFieldInstance("email").focus();
    }
  }, [state]);

  const showMessage = (text, type = "success") => {
    const fn = {
      success: messageBlock.success,
      error: messageBlock.error
    };
    fn[type](text, 5);
  };

  const registerUser = async body => {
    try {
      setLoading(true);
      await registerUserAction(body);
      setLoading(false);
      showMessage(
        "User created successfully. Data has been sent to your email to confirm registration."
      );
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
    setCheckedPolicy(false);
    setCheckedLater(false);
    parallaxLayer.current.scrollTo(invert ? 0 : 1);
  };

  return (
    <ParallaxLayer offset={invert ? 0.3 : 0} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isLarge ? 80 : 90}>
          {isLarge && <LeftPartForm src={signUpFormBg} />}
          <RightPartForm>
            <Form onSubmit={handleSubmit}>
              <Form.Header>Create Your Account</Form.Header>
              <SocialBlock />

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
                        setCheckedLater(!checkedLater);
                      }}
                      checked={checkedLater}
                    >
                      Create my hostname later
                    </Form.CheckBoxContainer.CheckBox>
                  </Form.CheckBoxContainer>
                </DecoratedFormItem>

                <DecoratedFormItem type="policy" form={form}>
                  <Form.CheckBoxContainer>
                    <Form.CheckBoxContainer.CheckBox
                      isError={form.getFieldError("policy")}
                      onChange={() => setCheckedPolicy(!checkedPolicy)}
                      checked={checkedPolicy}
                    >
                      I agree to the Terms of Service and Privacy Policy. I also
                      agree that I will only create one free account.
                    </Form.CheckBoxContainer.CheckBox>
                  </Form.CheckBoxContainer>
                </DecoratedFormItem>
              </Form.ContentWrapper>

              <Button htmlType="submit" loading={loading}>
                Sign up
              </Button>

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

export default AntdForm.create({ name: "register" })(SignUpForm);

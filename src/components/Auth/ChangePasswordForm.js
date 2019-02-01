import React, { useState } from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
import { Form as AntdForm, message as messageBlock } from "antd";
import { useAction } from "easy-peasy";
import changeFormBg from "./img/bg-form-change.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form
} from "./styles";
import { DecoratedFormItem } from "./DecoratedFormItem";

const ChangePasswordForm = ({ form, location, history }) => {
  const { resetPasswordAction } = useAction(dispatch => dispatch.session);
  const [loading, setLoading] = useState(false);
  const isLarge = useMedia("(min-width: 861px)");
  const isBig = useMedia("(min-width: 1500px)");

  const showMessage = (text, type = "success") => {
    const fn = {
      success: messageBlock.success,
      error: messageBlock.error
    };
    fn[type](text, 5);
  };

  const urlSearch = new URLSearchParams(location.search);
  const resetToken = urlSearch.get("token");
  if (!resetToken) {
    showMessage("Invalid reset token.", "error");
    history.push("/");
  }

  const changePassword = async ({ password1, password2 }) => {
    try {
      setLoading(true);
      await resetPasswordAction({
        new_password1: password1,
        new_password2: password2,
        resetToken
      });
      setLoading(false);
      showMessage("Your password has been successfully changed.");
    } catch ({ message }) {
      setLoading(false);
      showMessage(message, "error");
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        changePassword(values);
      }
      const [invalidField] = Object.keys(err);
      form.getFieldInstance(invalidField).focus();
    });
  };

  return (
    <ParallaxLayer offset={0} speed={0}>
      <LayerContainer>
        <FormWrapper width={isBig ? 60 : isLarge ? 80 : 75}>
          {isLarge && <LeftPartForm src={changeFormBg} />}
          <RightPartForm>
            <Form onSubmit={handleSubmit}>
              <Form.Header>Change password</Form.Header>

              <DecoratedFormItem type="password1" form={form}>
                <Form.Input placeholder="Password" type="password" />
              </DecoratedFormItem>

              <DecoratedFormItem type="password2" form={form}>
                <Form.Input placeholder="Confirm password" type="password" />
              </DecoratedFormItem>

              <Form.Button htmlType="submit" loading={loading}>
                Change password
              </Form.Button>
              <Form.TextContainer>
                <Form.TextContainer.Text>Sign in</Form.TextContainer.Text>
                <Form.TextContainer.Text>
                  Not a member? Sign up
                </Form.TextContainer.Text>
              </Form.TextContainer>
            </Form>
          </RightPartForm>
        </FormWrapper>
      </LayerContainer>
    </ParallaxLayer>
  );
};

export default AntdForm.create({ name: "changePassword" })(ChangePasswordForm);

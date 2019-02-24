import React, { useState } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { useMedia } from "react-use";
import { Form as AntdForm, message as messageBlock } from "antd";
import { useAction } from "easy-peasy";
import resetFormBg from "./img/bg-form-reset.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form,
  Button
} from "./styles";
import { DecoratedFormItem } from "./DecoratedFormItem";

const ResetPasswordForm = props => {
  const { resetPasswordAction } = useAction(dispatch => dispatch.session);
  const [loading, setLoading] = useState(false);
  const isLarge = useMedia("(min-width: 861px)");
  const isBig = useMedia("(min-width: 1500px)");
  const { parallaxLayer, form } = props;

  const showMessage = (text, type = "success") => {
    const fn = {
      success: messageBlock.success,
      error: messageBlock.error
    };
    fn[type](text, 5);
  };

  const resetPassword = async body => {
    try {
      setLoading(true);
      await resetPasswordAction(body);
      setLoading(false);
      showMessage("Password reset information sent to your email.");
    } catch ({ message }) {
      setLoading(false);
      showMessage(message, "error");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        resetPassword(values);
      }
      const [invalidField] = Object.keys(err);
      form.getFieldInstance(invalidField).focus();
    });
  };

  const goToNextForm = index => {
    form.resetFields();
    parallaxLayer.current.scrollTo(index);
  };

  return (
    <ParallaxLayer offset={0.6} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isBig ? 50 : isLarge ? 75 : 80}>
          {isLarge && <LeftPartForm src={resetFormBg} />}
          <RightPartForm>
            <Form onSubmit={handleSubmit}>
              <Form.Header>Reset password</Form.Header>
              <Form.Caption>
                <Form.Caption.Text>
                  Enter your username or email to reset your password. You will
                  receive an email with instructions on how to reset your
                  password. If you are experiencing problems resetting your
                  password contact us or send us an email.
                </Form.Caption.Text>
              </Form.Caption>

              <DecoratedFormItem type="email" form={form}>
                <Form.Input placeholder="Email" type="text" />
              </DecoratedFormItem>

              <Button htmlType="submit" loading={loading}>
                Reset password
              </Button>

              <Form.TextContainer>
                <Form.TextContainer.Text onClick={() => goToNextForm(1)}>
                  Sign in
                </Form.TextContainer.Text>
                <Form.TextContainer.Text onClick={() => goToNextForm(0)}>
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

export default AntdForm.create()(ResetPasswordForm);

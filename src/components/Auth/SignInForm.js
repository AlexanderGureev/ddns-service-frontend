import React, { useState } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { useMedia } from "react-use";
import { Form as AntdForm, message as messageBlock } from "antd";
import { useActions } from "easy-peasy";
import SocialBlock from "./SocialBlock";
import { DecoratedFormItem } from "./DecoratedFormItem";
import signInFormBg from "./img/bg-form-signin.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form,
  Button
} from "./styles";

const SignInForm = ({ parallaxLayer, form, location: { state = {} } }) => {
  const { invert = false } = state;
  const { loginUserAction } = useActions(actions => actions.session);
  const [loading, setLoading] = useState(false);

  const isLarge = useMedia("(min-width: 861px)");
  const isBig = useMedia("(min-width: 1360px)");

  const showMessage = (text, type = "success") => {
    const fn = {
      success: messageBlock.success,
      error: messageBlock.error
    };
    fn[type](text, 5);
  };

  const loginUser = async body => {
    try {
      setLoading(!loading);
      await loginUserAction(body);
      setLoading(false);
    } catch ({ message }) {
      setLoading(false);
      showMessage(message, "error");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) loginUser(values);
      const [invalidField] = Object.keys(err);
      form.getFieldInstance(invalidField).focus();
    });
  };

  const goToNextForm = index => {
    form.resetFields();
    parallaxLayer.current.scrollTo(index);
  };
  return (
    <ParallaxLayer offset={invert ? 0 : 0.3} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isBig ? 60 : 80}>
          {isLarge && <LeftPartForm src={signInFormBg} />}
          <RightPartForm>
            <Form onSubmit={handleSubmit}>
              <Form.Header>Sign in</Form.Header>
              <SocialBlock />

              <DecoratedFormItem type="email" form={form} disableRules>
                <Form.Input placeholder="Email" type="text" />
              </DecoratedFormItem>

              <DecoratedFormItem type="password" form={form} disableRules>
                <Form.Input placeholder="Password" type="password" />
              </DecoratedFormItem>

              <Button htmlType="submit" loading={loading}>
                Sign in
              </Button>
              <Form.TextContainer>
                <Form.TextContainer.Text
                  onClick={() => goToNextForm(invert ? 1 : 0)}
                >
                  Not a member? Sign up
                </Form.TextContainer.Text>
                <Form.TextContainer.Text onClick={() => goToNextForm(2)}>
                  Recover my password
                </Form.TextContainer.Text>
              </Form.TextContainer>
            </Form>
          </RightPartForm>
        </FormWrapper>
      </LayerContainer>
    </ParallaxLayer>
  );
};

export default AntdForm.create({ name: "authorize" })(SignInForm);

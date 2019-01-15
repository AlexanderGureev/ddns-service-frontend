import React from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
import resetFormBg from "./img/bg-form-reset.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form
} from "./styles";

const ResetPasswordForm = props => {
  const { parallaxLayer } = props;
  const isLarge = useMedia("(min-width: 860px)");
  const isBig = useMedia("(min-width: 1500px)");

  return (
    <ParallaxLayer offset={0.6} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isBig ? 50 : isLarge ? 75 : 80}>
          {isLarge && <LeftPartForm src={resetFormBg} />}
          <RightPartForm>
            <Form>
              <Form.Header>Reset password</Form.Header>
              <Form.Header.Caption>
                <Form.Header.Caption.Text>
                  Enter your username or email to reset your password. You will
                  receive an email with instructions on how to reset your
                  password. If you are experiencing problems resetting your
                  password contact us or send us an email.
                </Form.Header.Caption.Text>
              </Form.Header.Caption>
              <Form.Input placeholder="Email" />
              <Form.Button>Reset password</Form.Button>
              <Form.TextContainer>
                <Form.TextContainer.Text
                  onClick={() => parallaxLayer.current.scrollTo(1)}
                >
                  Sign in
                </Form.TextContainer.Text>
                <Form.TextContainer.Text
                  onClick={() => parallaxLayer.current.scrollTo(0)}
                >
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

export default ResetPasswordForm;

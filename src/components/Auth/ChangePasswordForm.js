import React from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
import changeFormBg from "./img/bg-form-change.svg";
import {
  LayerContainer,
  FormWrapper,
  LeftPartForm,
  RightPartForm,
  Form
} from "./styles";

const ResetPassword = () => {
  const isLarge = useMedia("(min-width: 860px)");
  const isBig = useMedia("(min-width: 1500px)");

  return (
    <ParallaxLayer offset={0} speed={0}>
      <LayerContainer>
        <FormWrapper width={isBig ? 60 : isLarge ? 80 : 75}>
          {isLarge && <LeftPartForm src={changeFormBg} />}
          <RightPartForm>
            <Form>
              <Form.Header>Change password</Form.Header>
              <Form.Input placeholder="Password" />
              <Form.Input placeholder="Confirm password" />
              <Form.Button>Change password</Form.Button>
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

export default ResetPassword;

import React from "react";
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
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";


const SignUpForm = () => {
  let isLarge = useMedia("(min-width: 860px)");
  let isSmall = useMedia("(min-width: 560px)");

  return (
    <ParallaxLayer offset={0} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isSmall ? 70 : 90}>
          {isLarge && <LeftPartForm src={signUpFormBg} /> }
          <RightPartForm>
            <Form>
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
              <Form.Input placeholder="Email" />
              <Form.Input placeholder="Password" />
              <Form.Input placeholder="Hostname" />
              <Form.CheckBoxContainer>
                <Form.CheckBoxContainer.CheckBox />
                <Form.CheckBoxContainer.Label>
                  Create my hostname later
                </Form.CheckBoxContainer.Label>
              </Form.CheckBoxContainer>
              <Form.CheckBoxContainer>
                <Form.CheckBoxContainer.CheckBox />
                <Form.CheckBoxContainer.Label>
                  I agree to the Terms of Service and Privacy Policy. I also
                  agree that I will only create one free account.
                </Form.CheckBoxContainer.Label>
              </Form.CheckBoxContainer>
              <Form.Button>Sign up</Form.Button>
              <Form.TextContainer>
                <Form.TextContainer.Text>
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

export default SignUpForm;

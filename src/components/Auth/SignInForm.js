import React from "react";
import signInFormBg from "./img/bg-form-signin.svg";
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

const SignInForm = () => {
  let isLarge = useMedia("(min-width: 860px)");
  let isSmall = useMedia("(min-width: 560px)");

  return (
    <ParallaxLayer offset={0.3} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isSmall ? 65 : 80}>
          {isLarge && <LeftPartForm src={signInFormBg} /> }
          <RightPartForm>
            <Form>
              <Form.Header>Sign in</Form.Header>
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
              <Form.Button>Sign in</Form.Button>
              <Form.TextContainer>
                <Form.TextContainer.Text>
                  Not a member? Sign up
                </Form.TextContainer.Text>
                <Form.TextContainer.Text>
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

export default SignInForm;

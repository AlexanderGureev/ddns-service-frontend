import React from "react";
import { ParallaxLayer } from "react-spring/addons";
import { useMedia } from "react-use";
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

const SignInForm = props => {
  const { parallaxLayer } = props;
  const isLarge = useMedia("(min-width: 860px)");
  const isSmall = useMedia("(min-width: 560px)");

  return (
    <ParallaxLayer offset={0.3} speed={0.3}>
      <LayerContainer>
        <FormWrapper width={isSmall ? 65 : 80}>
          {isLarge && <LeftPartForm src={signInFormBg} />}
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
                <Form.TextContainer.Text
                  onClick={() => parallaxLayer.current.scrollTo(0)}
                >
                  Not a member? Sign up
                </Form.TextContainer.Text>
                <Form.TextContainer.Text
                  onClick={() => parallaxLayer.current.scrollTo(2)}
                >
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

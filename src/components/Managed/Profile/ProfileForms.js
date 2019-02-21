import React from "react";
import { countryList } from "./countries";

import { ReactComponent as EmailIcon } from "./img/email.svg";
import { ReactComponent as PasswordIcon } from "./img/lock.svg";
import { ReactComponent as UserIcon } from "./img/user.svg";
import { ReactComponent as CompanyIcon } from "./img/enterprise.svg";

import { ReactComponent as CityIcon } from "./img/city.svg";
import { ReactComponent as AddressIcon } from "./img/address.svg";
import { ReactComponent as PhoneIcon } from "./img/smartphone.svg";
import { ReactComponent as ZipcodeIcon } from "./img/zip-code.svg";
import { ReactComponent as NameIcon } from "./img/name.svg";

import accountIcon from "./img/account.svg";
import personalIcon from "./img/personalInfo.svg";
import selectIcon from "./img/location.svg";

import ChangePasswordModal from "./ChangePasswordModal";
import ChangeEmailModal from "./ChangeEmailModal";

import {
  Title,
  FieldsContainer,
  InputGroup,
  Input,
  Button,
  Icon,
  Select,
  Option,
  ButtonGroup
} from "./styles";
import { Form } from "../styles";

const ProfileForms = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title icon={accountIcon}>Account Info</Title>
        <FieldsContainer>
          <Form.Item>
            {getFieldDecorator("username", {})(
              <Input
                prefix={<Icon component={UserIcon} />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }],
              initialValue: "g.alex00@bk.ru"
            })(
              <Input
                prefix={<Icon component={EmailIcon} />}
                type="email"
                placeholder="Email"
                disabled
              />
            )}
            <ChangeEmailModal />
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ],
              initialValue: "123123123"
            })(
              <Input
                prefix={<Icon component={PasswordIcon} />}
                type="password"
                placeholder="Password"
                disabled
              />
            )}
            <ChangePasswordModal />
          </Form.Item>
        </FieldsContainer>
        <Title icon={personalIcon}>Pesonal Info</Title>
        <FieldsContainer column>
          <InputGroup>
            <Form.Item>
              {getFieldDecorator("firstName", {})(
                <Input
                  prefix={<Icon component={NameIcon} />}
                  type="text"
                  placeholder="First name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("lastName", {})(
                <Input
                  prefix={<Icon component={NameIcon} />}
                  type="text"
                  placeholder="Last name"
                />
              )}
            </Form.Item>
          </InputGroup>

          <Form.Item>
            {getFieldDecorator("organisation", {})(
              <Input
                prefix={<Icon component={CompanyIcon} />}
                type="text"
                placeholder="Organization"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("country", {})(
              <Select placeholder="Please select a country" prefix={selectIcon}>
                {countryList.map((country, i) => (
                  <Option key={i} value={country}>
                    {country}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <InputGroup>
            <Form.Item>
              {getFieldDecorator("address", {})(
                <Input
                  prefix={<Icon component={AddressIcon} />}
                  type="text"
                  placeholder="Address"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("suite", {})(
                <Input
                  prefix={<Icon component={AddressIcon} />}
                  type="text"
                  placeholder="Apt, Suite, Etc"
                />
              )}
            </Form.Item>
          </InputGroup>
          <InputGroup>
            <Form.Item>
              {getFieldDecorator("city", {})(
                <Input
                  prefix={<Icon component={CityIcon} />}
                  type="text"
                  placeholder="City"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("region", {})(
                <Input
                  prefix={<Icon component={CityIcon} />}
                  type="text"
                  placeholder="Province/Region"
                />
              )}
            </Form.Item>
          </InputGroup>
          <InputGroup>
            <Form.Item>
              {getFieldDecorator("postalCode", {})(
                <Input
                  prefix={<Icon component={ZipcodeIcon} />}
                  type="text"
                  placeholder="Postal Code"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("phone", {})(
                <Input
                  prefix={<Icon component={PhoneIcon} />}
                  type="text"
                  placeholder="Phone"
                />
              )}
            </Form.Item>
          </InputGroup>
        </FieldsContainer>
        <ButtonGroup>
          <Button>Delete User</Button>
          <Button primary="true" htmlType="submit">
            Save
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default Form.create({})(ProfileForms);

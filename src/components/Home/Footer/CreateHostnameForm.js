import React from "react";
import { Form as AntdForm } from "antd";
import { Form, Row, Col, Select, Header } from "./styles";
import { DecoratedFormItem } from "../../Auth/DecoratedFormItem";

const CreateHostnameForm = ({ form }) => (
  <>
    <Header>Create Your Free Hostname Now</Header>
    <Form>
      <Row gutter={16} type="flex" justify="center" align="middle">
        <Col xs={{ span: 19 }} sm={{ span: 13 }} lg={{ span: 6 }}>
          <DecoratedFormItem type="hostname" form={form}>
            <Form.Input type="text" placeholder="Hostname" />
          </DecoratedFormItem>
        </Col>
        <Col xs={{ span: 19 }} sm={{ span: 13 }} lg={{ span: 6 }}>
          <DecoratedFormItem type="domain" form={form}>
            <Select>
              <Select.Option value=".shrt.zone">.shrt.zone</Select.Option>
            </Select>
          </DecoratedFormItem>
        </Col>
        <Col xs={{ span: 19 }} sm={{ span: 13 }} lg={{ span: 4 }}>
          <Form.Button
            to={{ pathname: "/login", state: { data: form.getFieldsValue() } }}
          >
            Sign up
          </Form.Button>
        </Col>
      </Row>
    </Form>
  </>
);

export default AntdForm.create()(CreateHostnameForm);

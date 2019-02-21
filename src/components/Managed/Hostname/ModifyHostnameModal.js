import React, { useState } from "react";
import { Form as AntdForm, Input } from "antd";
import { Modal, Form } from "../styles";
import { StyledLink } from "./styles";

const ModifyHostnameModal = ({ form }) => {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    form.resetFields();
  };
  const onOpen = () => setVisible(true);
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
      <Modal
        visible={visible}
        title="Modify a Hostname"
        okText="Save"
        onCancel={onClose}
        onOk={handleSubmit}
      >
        <Form layout="vertical">
          <Form.Item label="Hostname">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Domain">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type">
            <Input type="text" />
          </Form.Item>
        </Form>
      </Modal>
      <StyledLink onClick={onOpen}>Modify</StyledLink>
    </>
  );
};

export default AntdForm.create({})(ModifyHostnameModal);

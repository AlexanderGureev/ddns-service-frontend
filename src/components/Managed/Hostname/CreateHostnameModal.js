import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "../../Common/styles";
import { Modal, Form } from "../styles";

const CreateHostnameModal = ({ form }) => {
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
        title="Create a Hostname"
        okText="Create Hostname"
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
      <Button onClick={onOpen}>Create Hostname</Button>
    </>
  );
};

export default Form.create({})(CreateHostnameModal);

import React, { useState } from "react";
import { Form as AntdForm, Input } from "antd";
import { Modal, Form, FormLink } from "./styles";
import { DecoratedFormItem } from "../../Auth/DecoratedFormItem";

const ChangePasswordModal = ({ form }) => {
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
        title="Change password"
        okText="Change"
        onCancel={onClose}
        onOk={handleSubmit}
      >
        <Form layout="vertical">
          <DecoratedFormItem
            type="password"
            form={form}
            label="Current password"
          >
            <Input type="password" />
          </DecoratedFormItem>

          <DecoratedFormItem type="password1" form={form} label="New password">
            <Input type="password" />
          </DecoratedFormItem>

          <DecoratedFormItem
            type="password2"
            form={form}
            label="Confirm password"
          >
            <Input type="password" />
          </DecoratedFormItem>
        </Form>
      </Modal>
      <FormLink onClick={onOpen}>Change password</FormLink>
    </>
  );
};

export default AntdForm.create({})(ChangePasswordModal);

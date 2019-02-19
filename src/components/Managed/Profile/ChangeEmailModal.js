import React, { useState } from "react";
import { Form as AntdForm, Input } from "antd";
import { Modal, Form, FormLink } from "./styles";
import { DecoratedFormItem } from "../../Auth/DecoratedFormItem";

const ChangeEmailModal = ({ form }) => {
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
        title="Change email"
        okText="Change"
        onCancel={onClose}
        onOk={handleSubmit}
      >
        <Form layout="vertical">
          <DecoratedFormItem type="email" form={form} label="New Email">
            <Input type="text" />
          </DecoratedFormItem>
          <DecoratedFormItem
            type="confirmEmail"
            form={form}
            label="Confirm Email"
          >
            <Input type="text" />
          </DecoratedFormItem>
        </Form>
      </Modal>
      <FormLink onClick={onOpen}>Change email</FormLink>
    </>
  );
};

export default AntdForm.create({})(ChangeEmailModal);

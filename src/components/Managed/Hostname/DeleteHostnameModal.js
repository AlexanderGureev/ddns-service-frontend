import React from "react";
import { Modal } from "../styles";
import { StyledLink } from "./styles";

const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: "Are you sure delete this hostname?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
};

const DeleteHostnameModal = () => (
  <StyledLink onClick={showDeleteConfirm}>Delete</StyledLink>
);

export default DeleteHostnameModal;

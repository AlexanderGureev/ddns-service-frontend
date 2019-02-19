import React, { useState } from "react";
import { message } from "antd";
import { useStore, useAction } from "easy-peasy";
import { LoopingRhombusesSpinner } from "react-epic-spinners";
import { ReactComponent as UploadFormIcon } from "./img/upload_ava.svg";
import {
  Modal,
  ProfileHeaderWrapper,
  Dragger,
  LoadingContainer,
  Avatar
} from "./styles";
import AccountInfo from "./AccountInfo";
import AccountStatistics from "./AccountStatistics";

function beforeUpload(file) {
  const allowedExt = ["image/jpeg", "image/png", "image/svg+xml"];
  const isAllowedExt = allowedExt.some(ext => ext === file.type);
  if (!isAllowedExt) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isAllowedExt && isLt2M;
}

const ProfileHeader = () => {
  const { profile } = useStore(state => state.session);
  const { updateAvatarAction } = useAction(dispatch => dispatch.session);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const changeAvatar = () => setVisible(true);

  const handleOk = () => setVisible(false);
  const handleCancel = () => setVisible(false);

  const props = {
    showUploadList: false,
    beforeUpload,
    customRequest: async ({ file, onError, onSuccess }) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("personal.avatar", file);
        await updateAvatarAction(formData);
        setLoading(false);
        setVisible(false);
        onSuccess();
      } catch (error) {
        setLoading(false);
        onError();
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <ProfileHeaderWrapper>
      <Modal
        title="Change avatar"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        multiple={false}
      >
        <Dragger {...props}>
          {loading ? (
            <LoadingContainer>
              <LoopingRhombusesSpinner color="#1f5ad1" />
            </LoadingContainer>
          ) : (
            <Dragger.Container>
              <Dragger.Icon component={UploadFormIcon} />
              <Dragger.Text>
                Click or drag your avatar image to this area to upload
              </Dragger.Text>
            </Dragger.Container>
          )}
        </Dragger>
      </Modal>
      <Avatar src={profile.avatarPath} onClick={changeAvatar} />
      <AccountInfo profile={profile} />
      <AccountStatistics />
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;

import React from "react";
import { message } from "antd";
import { FulfillingBouncingCircleSpinner } from "react-epic-spinners";

message.config({ maxCount: 1 });

class LoadingMessage {
  constructor(config = { loading: false }) {
    this.config = {
      icon: (
        <FulfillingBouncingCircleSpinner
          color="white"
          size={20}
          style={{ marginRight: "10px" }}
        />
      ),
      ...config
    };
  }
  open = (content, duration = 0) =>
    message.open({
      duration,
      content,
      ...this.config
    });

  error = content => message.error(content);
  success = content => message.success(content);
}

export default config => new LoadingMessage(config);

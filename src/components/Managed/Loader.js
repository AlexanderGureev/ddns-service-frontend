import React from "react";
import { FulfillingBouncingCircleSpinner } from "react-epic-spinners";
import { LoaderContainer } from "./styles";

function Loader() {
  return (
    <LoaderContainer>
      <FulfillingBouncingCircleSpinner color="rgba(77, 144, 226, 0.8)" />
    </LoaderContainer>
  );
}

export default Loader;

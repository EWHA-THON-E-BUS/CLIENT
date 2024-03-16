import React, { useState } from "react";
import styled from "styled-components";
import MyStop from "./MyStop";
import plus_grey from "../../assets/plus_grey.svg";
import Modal from "./Modal";

const MyStopList = () => {
  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Div>
        <MyStop />
        <MyStop />
        <img
          className="plus"
          src={plus_grey}
          onClick={() => setShowModal(!showModal)}
        />
      </Div>
    </>
  );
};

export default MyStopList;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .plus {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

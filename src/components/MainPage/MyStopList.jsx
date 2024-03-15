import React from "react";
import styled from "styled-components";
import MyStop from "./MyStop";
import plus_grey from "../../assets/plus_grey.svg";

const MyStopList = () => {
  return (
    <Div>
      <MyStop />
      <MyStop />
      <img className="plus" src={plus_grey} />
    </Div>
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

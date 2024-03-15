import React from "react";
import styled from "styled-components";
import ArrowBtn from "./ArrowBtn";

const LostItems = () => {
  return (
    <Div>
      <ArrowBtn title={"최근 분실물"} />

      <Container>
        <img className="lost-pic" src="" alt="" />
        <img className="lost-pic" src="" alt="" />
        <img className="lost-pic" src="" alt="" />
        <img className="lost-pic" src="" alt="" />
        <img className="lost-pic" src="" alt="" />
      </Container>
    </Div>
  );
};

export default LostItems;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .lost-pic {
    height: 64px;

    border-radius: 2px;
  }
`;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Delete } from "../assets/cancel.svg";
import Form from "../components/LostItemPage/Form";

const LostItemPostPage = () => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <div className="title">
        <p>분실물 제보하기</p>
        <Delete onClick={() => nav("/lost-item")} />
      </div>
      <Form />
    </Wrapper>
  );
};

export default LostItemPostPage;

const Wrapper = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;

  svg {
    fill: var(--black);
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 8px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0 60px 0;
    p {
      color: var(--black);
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-left: 8px;
    }
  }
`;

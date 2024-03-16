import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Delete } from "../assets/cancel.svg";
import Form from "../components/CommunityPage/Form";

const CommunityPostPage = () => {
  const isSuggest = window.location.pathname.includes("suggest");
  const nav = useNavigate();
  return (
    <Wrapper>
      <Title>
        <p>{isSuggest ? "건의사항 작성하기" : "글 작성하기"}</p>
        <Delete
          className="delete"
          onClick={() => nav(isSuggest ? "/suggest" : "/appreciate")}
        />
      </Title>
      <Form />
    </Wrapper>
  );
};

export default CommunityPostPage;

const Wrapper = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;

  svg {
    fill: var(--black);
    cursor: pointer;
    flex-shrink: 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 8px 50px 8px;
  p {
    color: var(--black);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
`;

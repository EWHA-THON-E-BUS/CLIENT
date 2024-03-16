import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as EmptyHeart } from "../../assets/heart_empty.svg";

export const item = {
  postId: 2,
  title:
    "제목30자제목30자제목30자제목30자제목30자제목30자제목30자제목30자제목30자",
  createdDate: "2024-03-15T12:00:00",
  heartCount: 12,
};

const Item = ({ type, isFirst }) => {
  const { postId, title, createdDate, heartCount } = item;
  const nav = useNavigate();
  return (
    <Container
      onClick={() =>
        nav(type === "suggest" ? `/suggest/${postId}` : `/appreciate/${postId}`)
      }
      $isfirst={isFirst}
    >
      <TextSection>
        <h1>{title}</h1>
        <div>
          <p>익명의 벗</p>
          <p>
            {new Date(createdDate).toLocaleString("ko-KR", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <Heart>
          <EmptyHeart />
          {"9999"}
        </Heart>
      </TextSection>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  width: calc(100% - 64px);
  height: 64px;
  margin: 0 24px;
  padding: 8px;
  border-top: ${props => (props.$isfirst ? "0" : "1px solid var(--grey1)")};
  display: flex;
  gap: 8px;
  position: relative;

  * {
    cursor: default;
  }
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    width: 100%;
    height: 14px;
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  p {
    color: var(--grey2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin: 4px 0 3px 0;
  }
  .admin {
    color: var(--jade_night);
  }
`;

const Heart = styled.div`
  position: absolute;
  bottom: 10px;
  right: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  color: var(--jade);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

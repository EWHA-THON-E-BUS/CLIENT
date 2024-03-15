import React from "react";
import styled from "styled-components";

const NoticeBanner = () => {
  return (
    <Div>
      <div className="date">2024-00-00</div>
      <div className="title">
        오늘 아침 밥을 꼭 먹고 나오도록 하세요. 안 먹으면 배고프니까
      </div>
    </Div>
  );
};

export default NoticeBanner;

const Div = styled.div`
  border-radius: 4px;
  background: var(--theme_white_grey3);
  box-shadow: 0px 1px 4px 0px #80ded0;

  display: flex;
  padding: 12px 8px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: start;
  gap: 6px;

  .date {
    font-size: 14px;
    font-weight: 600;
  }

  .title {
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

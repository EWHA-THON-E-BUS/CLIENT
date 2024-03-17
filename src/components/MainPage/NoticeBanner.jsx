import React from "react";
import styled from "styled-components";

const NoticeBanner = ({ notice }) => {
  return (
    <Div>
      {notice ? (
        <>
          <div className="date">{notice.createdDate.split("T")[0]}</div>
          <div className="title">{notice.title}</div>
        </>
      ) : (
        <>
          <div className="date">{new Date().toJSON().split("T")[0]}</div>
          <div className="title">등록된 공지가 없어요</div>
        </>
      )}
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

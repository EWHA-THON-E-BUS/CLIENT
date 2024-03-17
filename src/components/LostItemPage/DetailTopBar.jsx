import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";

const DetailTopBar = ({ title, isMy, onDelete }) => {
  const nav = useNavigate();
  return (
    <Title>
      <div className="inner">
        <Arrow className="arrow" onClick={() => nav(-1)} />
        <p>{title}</p>
      </div>
      {isMy && !window.location.pathname.includes("lost-item") && (
        <Delete className="delete" onClick={onDelete} />
      )}
    </Title>
  );
};

export default DetailTopBar;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
  .inner {
    display: flex;
  }
  .arrow {
    transform: rotate(180deg);
    height: 14px;
    margin-top: 5px;
  }
  p {
    color: var(--black);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .delete {
    margin-top: 4px;
  }
`;

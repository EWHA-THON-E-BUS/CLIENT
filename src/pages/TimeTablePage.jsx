import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow_bold.svg";
import TimeTable from "../components/MainPage/TimeTable";
import { useNavigate } from "react-router-dom";

const TimeTablePage = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Div className={className}>
      <div className="wrapper">
        <StyledArrow onClick={() => navigate(-1)} />
        <div className="title">포스코관</div>
      </div>
      <Line />
      <TimeTable />
    </Div>
  );
};

export default TimeTablePage;

const Div = styled.div`
  width: 100%;
  background: var(--theme_bg);
  color: var(--theme_font);

  padding: 28px 24px 0px;
  box-sizing: border-box;

  .wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 18px;
    font-weight: 700;
  }
`;

const StyledArrow = styled(Arrow)`
  rotate: calc(180deg);
  fill: var(--theme_font);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--theme_font);

  margin-top: 8px;
`;

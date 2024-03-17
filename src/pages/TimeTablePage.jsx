import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow_bold.svg";
import TimeTable from "../components/TimeTablePage/TimeTable";
import { useNavigate, useParams } from "react-router-dom";
import { stops } from "../components/MainPage/stops";
import { getAllTime } from "../services/api/stops";

const TimeTablePage = ({ className }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Div className={className}>
      <div className="wrapper">
        <StyledArrow onClick={() => navigate(-1)} />
        <div className="title">{stops[id - 1].kor}</div>
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

import React, { useEffect } from "react";
import styled from "styled-components";
import BusAnimation from "./BusAnimation";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getTimetablebyDay } from "./bus_routes";
import { dayState } from "../../services/store/bus";

const BusRoute = ({ bus_route, isUp }) => {
  const navigate = useNavigate();
  const [day, setDay] = useRecoilState(dayState);

  const now = new Date();

  useEffect(() => {
    if (now.getDay() === 6) {
      //토요일인 경우
      setDay("saturday");
    } else if (now.getDay > 0) {
      //평일일 경우
      setDay("weekday");
    } else {
      //일요일인 경우
      setDay("sunday");
    }

    //test
    setDay("weekday");
  }, []);

  return (
    <>
      <Line>
        <DotsContainer>
          {bus_route.stops.map(stop => {
            return (
              <Dots
                style={{ left: `${stop.gap}%` }}
                onClick={() => navigate(`/time-table/${stop.id}`)}
              />
            );
          })}
        </DotsContainer>

        <div className="bus">
          {isUp
            ? getTimetablebyDay(day, isUp, bus_route.id).map(time => {
                return <BusAnimation isUp={isUp} time={time} />;
              })
            : getTimetablebyDay(day, isUp, bus_route.id).map(time => {
                return <BusAnimation isUp={isUp} time={time} />;
              })}
        </div>
      </Line>
    </>
  );
};

export default BusRoute;

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  flex-shrink: 0;
  background: var(--theme_grey1_grey2);
`;

const Dots = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: var(--theme_grey1_grey2);
  transform: translate(-50%, 0);
`;

const DotsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -4px;
`;

import React from "react";
import styled from "styled-components";
import BusAnimation from "./BusAnimation";
import { useNavigate } from "react-router-dom";

const BusRoute = ({ bus_route, isUp }) => {
  const navigate = useNavigate();
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
            ? bus_route.up_start_time.map(time => {
                return (
                  <BusAnimation
                    className={bus_route.id}
                    isUp={isUp}
                    time={time}
                  />
                );
              })
            : bus_route.down_start_time.map(time => {
                return (
                  <BusAnimation
                    className={bus_route.id}
                    isUp={isUp}
                    time={time}
                  />
                );
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

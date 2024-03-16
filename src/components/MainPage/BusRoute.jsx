import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Bus } from "../../assets/bus_right.svg";
import BusAnimation from "./BusAnimation";
const BusRoute = ({ bus_route, isUp }) => {
  return (
    <>
      <Line>
        <DotsContainer>
          {bus_route.stops.map(() => {
            return <Dots />;
          })}
        </DotsContainer>

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
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: var(--theme_grey1_grey2);
`;

const DotsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -4px;
`;

import React from "react";
import styled from "styled-components";
import BusRoute from "./BusRoute";
import { bus_routes } from "./bus_routes";

const BusMap = ({ index }) => {
  return (
    <Div>
      <div className="title">{bus_routes[index].title}</div>

      <div className="map">
        <BusRoute bus_route={bus_routes[index]} isUp={true} />

        <BusStops>
          {bus_routes[index].stops.map(stop => {
            return (
              <div className="stop" style={{ left: `${stop.gap}%` }}>
                {stop.name}
              </div>
            );
          })}
        </BusStops>

        <BusRoute bus_route={bus_routes[index]} isUp={false} />
      </div>
    </Div>
  );
};

export default BusMap;

const Div = styled.div`
  .title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .map {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

const BusStops = styled.div`
  position: relative;

  height: 0;
  width: 100%;
  padding: 0 6px;
  box-sizing: border-box;

  font-size: 12px;
  font-weight: 400;

  .stop {
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    white-space: pre-wrap;

    text-align: center;
  }
  .stop:first-child {
    margin-left: 3px;
  }
  .stop:last-child {
    transform: translate(-97%, -50%);
    position: relative;
    text-align: end;
  }
`;

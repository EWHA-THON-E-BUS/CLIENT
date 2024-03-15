import React from "react";
import styled from "styled-components";
import BusRoute from "./BusRoute";
import { bus_routes } from "./bus_routes";
// 12.5 25 25 25 12.5
const BusMap = ({ index }) => {
  return (
    <Div>
      <div className="title">{bus_routes[index].title}</div>

      <div className="map">
        <BusRoute bus_route={bus_routes[index]} isUp={true} />

        <BusStops>
          {bus_routes[index].stops.map(stop => {
            return <div className="stop">{stop}</div>;
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
    gap: 15px;
  }
`;

const BusStops = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 400;

  .stop {
    margin: auto 0;
    width: 25%;
    white-space: pre-wrap;

    text-align: center;
  }
  .stop:first-child {
    width: 12.5%;
    text-align: start;
  }
  .stop:last-child {
    width: 12.5%;
    text-align: end;
  }
`;

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

        <BusAnimation className={bus_route.id} />
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
const AnimationBox = styled.div`
  width: 95%;

  .ROUTE_0 {
    //연구협력관 상행 노선
    animation-name: move; /* keyframe을 태그에 등록 */
    animation-duration: 420s; /* 7분 동안 실행 */
    //animation-delay: 0ms; //지연시간
    //animation-iteration-count: infinite; /* 무한 반복 */

    transform: translateX(${props => props.progressStatus});
  }
`;

const StyledBus = styled(Bus)`
  position: absolute;
  top: 0;
  transform: translate(0%, -100%);
`;

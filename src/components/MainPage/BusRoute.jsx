import React from "react";
import styled from "styled-components";

const BusRoute = ({ stops }) => {
  return (
    <Line>
      <DotsContainer>
        {stops.map(() => {
          return <Dots />;
        })}
      </DotsContainer>
    </Line>
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

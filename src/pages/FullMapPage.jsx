import React from "react";
import fullmap from "../assets/fullmap.svg";
import styled from "styled-components";

const FullMapPage = () => {
  return (
    <Div>
      <img src={fullmap} className="map" />
    </Div>
  );
};

export default FullMapPage;

const Div = styled.div`
  width: 100svw;
  max-width: 481px;

  .map {
    max-width: 481px;
    width: 100svw;
  }
`;

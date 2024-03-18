import React from "react";
import fullmap from "../assets/fullmap.png";
import styled from "styled-components";
import Header from "../components/common/Header";

const FullMapPage = () => {
  return (
    <Div>
      <Header isBasic={true} />
      <img src={fullmap} className="map" />
    </Div>
  );
};

export default FullMapPage;

const Div = styled.div`
  width: 100svw;
  padding: 0 24px;
  box-sizing: border-box;
  max-width: 481px;

  .map {
    width: 100%;
  }
`;

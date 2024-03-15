import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";

const MainPage = ({ className }) => {
  return (
    <Div className={className}>
      <Header isTheme={true} />
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--theme_bg);
`;

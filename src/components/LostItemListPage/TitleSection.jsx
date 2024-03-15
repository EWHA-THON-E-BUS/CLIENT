import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";

const TitleSection = () => {
  return (
    <Container>
      <p>분실물</p>
      <NavBtn>
        <p>분실물 제보하기</p>
        <Arrow fill="var(--black)" />
      </NavBtn>
    </Container>
  );
};

export default TitleSection;

const Container = styled.div`
  width: calc(100% - 64px);
  margin: 8px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    color: var(--black);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & > p {
    color: var(--black);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }
  svg {
    height: 12px;
  }
`;

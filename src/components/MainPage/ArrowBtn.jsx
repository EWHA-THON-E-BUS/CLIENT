import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { themeState } from "../../services/store/theme";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";

const ArrowBtn = ({ title }) => {
  return (
    <Div>
      {title}
      <StyledArrow />
    </Div>
  );
};

export default ArrowBtn;

const Div = styled.div`
  font-size: 18px;
  font-weight: 700;
  align-items: center;

  display: flex;
  gap: 4px;
`;

const StyledArrow = styled(Arrow)`
  fill: var(--theme_font);
`;

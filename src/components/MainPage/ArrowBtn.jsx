import React from "react";
import styled from "styled-components";
import arrow_bold from "../../assets/arrow_bold.svg";
import arrow_bold_white from "../../assets/arrow_bold_white.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../../services/store/theme";

const ArrowBtn = ({ title }) => {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <Div>
      {title}
      {theme === "LIGHT" ? (
        <img src={arrow_bold} />
      ) : (
        <img src={arrow_bold_white} />
      )}
    </Div>
  );
};

export default ArrowBtn;

const Div = styled.div`
  font-size: 18px;
  font-weight: 700;

  display: flex;
  gap: 4px;
`;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <p> 240315-0318</p>
      <p> 1st 이화톤_김둘이송차</p>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  min-width: 481px;
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 24px;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  background: var(--theme_grey2_grey3);

  font-size: 12px;
  font-weight: 400;

  color: var(--grey1);
`;

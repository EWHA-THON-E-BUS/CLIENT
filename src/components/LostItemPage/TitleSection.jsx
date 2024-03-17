import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
import { getMember } from "../../services/api/member";

const TitleSection = ({ title, text, moveTo }) => {
  const nav = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    getMember()
      .then(res => setIsAdmin(res.data === "ADMIN"))
      .catch(err => console.log(err));
  }, []);
  return (
    <Container $border={!(title === "분실물")}>
      <p>{title}</p>
      {((title === "공지사항" && isAdmin) || title !== "공지사항") && (
        <NavBtn onClick={() => nav(moveTo)}>
          <p>{text}</p>
          <Arrow fill="var(--black)" />
        </NavBtn>
      )}
    </Container>
  );
};

export default TitleSection;

const Container = styled.div`
  width: calc(100% - 64px);
  margin: 0 24px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => (props.$border ? "1px solid var(--black)" : "0")};
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
  cursor: pointer;
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

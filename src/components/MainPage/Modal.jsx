import React from "react";
import styled from "styled-components";
import { stops } from "./stops";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
const Modal = ({ setShowModal }) => {
  return (
    <>
      <Bg onClick={() => setShowModal(false)}></Bg>
      <Div>
        <div>
          <div className="title">내 정류장 관리</div>
          <div className="sub">최대 3개까지 선택할 수 있어요</div>
        </div>

        <div className="grid-box">
          {stops.map(stop => {
            return <Stop>{stop}</Stop>;
          })}
        </div>

        <Btn>
          선택완료 <StyledArrow />
        </Btn>
      </Div>
    </>
  );
};

export default Modal;

const Bg = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Div = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
  width: 87%;
  box-sizing: border-box;
  padding: 32px 24px;
  background: var(--theme_bg);
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .sub {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey2);
  }

  .grid-box {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
`;

const Stop = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 4px;
  background: var(--theme_grey1_grey3);

  font-size: 14px;
  font-weight: 600;
`;

const Btn = styled.div`
  font-size: 18px;
  font-weight: 700;

  align-self: flex-end;
`;

const StyledArrow = styled(Arrow)`
  fill: var(--theme_font);
`;

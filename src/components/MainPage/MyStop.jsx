import React from "react";
import styled from "styled-components";
import minus from "../../assets/minus.svg";
import refresh from "../../assets/refresh.svg";
const MyStop = () => {
  return (
    <Div>
      <Top>
        <div className="left">
          포스코관
          <img src={minus} />
        </div>

        <img src={refresh} />
      </Top>

      <Bottom>
        <Container>
          <div className="row">
            <div className="stop">한우리집</div>
            <div className="time">2분 (12:34)</div>
          </div>
          <div className="row">
            <div className="stop">연구협력관</div>
            <div className="time">12분 (12:34)</div>
          </div>
          <div className="row">
            <div className="stop">연구협력관</div>
            <div className="time">12분 (12:34)</div>
          </div>
        </Container>

        <div className="line" />
        <Container>
          <div className="row">
            <div className="stop">한우리집</div>
            <div className="time">2분 (12:34)</div>
          </div>
          <div className="row">
            <div className="stop">연구협력관</div>
            <div className="time">12분 (12:34)</div>
          </div>
        </Container>
      </Bottom>
    </Div>
  );
};

export default MyStop;

const Div = styled.div`
  width: 100%;
  border-radius: 4px 4px 4px 4px;
  background: var(--theme_grey1_grey3);
  overflow: hidden;
`;

const Top = styled.div`
  background-color: var(--theme_jade);
  color: var(--black);
  padding: 7px 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 600;

  .left {
    display: flex;
    gap: 8px;
  }
`;

const Bottom = styled.div`
  padding: 13px 8px 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 9px;

  .line {
    width: 2px;
    height: 58px;
    background: var(--theme_bg);
  }
`;

const Container = styled.div`
  font-size: 14px;
  font-weight: 400;

  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { stops } from "./stops";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
import { postPinnedStops } from "../../services/api/stops";
const Modal = ({ setShowModal, pinnedStops, setPinnedStops }) => {
  const [selectedList, setSelectedList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    //렌더링 시 현재 핀되어있는 정류장 배열에 반영
    if (pinnedStops) {
      const temp = [...selectedList];
      pinnedStops.forEach(id => {
        temp[id - 1] = true;
      });
      setSelectedList(temp);
    }
  }, []);

  const handleSelect = index => {
    setSelectedList(prevSelectedList => {
      const updatedList = [...prevSelectedList];
      // 선택된 정류장 개수가 3개를 초과하는 경우 마지막으로 선택된 정류장을 해제합니다.

      updatedList[index] = !updatedList[index];

      let selectedCount = updatedList.filter(item => item === true).length;

      if (selectedCount > 3) {
        alert("정류장은 최대 3개 선택 가능합니다.");
        const lastSelectedIndex = updatedList.lastIndexOf(true);
        updatedList[lastSelectedIndex] = false;
      }

      return updatedList;
    });
  };

  const handlePost = () => {
    postPinnedStops(selectedList)
      .then(res => {
        if (res.status === 200) {
          setPinnedStops(res.data.stopId);
          setShowModal(false);
        }
      })
      .catch(err => {
        alert("오류 발생");
      });
  };

  return (
    <>
      <Bg onClick={() => setShowModal(false)}></Bg>
      <Div>
        <div>
          <div className="title">내 정류장 관리</div>
          <div className="sub">최대 3개까지 선택할 수 있어요</div>
        </div>

        <div className="grid-box">
          {stops.map((stop, index) => {
            return (
              <Stop
                key={index}
                onClick={() => handleSelect(index)}
                selected={selectedList[index]}
              >
                {stop.kor}
              </Stop>
            );
          })}
        </div>

        <Btn onClick={handlePost}>
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
  background: ${({ selected }) =>
    selected ? "var(--theme_jade)" : "var(--theme_grey1_grey3)"};

  border-radius: 4px;

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

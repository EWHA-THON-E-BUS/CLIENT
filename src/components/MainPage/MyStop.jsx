import React, { useEffect, useState } from "react";
import styled from "styled-components";
import minus from "../../assets/minus.svg";
import refresh_svg from "../../assets/refresh.svg";
import { getTime, postPinnedStops } from "../../services/api/stops";
import { getKorByEng } from "./bus_routes";
import { stops } from "./stops";
import { useRecoilState } from "recoil";
import { selectedListState } from "../../services/store/stop";
const MyStop = ({ stopId, pinnedStops, setPinnedStops }) => {
  const [selectedList, setSelectedList] = useRecoilState(selectedListState);

  const [ups, setUps] = useState([]);
  const [downs, setDowns] = useState([]);

  const [refresh, setRefresh] = useState(false);

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

  useEffect(() => {
    getTime(stopId)
      .then(res => {
        setUps(res.data.ups);
        setDowns(res.data.downs);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refresh]);

  const deletePinnedStop = () => {
    // 클릭시 삭제
    const updatedList = [...selectedList];
    updatedList[stopId - 1] = false;

    // 상태를 업데이트합니다.
    setSelectedList(updatedList);

    // 서버로 상태를 업데이트합니다.
    postPinnedStops(updatedList)
      .then(res => {
        setPinnedStops(res.data.stopId);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Div>
      <Top>
        <div className="left">
          {stops[stopId - 1].kor}
          <img src={minus} onClick={deletePinnedStop} />
        </div>

        <img src={refresh_svg} onClick={() => setRefresh(!refresh)} />
      </Top>

      <Bottom>
        <Container>
          {ups.map(up => {
            return (
              <div className="row">
                <div className="stop">{getKorByEng(up.route)}</div>
                <div className="time">2분 ({up.time.replace(/:00$/, "")})</div>
              </div>
            );
          })}
        </Container>

        <div className="line" />
        <Container>
          {downs.map(down => {
            return (
              <div className="row">
                <div className="stop">{getKorByEng(down.route)}</div>
                <div className="time">
                  2분 ({down.time.replace(/:00$/, "")})
                </div>
              </div>
            );
          })}
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

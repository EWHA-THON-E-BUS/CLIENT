import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllTime } from "../../services/api/stops";
import { useParams } from "react-router-dom";
import { stops } from "../MainPage/stops";

const TimeTable = () => {
  const { id } = useParams();
  console.log(id);
  const [downs, setDowns] = useState([]);
  const [ups, setUps] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getAllTime(id).then(res => {
      console.log(res);
      setDowns(res.data.downs);
      setUps(res.data.ups);

      if (!res.data.downs.length || !res.data.ups.length) {
        setIsEmpty(true);
      }
    });
  }, []);

  const getKorByEng = eng => {
    const stop = stops.find(stop => stop.eng === eng);
    return stop ? stop.kor : null;
  };

  return (
    <>
      {!isEmpty ? (
        <Table>
          <thead>
            <tr>
              <th>상행</th>
              <th>하행</th>
            </tr>
          </thead>
          <tbody>
            {downs.map((down, index) => (
              <tr key={index}>
                <td>
                  <div className="container">
                    <div className="stop">{getKorByEng(down.route)}</div>
                    <div className="time">{down.time.replace(/:00$/, "")}</div>
                  </div>
                </td>
                <td>
                  {ups[index] && (
                    <div className="container">
                      <div className="stop">
                        {getKorByEng(ups[index].route)}
                      </div>
                      <div className="time">
                        {ups[index].time.replace(/:00$/, "")}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Empty>금일 운행 정보가 없습니다</Empty>
      )}
    </>
  );
};

export default TimeTable;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-variant-numeric: lining-nums tabular-nums;

  th {
    padding: 8px 0px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid var(--theme_grey1_grey3);
  }

  th:first-child {
    border-right: 1px solid var(--theme_grey1_grey3);
  }

  td {
    padding: 12px;
    box-sizing: border-box;
    width: 50%;
    border: 1px solid var(--theme_grey1_grey3);
    border-bottom: none;
    border-top: none;

    font-size: 14px;
    font-weight: 400;
  }

  .stop {
    width: 92px;
  }

  .time {
    width: 48px;
    text-align: end;
  }

  td:first-child {
    border-left: none;
  }

  td:last-child {
    border-right: none;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 50%;
  text-align: center;

  background: var(--theme_bg);
`;

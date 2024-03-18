import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getAllTime } from "../../services/api/stops";
import { useParams } from "react-router-dom";
import { stops } from "../MainPage/stops";
import { getKorByEng } from "../MainPage/bus_routes";

const TimeTable = () => {
  const { id } = useParams();

  const [downs, setDowns] = useState([]);
  const [ups, setUps] = useState([]);
  const [closestUp, setClosestUp] = useState("");
  const [closestDown, setClosestDown] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);
  const closestUpRef = useRef(null);

  useEffect(() => {
    getAllTime(id).then(res => {
      setDowns(res.data.downs);
      setUps(res.data.ups);
      res.data.closestDown && setClosestDown(res.data.closestDown.time);
      res.data.closestUp && setClosestUp(res.data.closestUp.time);
      console.log(res);
      // setDowns([
      //   { route: "HANWOORI", time: "12:31" },
      //   { route: "HANWOORI", time: "12:32" },
      // ]);
      // setUps([
      //   { route: "HANWOORI", time: "12:30" },
      //   { route: "HANWOORI", time: "12:31" },
      // ]);
      // setClosestDown("12:32");
      // setClosestUp("12:31");

      if (!res.data.downs.length || !res.data.ups.length) {
        setIsEmpty(true);
      }
    });
  }, []);

  useEffect(() => {
    if (closestUpRef.current) {
      closestUpRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [closestUp]);

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
            {ups.map((up, index) => (
              <tr key={index}>
                <Container
                  ref={up.time === closestUp ? closestUpRef : null}
                  isClosest={up.time === closestUp}
                >
                  <div className="container">
                    <div className="stop">{getKorByEng(up.route)}</div>
                    <div className="time">{up.time.replace(/:00$/, "")}</div>
                  </div>
                </Container>

                {downs[index] && (
                  <Container isClosest={downs[index].time === closestDown}>
                    <div className="container">
                      <div className="stop">
                        {getKorByEng(downs[index].route)}
                      </div>
                      <div className="time">
                        {downs[index].time.replace(/:00$/, "")}
                      </div>
                    </div>
                  </Container>
                )}
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
  padding-top: 50%;
  text-align: center;

  background: var(--theme_bg);
`;

const Container = styled.td`
  background: ${props => props.isClosest && "var(--theme_jade)"};
`;

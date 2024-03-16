import React from "react";
import styled from "styled-components";

const TimeTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>상행</th>
          <th>하행</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="container">
              <div className="stop">한우리집</div>
              <div className="time">12:30</div>
            </div>
          </td>
          <td>
            <div className="container">
              <div className="stop">정문</div>
              <div className="time">12:30</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="container">
              <div className="stop">한우리집</div>
              <div className="time">12:30</div>
            </div>
          </td>
          <td>
            <div className="container">
              <div className="stop">정문</div>
              <div className="time">12:30</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="container">
              <div className="stop">한우리집</div>
              <div className="time">12:30</div>
            </div>
          </td>
          <td>
            <div className="container">
              <div className="stop">정문</div>
              <div className="time">12:30</div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
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

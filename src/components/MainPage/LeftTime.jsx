import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeftTime = ({ time, setRefresh, refresh }) => {
  const [leftTime, setLeftTime] = useState("");

  const calculateLeftTime = time => {
    const hour = parseInt(time.split(":")[0]);
    const min = parseInt(time.split(":")[1]);

    const intervalId = setInterval(() => {
      const now = new Date();
      const targetTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        min,
      );

      const timeDiff = targetTime - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId); // 남은 시간이 없으면 인터벌 종료
      } else {
        const minutes = Math.floor(timeDiff / (1000 * 60)); // 분
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        if (minutes === 0) {
          setLeftTime(`곧도착`);
          if (seconds === 0) {
            setRefresh(!refresh);
          }
        } else {
          setLeftTime(`${minutes}분`); // 남은 시간 업데이트
        }
      }
    }, 1000);
  };

  useEffect(() => {
    calculateLeftTime(time);
  }, []);
  return (
    <Div>
      {leftTime} ({time.replace(/:00$/, "")})
    </Div>
  );
};

export default LeftTime;

const Div = styled.div``;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeftTime = ({ time, setRefresh, refresh }) => {
  const [leftTime, setLeftTime] = useState();

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
        setRefresh(prevRefresh => !prevRefresh); // 시간이 종료되면 refresh 상태를 변경하여 useEffect 트리거링
      } else {
        const minutes = Math.floor(timeDiff / (1000 * 60)); // 분
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        if (seconds > 0) {
          if (minutes === 0) {
            setLeftTime(`곧도착`);
            if (minutes < 0) {
              setRefresh(prevRefresh => !prevRefresh);
            }
          } else {
            setLeftTime(`${minutes}분`); // 남은 시간 업데이트
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 제거
  };

  useEffect(() => {
    calculateLeftTime(time);
  }, [refresh]);

  return (
    <Div>
      {leftTime} ({time.replace(/:00$/, "")})
    </Div>
  );
};

export default LeftTime;

const Div = styled.div``;

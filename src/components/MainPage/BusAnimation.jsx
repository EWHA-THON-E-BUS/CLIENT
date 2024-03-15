import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Bus } from "../../assets/bus_right.svg";

const BusAnimation = ({ className }) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const now = new Date();
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      5,
      43,
      0,
    ); // targetTime에 애니메이션 시작
    const timeDiff = targetTime - now;

    if (timeDiff > 0) {
      // 시간이 아직 지나지 않았을 경우
      const timeoutId = setTimeout(() => {
        // 지정된 시간이 지난 후에 useEffect 재실행 및 애니메이션 시작
        setRefresh(1);
      }, timeDiff);

      return () => clearTimeout(timeoutId); // cleanup 함수에서 타임아웃 제거
    }

    if (timeDiff <= 0) {
      // 이미 지정된 시간이 지났을 경우
      const elapsedMilliseconds = Math.abs(timeDiff); // 경과된 시간 계산
      const progress = (elapsedMilliseconds / (7 * 60 * 1000)) * 100; // 애니메이션 진행도 계산
      if (progress < 100) {
        setAnimationProgress(progress);
      } else {
        setAnimationProgress(0);
      }
    }

    const intervalId = setInterval(() => {
      setAnimationProgress(prevProgress => {
        if (0 < prevProgress && prevProgress < 100) {
          // console.log(prevProgress);
          return prevProgress + 100 / (7 * 60); // 1초마다 진행도 갱신
        }
        clearInterval(intervalId); // 애니메이션이 완료되면 interval 제거
        return 0;
      });
    }, 1000); // 1초마다 애니메이션 진행도 갱신

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트되면 interval 제거
  }, [refresh]);
  return (
    <>
      {animationProgress > 0 && animationProgress < 100 && (
        <AnimationBox progressStatus={`${animationProgress}%`}>
          <div className={className}>
            <StyledBus />
          </div>
        </AnimationBox>
      )}
    </>
  );
};

export default BusAnimation;

const AnimationBox = styled.div`
  width: calc(100% - 30px);

  .ROUTE_0 {
    //연구협력관 상행 노선
    animation-name: move; /* keyframe을 태그에 등록 */
    animation-duration: 420s; /* 7분 동안 실행 */

    transform: translateX(${props => props.progressStatus});
  }
`;

const StyledBus = styled(Bus)`
  position: absolute;
  top: 0;
  transform: translate(0%, -100%);
`;

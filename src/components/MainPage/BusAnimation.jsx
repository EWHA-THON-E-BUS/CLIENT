import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Bus } from "../../assets/bus_right.svg";
import { useRecoilValue } from "recoil";
import { themeState } from "../../services/store/theme";

const BusAnimation = ({ isUp, time }) => {
  const bodyWidth = document.body.clientWidth;
  document.documentElement.style.setProperty("--body-width", `${bodyWidth}px`);

  const [animationProgress, setAnimationProgress] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const theme = useRecoilValue(themeState);

  const hour = parseInt(time.split(":")[0]);
  const min = parseInt(time.split(":")[1]);

  useEffect(() => {
    const now = new Date();

    // const test = new Date(
    //   now.getFullYear(),
    //   now.getMonth(),
    //   now.getDate(),
    //   19,
    //   55,
    //   0,
    // ); //

    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      min,
      0,
    ); // targetTime에 애니메이션 시작

    // const timeDiff = targetTime - test;
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
      if (progress === 0) {
        setAnimationProgress(0.01);
      }
      if (progress < 100) {
        setAnimationProgress(progress);
      } else {
        setAnimationProgress(0);
      }
    }

    const intervalId = setInterval(() => {
      setAnimationProgress(prevProgress => {
        if (0 < prevProgress && prevProgress < 100) {
          console.log(prevProgress);
          return prevProgress + 100 / (7 * 60); // 1초마다 진행도 갱신
        }

        clearInterval(intervalId); // 애니메이션이 완료되면 interval 제거
        return 0;
      });
    }, 1000); // 1초마다 애니메이션 진행도 갱신

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트되면 interval 제거
  }, [refresh, theme]);
  return (
    <>
      {animationProgress > 0 &&
        animationProgress < 100 &&
        (isUp ? (
          <AnimationBox style={{ left: 0 }}>
            <div>
              <StyledBus progressStatus={animationProgress} />
            </div>
          </AnimationBox>
        ) : (
          <AnimationBox style={{ right: 0 }}>
            <div>
              <StyledDownBus
                progressStatus={animationProgress}
                style={{ right: 0, top: "-16px" }}
              />
            </div>
          </AnimationBox>
        ))}
    </>
  );
};

export default BusAnimation;

const AnimationBox = styled.div`
  width: calc(100% - 30px);
`;

const StyledBus = styled(Bus)`
  position: absolute;
  top: 0;
  fill: var(--theme_black_jade_night);
  //상행

  transform: translate(
    calc(
      (var(--body-width) - 48px - 30px) * ${props => props.progressStatus} / 100
    ),
    -100%
  );
`;

const StyledDownBus = styled(Bus)`
  position: absolute;
  top: 0;
  fill: var(--theme_black_jade_night);
  //하행
  transform: translate(
      calc(
        (var(--body-width) - 48px - 30px) * ${props => props.progressStatus} /
          100 * -1
      ),
      0%
    )
    scaleX(-1);
`;

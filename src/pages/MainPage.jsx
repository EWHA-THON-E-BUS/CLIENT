import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import NoticeBanner from "../components/MainPage/NoticeBanner";
import BusMap from "../components/MainPage/BusMap";
import arrow_light from "../assets/arrow_light.svg";
import Board from "../components/MainPage/Board";
import Footer from "../components/common/Footer";
import MyStopList from "../components/MainPage/MyStopList";
import LostItems from "../components/MainPage/LostItems";
const MainPage = ({ className }) => {
  return (
    <Div className={className}>
      <Header isTheme={true} />

      <div className="padding">
        <NoticeBanner />

        <Container>
          <div className="maps">
            <BusMap id={0} />
            <BusMap id={1} />
          </div>

          <div className="btn">
            정류장 전체 위치 보기 <img src={arrow_light} />
          </div>
        </Container>

        <MyStopList />

        <LostItems />

        <Board id={0} />

        <Board id={1} />
      </div>

      <div className="footer-margin">
        <Footer />
      </div>
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  width: 100%;
  background: var(--theme_bg);
  color: var(--theme_font);

  .padding {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .footer-margin {
    margin-top: 32px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .maps {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 4px;
    margin-top: 22px;
  }
`;

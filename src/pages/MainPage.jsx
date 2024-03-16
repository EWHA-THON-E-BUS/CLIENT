import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import NoticeBanner from "../components/MainPage/NoticeBanner";
import BusMap from "../components/MainPage/BusMap";
import Board from "../components/MainPage/Board";
import Footer from "../components/common/Footer";
import MyStopList from "../components/MainPage/MyStopList";
import LostItems from "../components/MainPage/LostItems";
import { useRecoilValue } from "recoil";
import { themeState } from "../services/store/theme";
import { ReactComponent as Arrow } from "../assets/arrow_light.svg";
import { getMainData } from "../services/api/main";

const MainPage = ({ className }) => {
  const theme = useRecoilValue(themeState);

  const [notice, setNotice] = useState([]);
  const [items, setItems] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [appreciation, setAppreciation] = useState([]);

  useEffect(() => {
    getMainData()
      .then(res => {
        console.log(res);
        setNotice(res.data.notice);
        setItems(res.data.items);
        setSuggestion(res.data.suggestion);
        setAppreciation(res.data.appreciation);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Div className={className}>
      <Header isTheme={true} />

      <div className="padding">
        <NoticeBanner notice={notice[0]} />

        <Container>
          {theme === "LIGHT" ? (
            <div className="maps">
              <BusMap index={0} />
              <BusMap index={1} />
            </div>
          ) : (
            <div className="maps">
              <BusMap index={2} />
            </div>
          )}

          <div className="btn">
            정류장 전체 위치 보기
            <StyledArrow />
          </div>
        </Container>

        <MyStopList />

        <LostItems list={items} />

        <Board id={0} list={suggestion} />

        <Board id={1} list={appreciation} />
      </div>

      <div className="footer-margin">
        <Footer />
      </div>
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  font-variant-numeric: lining-nums tabular-nums;
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
    align-items: center;

    color: var(--theme_black_grey2);
  }
`;

const StyledArrow = styled(Arrow)`
  fill: var(--theme_black_grey2);
`;

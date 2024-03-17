import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LostItemListPage from "./pages/LostItemListPage";
import LostItemDetailPage from "./pages/LostItemDetailPage";
import LostItemPostPage from "./pages/LostItemPostPage";
import CommunityListPage from "./pages/CommunityListPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityPostPage from "./pages/CommunityPostPage";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "./services/store/theme";
import TimeTablePage from "./pages/TimeTablePage";
import LoginLoadingPage from "./pages/LoginLoadingPage";
import { PrivateRoute } from "./services/router/PrivateRoute";
import { useEffect } from "react";
import { dayState } from "./services/store/bus";

function App() {
  const [theme, setTheme] = useRecoilState(themeState);
  const day = useRecoilValue(dayState);
  //평일은 21시부터 다크모드, 토요일,일요일은 19시부터 다크모드
  const now = new Date();

  const handleThemeSetTime = (hour, min) => {
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      min,
      0,
    ); // targetTime에 다크모드 설정

    const timeDiff = targetTime - now;

    if (timeDiff > 0) {
      // 시간이 아직 지나지 않았을 경우
      const timeoutId = setTimeout(() => {
        // 지정된 시간이 지난 후에 다크모드 시작
        setTheme("DARK");
        localStorage.setItem("theme", "DARK");
      }, timeDiff);

      return () => clearTimeout(timeoutId); // cleanup 함수에서 타임아웃 제거
    } else {
      //이미 시간이 지났으면
      setTheme("DARK");
      localStorage.setItem("theme", "DARK");
    }
  };

  useEffect(() => {
    if (day === "saturday" && day === "sunday") {
      //주말
      handleThemeSetTime(19, 0);
    } else if (day === "weekday") {
      //평일일 경우
      handleThemeSetTime(21, 0);
    }
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {/* 로그인 해야 접근 가능한 페이지 */}
        <Route path="/lost-item/new" element={<LostItemPostPage />} />
        <Route path="/notice/new" element={<CommunityPostPage />} />
        <Route path="/suggest/new" element={<CommunityPostPage />} />
        <Route path="/appreciate/new" element={<CommunityPostPage />} />
      </Route>

      <Route
        path="/"
        element={<MainPage className={theme === "LIGHT" ? "light" : "dark"} />}
      />
      <Route
        path="/time-table/:id"
        element={
          <TimeTablePage className={theme === "LIGHT" ? "light" : "dark"} />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/loading" element={<LoginLoadingPage />} />
      <Route path="/lost-item" element={<LostItemListPage />} />
      <Route path="/lost-item/:id" element={<LostItemDetailPage />} />
      <Route path="/notice" element={<CommunityListPage />} />
      <Route path="/notice/:id" element={<CommunityDetailPage />} />
      <Route path="/suggest" element={<CommunityListPage />} />
      <Route path="/suggest/:id" element={<CommunityDetailPage />} />
      <Route path="/appreciate" element={<CommunityListPage />} />
      <Route path="/appreciate/:id" element={<CommunityDetailPage />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LostItemListPage from "./pages/LostItemListPage";
import LostItemDetailPage from "./pages/LostItemDetailPage";
import LostItemPostPage from "./pages/LostItemPostPage";
import CommunityListPage from "./pages/CommunityListPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityPostPage from "./pages/CommunityPostPage";
import { useRecoilValue } from "recoil";
import { themeState } from "./services/store/theme";
import TimeTablePage from "./pages/TimeTablePage";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage className={theme === "LIGHT" ? "light" : "dark"} />}
      />
      <Route
        path="/time-table"
        element={
          <TimeTablePage className={theme === "LIGHT" ? "light" : "dark"} />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lost-item" element={<LostItemListPage />} />
      <Route path="/lost-item/:id" element={<LostItemDetailPage />} />
      <Route path="/lost-item/new" element={<LostItemPostPage />} />
      <Route path="/notice" element={<CommunityListPage />} />
      <Route path="/notice/:id" element={<CommunityDetailPage />} />
      <Route path="/notice/new" element={<CommunityPostPage />} />
      <Route path="/suggest" element={<CommunityListPage />} />
      <Route path="/suggest/:id" element={<CommunityDetailPage />} />
      <Route path="/suggest/new" element={<CommunityPostPage />} />
      <Route path="/appreciate" element={<CommunityListPage />} />
      <Route path="/appreciate/:id" element={<CommunityDetailPage />} />
      <Route path="/appreciate/new" element={<CommunityPostPage />} />
    </Routes>
  );
}

export default App;

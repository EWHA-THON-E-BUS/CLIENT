import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LostItemListPage from "./pages/LostItemListPage";
import LostItemDetailPage from "./pages/LostItemDetailPage";
import LostItemPostPage from "./pages/LostItemPostPage";
import SuggestAppreciateListPage from "./pages/SuggestAppreciateListPage";
import SuggestAppreciateDetailPage from "./pages/SuggestAppreciateDetailPage";
import SuggestAppreciatePostPage from "./pages/SuggestAppreciatePostPage";
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
      <Route path="/suggest" element={<SuggestAppreciateListPage />} />
      <Route path="/suggest/:id" element={<SuggestAppreciateDetailPage />} />
      <Route path="/suggest/new" element={<SuggestAppreciatePostPage />} />
      <Route path="/appreciate" element={<SuggestAppreciateListPage />} />
      <Route path="/appreciate/:id" element={<SuggestAppreciateDetailPage />} />
      <Route path="/appreciate/new" element={<SuggestAppreciatePostPage />} />
    </Routes>
  );
}

export default App;

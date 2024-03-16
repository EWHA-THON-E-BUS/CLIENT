import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LostItemListPage from "./pages/LostItemListPage";
import LostItemDetailPage from "./pages/LostItemDetailPage";
import LostItemPostPage from "./pages/LostItemPostPage";
import { useRecoilValue } from "recoil";
import { themeState } from "./services/store/theme";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage className={theme === "LIGHT" ? "light" : "dark"} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lost-item" element={<LostItemListPage />} />
      <Route path="/lost-item/:id" element={<LostItemDetailPage />} />
      <Route path="/lost-item/new" element={<LostItemPostPage />} />
    </Routes>
  );
}

export default App;

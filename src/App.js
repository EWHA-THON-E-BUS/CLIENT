import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
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
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/time-table"
        element={
          <TimeTablePage className={theme === "LIGHT" ? "light" : "dark"} />
        }
      />
    </Routes>
  );
}

export default App;

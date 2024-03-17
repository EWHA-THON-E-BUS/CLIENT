import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../store/auth";

export const PrivateRoute = () => {
  const isLogin = useRecoilValue(isLoginState);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

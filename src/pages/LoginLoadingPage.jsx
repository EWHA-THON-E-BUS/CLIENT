import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postAuthCode } from "../services/api/auth";

const LoginLoadingPage = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1]; // 인가코드
  const navigate = useNavigate();

  useEffect(() => {
    postAuthCode(KAKAO_CODE)
      .then(res => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.accessToken);
          navigate("/");
          window.location.reload();
        }
      })
      .catch(err => {
        alert("로그인에 실패하였습니다.");
        navigate("/login");
      });
  }, []);

  return <div>로그인 중...</div>;
};

export default LoginLoadingPage;

import React from "react";

import logo from "../assets/common/logo.png";
import kakao from "../assets/login/kakao.svg";
import styled from "styled-components";

const LoginPage = () => {
  const handlekakaoLogin = () => {
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN;
    const KAKAO_AUTH_URL = `${SERVER_DOMAIN}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

    //window.open(KAKAO_AUTH_URL);
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Wrapper>
      <img className="logo" src={logo} alt="logo" />

      <div className="login-button" onClick={handlekakaoLogin}>
        <img src={kakao} className="kakao-icon" alt="" />
      </div>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(
    --gradient,
    linear-gradient(180deg, var(--jade) 0%, var(--grey1) 100%)
  );

  .logo {
    position: absolute;
    top: 30%;
    width: 120px;
    height: 60px;
    flex-shrink: 0;
  }

  .login-button {
    cursor: pointer;
    position: absolute;
    bottom: 25%;
  }
`;

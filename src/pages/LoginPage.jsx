import React from "react";

import logo_padding from "../assets/logo_padding.svg";
import kakao from "../assets/kakao.svg";
import styled from "styled-components";

const LoginPage = () => {
  const handlekakaoLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL;
  };

  return (
    <Div>
      <img className="logo" src={logo_padding} alt="logo" />

      <div className="login-button" onClick={handlekakaoLogin}>
        <img src={kakao} alt="" />
      </div>
    </Div>
  );
};

export default LoginPage;

const Div = styled.div`
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

    flex-shrink: 0;
  }

  .login-button {
    cursor: pointer;
    position: absolute;
    bottom: 25%;
  }
`;

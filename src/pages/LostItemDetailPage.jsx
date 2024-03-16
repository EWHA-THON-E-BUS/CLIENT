import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow_bold.svg";
import { ReactComponent as Delete } from "../assets/cancel.svg";
import profileimg from "../assets/profile.svg";
import adminprofileimg from "../assets/profile_jade.svg";

const LostItemDetailPage = () => {
  const nav = useNavigate();
  const onDelete = () => {};
  return (
    <Wrapper>
      <Title>
        <div className="inner">
          <Arrow className="arrow" onClick={() => nav("/lost-item")} />
          <p>초록색 이화 반지갑 (컴공 ㄱㅇㅎ벗)</p>
        </div>
        {true && <Delete className="delete" onClick={onDelete} />}
      </Title>
      <Main>
        <div className="img-rect">
          <img
            src={
              "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg"
            }
            alt="lost-item-detail-image"
          />
        </div>
        <Profile>
          <div className="img-circle">
            <img src={false ? profileimg : adminprofileimg} alt="profile" />
          </div>
          <p className={true ? "admin" : ""}>
            {false ? "익명의 벗" : "관리자"}
          </p>
        </Profile>
        {[
          { text: "발견 날짜", item: "0000-00-00" },
          {
            text: "발견 시간",
            item: "3시 15분, 5교시 끝난 쉬는시간3시 15분, 5교시 끝난 쉬는시간3시 15분, 5교시 끝난 쉬는시간3시 15",
          },
          { text: "발견 위치", item: "셔틀 셋째 줄 의자 아래" },
          { text: "맡긴 위치", item: "기사님께 맡겼어요" },
        ].map(el => (
          <Info key={el.text}>
            <p>{el.text}</p>
            <div className="border" />
            <p>{el.item}</p>
          </Info>
        ))}
      </Main>
    </Wrapper>
  );
};

export default LostItemDetailPage;

const Wrapper = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;

  svg {
    fill: var(--black);
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 8px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
  .inner {
    display: flex;
    align-items: center;
  }
  .arrow {
    transform: rotate(180deg);
    height: 14px;
  }
  p {
    color: var(--black);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .delete {
    padding-top: 12px;
  }
`;

const Main = styled.div`
  margin-top: 18px;
  .img-rect {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--black);
  .img-circle {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 6px 0 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    color: var(--grey2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  .admin {
    color: var(--jade_night);
  }
`;

const Info = styled.div`
  padding: 0 8px;
  display: flex;
  margin-top: 16px;
  gap: 8px;
  .border {
    width: 0px;
    height: 15px;
    border-left: 2px solid var(--black);
  }
  p {
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  :first-child {
    font-weight: 600;
    flex-shrink: 0;
  }
`;

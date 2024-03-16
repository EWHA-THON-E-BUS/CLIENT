import React from "react";
import styled from "styled-components";
import DetailTopBar from "../components/LostItemPage/DetailTopBar";
import profileimg from "../assets/profile.svg";
import { ReactComponent as EmptyHeart } from "../assets/heart_empty.svg";
import { ReactComponent as FillHeart } from "../assets/heart_fill.svg";

const SuggestAppreciateDetailPage = () => {
  const isSuggest = window.location.pathname.includes("suggest");
  return (
    <Wrapper>
      <DetailTopBar
        title="건의해요 건의해요 건의해요 건의해요 건의해요건의해요"
        backTo={isSuggest ? "/suggest" : "/appreciate"}
        isMy={true}
        onDelete={null}
      />
      <Info>
        <div className="img-circle">
          <img src={profileimg} alt="profile" />
        </div>
        <p>익명의 벗</p>
        <p>0000-00-00</p>
        <Heart>
          <EmptyHeart />
          {"9999"}
        </Heart>
      </Info>
      <Content>
        국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
        국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다.
        국무총리는 국회의 동의를 얻어 대통령이 임명한다. 한 회계연도를 넘어
        계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서
        국회의 의결을 얻어야 한다. 국무회의는 정부의 권한에 속하는 중요한 정책을
        심의한다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은
        법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 모든 국민은
        직업선택의 자유를 가진다. 국회는 국가의 예산안을 심의·확정한다.
        대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.
      </Content>
    </Wrapper>
  );
};

export default SuggestAppreciateDetailPage;

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

const Info = styled.div`
  width: 100%;
  padding: 16px 0;
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
    color: var(--black);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  :nth-child(3) {
    margin: 0 12px;
    color: var(--grey2);
  }
`;

const Content = styled.div`
  color: var(--black);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  word-break: keep-all;
  margin: 16px 8px;
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--jade);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  svg {
    padding: 0;
    cursor: default;
  }
`;

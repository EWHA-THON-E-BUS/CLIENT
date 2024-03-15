import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Item = ({ item }) => {
  // const {} = item;
  const nav = useNavigate();
  return (
    <Container onClick={() => nav(`/lost-item/${1}`)}>
      <div className="img-rect">
        <img
          src={
            "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg"
          }
          alt="lost-item-image"
        />
      </div>
      <TextSection>
        <h1>분실물 이름 분실물 이름 분실물 이름 분실물 이름이름이름이름이름</h1>
        <div>
          <p>익명의 벗</p>
          <p>{"00. 00. 00"} 발견</p>
        </div>
      </TextSection>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  width: calc(100% - 64px);
  margin: 0 24px;
  padding: 8px;
  border-bottom: 1px solid var(--grey1);
  display: flex;
  gap: 8px;

  .img-rect {
    width: 64px;
    height: 64px;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const TextSection = styled.div`
  width: calc(100% - 72px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    width: 100%;
    height: 14px;
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  p {
    color: var(--grey2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-top: 4px;
  }
`;

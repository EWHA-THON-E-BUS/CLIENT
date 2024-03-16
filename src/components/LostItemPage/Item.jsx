import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const item = {
  itemId: 1,
  writerRole: "ADMIN",
  title: "분실물 이름 분실물 이름 분실물 이름 분실물 이름이름이름이름이름",
  image:
    "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg",
  foundDate: "2024-03-15",
};

const Item = () => {
  const { itemId, writerRole, title, image, foundDate } = item;
  const nav = useNavigate();
  return (
    <Container onClick={() => nav(`/lost-item/${itemId}`)}>
      <div className="img-rect">
        <img src={image} alt="lost-item-image" />
      </div>
      <TextSection>
        <h1>{title}</h1>
        <div>
          <p className={writerRole === "ADMIN" ? "admin" : ""}>
            {writerRole === "ADMIN" ? "관리자" : "익명의 벗"}
          </p>
          <p>{foundDate} 발견</p>
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
  border-top: 1px solid var(--grey1);
  display: flex;
  gap: 8px;

  * {
    cursor: default;
  }

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
    margin: 4px 0 3px 0;
  }
  .admin {
    color: var(--jade_night);
  }
`;

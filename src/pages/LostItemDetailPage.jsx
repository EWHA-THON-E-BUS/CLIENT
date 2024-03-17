import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import profileimg from "../assets/profile.svg";
import adminprofileimg from "../assets/profile_jade.svg";
import DetailTopBar from "../components/LostItemPage/DetailTopBar";
import { getItemDetail, deleteItem } from "../services/api/item";

const LostItemDetailPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItemDetail(id)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [id]);
  const onDelete = () => {
    deleteItem(id)
      .then(res => nav("/lost-item"))
      .catch(err => console.log(err));
  };
  const {
    title,
    itemId,
    writerRole,
    image,
    foundDate,
    foundTime,
    foundLocation,
    depository,
  } = item;
  return (
    <>
      {item && (
        <Wrapper>
          <DetailTopBar title={title} isMy={true} onDelete={onDelete} />
          <Main>
            <div className="img-rect">
              <img src={image} alt="lost-item-detail-image" />
            </div>
            <Profile>
              <div className="img-circle">
                <img
                  src={writerRole === "ADMIN" ? adminprofileimg : profileimg}
                  alt="profile"
                />
              </div>
              <p className={writerRole === "ADMIN" ? "admin" : ""}>
                {writerRole === "ADMIN" ? "관리자" : "익명의 벗"}
              </p>
            </Profile>
            {[
              { text: "발견 날짜", item: foundDate },
              {
                text: "발견 시간",
                item: foundTime,
              },
              { text: "발견 위치", item: foundLocation },
              { text: "맡긴 위치", item: depository },
            ].map(el => (
              <Info key={el.text}>
                <p>{el.text}</p>
                <div className="border" />
                <p>{el.item}</p>
              </Info>
            ))}
          </Main>
        </Wrapper>
      )}
    </>
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

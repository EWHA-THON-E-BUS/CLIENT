import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DetailTopBar from "../components/LostItemPage/DetailTopBar";
import profileimg from "../assets/profile.svg";
import adminprofileimg from "../assets/profile_jade.svg";
import { ReactComponent as EmptyHeart } from "../assets/heart_empty.svg";
import { ReactComponent as FillHeart } from "../assets/heart_fill.svg";
import { getNoticeDetail, deleteNotice } from "../services/api/notice";
import { getPostDetail, deletePost, postHeart } from "../services/api/post";
import { getMember } from "../services/api/member";

const CommunityDetailPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const isNotice = window.location.pathname.includes("notice");
  const isSuggest = window.location.pathname.includes("suggest");
  const [item, setItem] = useState({});
  const [trigger, setTrigger] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    getMember()
      .then(res => setIsAdmin(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    if (isNotice) {
      getNoticeDetail(id)
        .then(res => setItem(res.data))
        .catch(err => console.log(err));
    } else {
      getPostDetail(id)
        .then(res => setItem(res.data))
        .catch(err => console.log(err));
    }
  }, [isNotice, isSuggest, id, trigger]);
  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      if (isNotice) {
        deleteNotice(id)
          .then(res => nav("/notice"))
          .catch(err => console.log(err));
      } else {
        deletePost(id)
          .then(res => nav(`/${isSuggest ? "suggest" : "appreciate"}`))
          .catch(err => console.log(err));
      }
    }
  };
  const handleHeart = () => {
    postHeart(id)
      .then(res => setTrigger(trigger + 1))
      .catch(err => console.log(err));
  };
  return (
    <>
      {((isNotice && item) || (!isNotice && item.post && item.member)) && (
        <Wrapper>
          <DetailTopBar
            title={isNotice ? item.title : item.post.title}
            isMy={isNotice ? isAdmin : item.member.isWriter}
            onDelete={onDelete}
          />
          <Info>
            <div className="img-circle">
              <img
                src={isNotice ? adminprofileimg : profileimg}
                alt="profile"
              />
            </div>
            <p>{isNotice ? "관리자" : "익명의 벗"}</p>
            <p>
              {new Date(
                isNotice ? item.createdDate : item.post.createdDate,
              ).toLocaleDateString()}
            </p>
            {!isNotice && (
              <Heart onClick={handleHeart}>
                {item.heartCount}
                {item.member.hasHeart ? <FillHeart /> : <EmptyHeart />}
              </Heart>
            )}
          </Info>
          <Content>{isNotice ? item.content : item.post.content}</Content>
        </Wrapper>
      )}
    </>
  );
};

export default CommunityDetailPage;

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
  position: relative;
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
  position: absolute;
  right: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--jade);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  svg {
    width: 22px;
    height: 20px;
    padding: 0;
  }
`;

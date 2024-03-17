import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import TitleSection from "../components/LostItemPage/TitleSection";
import Item from "../components/CommunityPage/Item";
import { getNotices } from "../services/api/notice";
import { getPosts } from "../services/api/post";

const CommunityListPage = () => {
  const isNotice = window.location.pathname.includes("notice");
  const isSuggest = window.location.pathname.includes("suggest");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (isNotice) {
      getNotices()
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    } else {
      getPosts(isSuggest ? "suggestion" : "appreciation")
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    }
  }, [isNotice, isSuggest]);
  return (
    <>
      <Header />
      <TitleSection
        title={isNotice ? "공지사항" : isSuggest ? "건의해요" : "고마워요"}
        text={
          isNotice
            ? "공지사항 작성하기"
            : isSuggest
            ? "건의사항 작성하기"
            : "글 작성하기"
        }
        moveTo={
          isNotice
            ? "/notice/new"
            : isSuggest
            ? "/suggest/new"
            : "/appreciate/new"
        }
      />
      {posts &&
        posts.map((el, idx) => (
          <Item
            type={isNotice ? "notice" : isSuggest ? "suggest" : "appreciate"}
            item={el}
            isFirst={idx === 0}
            key={isNotice ? el.noticeId : el.postId}
          />
        ))}
      <br />
    </>
  );
};

export default CommunityListPage;

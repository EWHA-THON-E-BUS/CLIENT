import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import TitleSection from "../components/LostItemPage/TitleSection";
import Item from "../components/CommunityPage/Item";

const CommunityListPage = () => {
  const isSuggest = window.location.pathname.includes("suggest");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (isSuggest) {
      // 건의사항 api
    } else {
    }
  }, [isSuggest]);
  return (
    <>
      <Header />
      <TitleSection
        title={isSuggest ? "건의해요" : "감사해요"}
        text={isSuggest ? "건의사항 작성하기" : "글 작성하기"}
        moveTo={isSuggest ? "/suggest/new" : "/appreciate/new"}
      />
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, idx) => (
        <Item
          type={isSuggest ? "suggest" : "appreciate"}
          item={el}
          isFirst={idx === 0}
          key={0}
        />
      ))}
      <br />
    </>
  );
};

export default CommunityListPage;

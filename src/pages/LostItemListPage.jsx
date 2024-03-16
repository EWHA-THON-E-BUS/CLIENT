import React, { useState } from "react";
import Header from "../components/common/Header";
import TitleSection from "../components/LostItemPage/TitleSection";
import SearchBar from "../components/LostItemPage/SearchBar";
import Item from "../components/LostItemPage/Item";

const LostItemListPage = () => {
  const [search, setSearch] = useState({ keyword: "", date: "" });
  return (
    <>
      <Header />
      <TitleSection
        title="분실물"
        text="분실물 제보하기"
        moveTo="/lost-item/new"
      />
      <SearchBar search={search} setSearch={setSearch} />
      <p>
        {search.keyword}
        {search.date.toLocaleString()}
      </p>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(el => (
        <Item item={el} key={0} />
      ))}
      <br />
    </>
  );
};

export default LostItemListPage;

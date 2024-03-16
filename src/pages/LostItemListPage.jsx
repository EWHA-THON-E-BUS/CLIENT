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
      <TitleSection />
      <SearchBar search={search} setSearch={setSearch} />
      <p>
        {search.keyword}
        {search.date.toLocaleString()}
      </p>
      {[0, 0, 0, 0, 0, 0, 0].map(el => (
        <Item item={el} key={0} />
      ))}
    </>
  );
};

export default LostItemListPage;

import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TitleSection from "../components/LostItemPage/TitleSection";
import SearchBar from "../components/LostItemPage/SearchBar";
import Item from "../components/LostItemPage/Item";
import { getItems } from "../services/api/item";

const LostItemListPage = () => {
  const [search, setSearch] = useState({ keyword: "", date: "" });
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems({
      ...search,
      date: search.date
        ? `${
            new Date(search.date)
              .toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .split(". ")
              .join("-")
              .split(".")[0]
          }`
        : "",
    })
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, [search]);
  return (
    <>
      <Header />
      <TitleSection
        title="분실물"
        text="분실물 제보하기"
        moveTo="/lost-item/new"
      />
      <SearchBar search={search} setSearch={setSearch} />
      {items && items.map(el => <Item item={el} key={el.itemId} />)}
      <br />
    </>
  );
};

export default LostItemListPage;

import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Cancel } from "../../assets/cancel.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ko";

const SearchBar = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    setSearch({ ...search, keyword: value });
  };
  const onClear = () => {
    setValue("");
    setSearch({ keyword: "", date: "" });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <Container onSubmit={onSubmit}>
        <div className="inner inner1">
          {search.keyword || search.date ? (
            <Cancel onClick={onClear} />
          ) : (
            <Search style={{ cursor: "default" }} />
          )}
          <Input
            placeholder="분실물 검색"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div className="inner inner2">
          {search.date && (
            <p className="date">
              {new Date(search.date).toLocaleString("ko-KR", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          )}
          <Calendar onClick={() => setIsOpen(true)} />
        </div>
      </Container>
      <Border />
      <DatePicker
        open={isOpen}
        onClose={() => setIsOpen(false)}
        value={search.date}
        onChange={value => setSearch({ ...search, date: value })}
      />
    </LocalizationProvider>
  );
};

export default SearchBar;

const Container = styled.form`
  width: calc(100% - 64px);
  margin: 0 24px;
  padding: 8px;
  background-color: var(--jade);
  color: var(--black);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  svg {
    height: 20px;
    fill: var(--black);
    cursor: pointer;
    margin-right: 8px;
  }

  .inner {
    display: flex;
    align-items: center;
  }
  .inner1 {
    width: calc(100% - 120px);
  }
  .inner2 {
    max-width: 120px;
  }

  .date {
    padding: 0 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
`;

const Border = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;
  margin-top: 16px;
  border-bottom: 1px solid var(--grey1);
`;

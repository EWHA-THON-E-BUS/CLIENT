import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Add } from "../../assets/plus.svg";
import { ReactComponent as Delete } from "../../assets/minus.svg";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ko";
import { postItem, getS3ImgUrl } from "../../services/api/item";

const Form = () => {
  const nav = useNavigate();
  const [post, setPost] = useState({
    title: "",
    image: "",
    foundDate: "",
    foundTime: "",
    foundLocation: "",
    depository: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState({
    imagePreviewUrl: "",
    imageBlob: null,
  });
  const inputRef = useRef(null);
  let reader = new FileReader();
  const handleImage = e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage({ imagePreviewUrl: reader.result, imageBlob: file });
        e.target.value = "";
      };
    }
  };
  const resetImage = () =>
    setImage({
      imagePreviewUrl: "",
      imageBlob: null,
    });
  const onSubmit = () => {
    console.log(post);
    // 이미지 s3 url 변환
    // .then(res => setPost({...post, image: res.url}));
    // .then(서버에 post 요청)
    // nav(`/lost-item/${id}`);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      {[
        {
          title: "분실물 내용",
          placeholder: "e.g. 초록색 이화 반지갑 (컴공 ㄱㅇㅎ벗)",
          key: "title",
        },
        {
          title: "발견 날짜",
          placeholder: "",
          key: "foundDate",
        },
        {
          title: "발견 시간",
          placeholder: "e.g. 3시 15분, 5교시 끝난 쉬는 시간",
          key: "foundTime",
        },
        {
          title: "발견 위치",
          placeholder: "e.g. 셔틀 셋째 줄 의자 아래",
          value: post.foundLocation,
          onChange: null,
        },
        {
          title: "맡긴 위치",
          placeholder: "e.g. 기사님께 맡겼어요",
          key: "depository",
        },
      ].map(el => (
        <Field $isflex={el.title === "발견 날짜"} key={el.title}>
          <p>{el.title}</p>
          {el.title === "발견 날짜" ? (
            <div className="inner">
              <Calendar onClick={() => setIsOpen(true)} />
              {post.foundDate && (
                <p>
                  {new Date(post.foundDate).toLocaleString("ko-KR", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
              )}
            </div>
          ) : (
            <Input
              placeholder={el.placeholder}
              maxLength={
                el.title === "분실물 내용" || el.title === "발견 시간" ? 30 : 50
              }
              value={post[el.key] || ""}
              onChange={e => setPost({ ...post, [el.key]: e.target.value })}
            />
          )}
        </Field>
      ))}
      <Field $isimage={true}>
        <div className="inner">
          <p>분실물의 사진을 추가해주세요</p>
          {image.imagePreviewUrl ? (
            <Delete onClick={resetImage} />
          ) : (
            <Add onClick={() => inputRef.current.click()} />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="image-input"
          onChange={handleImage}
        />
        {image.imagePreviewUrl && (
          <div className="img-rect">
            <img src={image.imagePreviewUrl} alt="lost-item-new-image" />
          </div>
        )}
      </Field>
      <Submit onClick={onSubmit}>
        <p>제보 완료하기</p>
        <Arrow />
      </Submit>
      <DatePicker
        open={isOpen}
        onClose={() => setIsOpen(false)}
        value={post.foundDate}
        onChange={value => setPost({ ...post, foundDate: value })}
      />
    </LocalizationProvider>
  );
};

export default Form;

const Field = styled.div`
  margin-bottom: 32px;
  display: ${props => (props.$isflex || props.$isimage ? "flex" : "block")};
  justify-content: ${props =>
    props.$isimage ? "space-between" : "flex-start"};
  align-items: ${props =>
    props.$isflex ? "center" : props.$isimage ? "flex-start" : ""};

  p {
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin-left: 8px;
    flex-shrink: 0;
  }

  .inner {
    width: ${props => (props.$isflex ? "100%" : "auto")};
    height: 20px;
    display: flex;
    justify-content: ${props =>
      props.$isflex ? "space-between" : props.$isimage ? "flex-start" : ""};
    align-items: center;
    p {
      font-weight: ${props => (props.$isflex ? 400 : 600)};
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .image-input {
    display: none;
  }
  .img-rect {
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 2px;
  }
`;

const Input = styled.input`
  width: calc(100% - 16px);
  color: var(--black);
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border-bottom: 1px solid var(--black);
  padding: 8px;
  padding-bottom: 6px;
  font-family: Pretendard-regular;
`;

const Submit = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 64px;
  p {
    color: var(--black);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
`;

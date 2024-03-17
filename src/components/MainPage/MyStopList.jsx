import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyStop from "./MyStop";
import plus_grey from "../../assets/plus_grey.svg";
import Modal from "./Modal";
import { getPinnedStops } from "../../services/api/stops";

const MyStopList = () => {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [pinnedStops, setPinnedStops] = useState([]);
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    getPinnedStops().then(res => {
      setPinnedStops(res.data.stopId);
    });
  }, [refresh]);
  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          pinnedStops={pinnedStops}
          setPinnedStops={setPinnedStops}
        />
      )}
      <Div>
        {pinnedStops.map(id => {
          return (
            <MyStop
              key={id}
              stopId={id}
              pinnedStops={pinnedStops}
              setPinnedStops={setPinnedStops}
            />
          );
        })}
        {pinnedStops.length === 0 && <div>내 정류장 추가하기</div>}
        {pinnedStops.length < 3 && (
          <img
            className="plus"
            src={plus_grey}
            onClick={() => setShowModal(!showModal)}
          />
        )}
      </Div>
    </>
  );
};

export default MyStopList;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .plus {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

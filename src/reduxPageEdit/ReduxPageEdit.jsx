import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SaveModal from "./SaveModal";

export default function ReduxPageEdit() {
  const [pageEditModal, setPageEditModal] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.list;
  });

  const editName = useSelector((state) => {
    return state.editName;
  });
  console.log(editName);

  // 해당하는 아이템 인덱스 찾기
  const stateItem = list.findIndex((state) => {
    return state.id === params.editId;
  });

  const [editNameValue, setEditNameValue] = useState(editName);

  function handleEditOnChange(e) {
    setEditNameValue(e.target.value);

    dispatch({
      type: "editUpdate",
      payload: {
        editName: e,
        // id: list[stateItem].id,
      },
    });
  }

  // 저장 버튼
  // function handleSaveOnClick() {
  //   dispatch({
  //     type: "save",
  //     payload: {
  //       name: editNameValue,
  //       id: list[stateItem].id,
  //     },
  //   });
  // }

  function handleSaveOnClick() {
    setPageEditModal((state) => {
      return !state;
    });
  }

  return (
    <>
      <div>
        <input
          type="text"
          className="border-[1px] border-black"
          value={editNameValue}
          onChange={handleEditOnChange}
        />
        <button
          className="bg-black text-white p-[1px]"
          onClick={handleSaveOnClick}
        >
          저장
        </button>
      </div>
      {pageEditModal && (
        <SaveModal editNameValue={editNameValue} id={list[stateItem].id} />
      )}
    </>
  );
}

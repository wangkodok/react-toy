import { useState } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function ReduxPageEdit() {
  const [isModal, setIsModal] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [inputValue, setInputValue] = useState("");
  // const params = useParams();
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.name;
  });
  const list = useSelector((state) => {
    return state.list;
  });

  function handleOnChange(e) {
    setInputValue(e.target.value);

    dispatch({
      type: "name",
      payload: e,
    });
  }

  function handleOnClick() {
    setInputValue("");

    dispatch({
      type: "edit",
      payload: {
        name: name,
        id: nanoid(),
      },
    });
  }

  function handleItemClick(id) {
    setUniqueId(() => {
      return id;
    });

    setIsModal((state) => {
      return !state;
    });
  }

  function handleDeleteClick(id) {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  }

  return (
    <section className="relative">
      <h1># 리덕스 활용하여 CRUD 추가</h1>
      <form
        className="p-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="border-[1px] border-black p-[3px]"
          value={inputValue}
          onChange={handleOnChange}
        />
        <button
          className="bg-black text-white py-[4px] px-[6px]"
          onClick={handleOnClick}
        >
          저장
        </button>
        <ul>
          {list.map((item, id) => {
            return (
              <li key={id} className="mt-2 flex items-center">
                <Link
                  to="/react"
                  className="flex justify-items-center items-center mr-2"
                  onClick={() => {
                    handleItemClick(item.id);
                  }}
                >
                  <p>이름 : {item.name}</p>
                </Link>
                <button
                  className="border-[1px] border-black px-2"
                  onClick={() => {
                    handleDeleteClick(item.id);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </form>
      {isModal && <Modal id={uniqueId} />}
    </section>
  );
}

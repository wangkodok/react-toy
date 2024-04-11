import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxStudyList() {
  const dispatch = useDispatch();
  const array = useSelector((state) => {
    return state.array;
  });

  // 입력 값
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");

  // 변경
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  function handleAddTodo() {
    dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        name: inputNameValue,
        phone: inputPhoneValue,
      },
    });
    setInputNameValue("");
    setInputPhoneValue("");
  }

  function handleEditClick(id, nameValue, phoneValue) {
    setEditId(id);
    setEditName(nameValue);
    setEditPhone(phoneValue);
  }

  function handleUpdateTodo() {
    dispatch({
      type: "update",
      payload: {
        id: editId,
        name: editName,
        phone: editPhone,
      },
    });
    setEditId(null);
    setEditName("");
    setEditPhone("");
  }

  function handleDeleteTodo(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  console.log(array);

  return (
    <section>
      <h1>
        # 리덕스를 사용하여 할 일 목록에서 input 값을 받아와서 변경하고 저장
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={inputNameValue}
          onChange={(e) => setInputNameValue(e.target.value)}
          placeholder="이름"
        />
        <br />

        <input
          type="text"
          value={inputPhoneValue}
          onChange={(e) => setInputPhoneValue(e.target.value)}
          placeholder="휴대폰"
        />
        <br />

        <button onClick={handleAddTodo}>추가</button>
      </form>
      <ul>
        {array.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="이름을 입력하세요."
                />
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  placeholder="휴대폰 번호를 입력하세요."
                />
                <button onClick={handleUpdateTodo}>저장</button>
              </>
            ) : (
              <>
                <p>
                  <span>이름：{todo.name}</span>
                  <span> , </span>
                  <span>휴대폰：{todo.phone}</span>
                  <span> </span>
                  <button
                    onClick={() =>
                      handleEditClick(todo.id, todo.name, todo.phone)
                    }
                  >
                    변경
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    삭제
                  </button>
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

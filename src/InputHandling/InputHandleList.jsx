import { useState } from "react";

export default function InputHandleList() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // 추가 버튼
  function handleAddTodo() {
    setTodo((state) => {
      return [...state, { id: Date.now(), text: inputValue }];
    });
    setInputValue("");
  }

  // 편집 버튼
  function handleEditTodo(id, text) {
    setEditingTodoId(id);
    setEditingText(text);
  }

  // 저장 버튼
  function handleUpdateTodo(id) {
    // const updated = todo.map((data) => {
    //   if (data.id === id) {
    //     return { ...data, text: editingText };
    //   }
    //   return data;
    // });
    // setTodo(updated);

    setTodo((state) => {
      return state.map((data) => {
        if (data.id === id) {
          return { ...data, text: editingText };
        }
        return data;
      });
    });
    setEditingTodoId(null);
    setEditingText("");
  }

  // 삭제 버튼
  function handleDeleteTodo(id) {
    // setTodo(todo.filter((todo) => todo.id !== id));
    setTodo((state) => {
      return state.filter((todo) => todo.id !== id);
    });
  }

  return (
    <section>
      <h1># 할 일 목록에서 input 값을 받아와서 변경하고 저장</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="할 일을 추가해 보세요."
        onChange={(e) => {
          return setInputValue(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>추가</button>

      {/* 리스트 */}
      <ul>
        {todo.map((todo) => {
          return (
            <li key={todo.id}>
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => {
                      return setEditingText(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      return handleUpdateTodo(todo.id);
                    }}
                  >
                    저장
                  </button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button
                    onClick={() => {
                      return handleEditTodo(todo.id, todo.text);
                    }}
                  >
                    편집
                  </button>
                  <button
                    onClick={() => {
                      return handleDeleteTodo(todo.id);
                    }}
                  >
                    삭제
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

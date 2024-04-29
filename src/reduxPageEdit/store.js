import { createStore } from "redux";

const initialState = { list: [], name: "", editName: "" };

function counterReducer(state = initialState, action) {
  if (action.type === "edit") {
    return {
      ...state,
      list: [...state.list, action.payload],
    };
  }

  if (action.type === "name") {
    return {
      ...state, // 객체 복사
      name: action.payload.target.value,
    };
  }

  if (action.type === "modal") {
    return {
      ...state, // 객체 복사
      editName: action.payload,
    };
  }

  if (action.type === "editUpdate") {
    return {
      ...state, // 객체 복사
      editName: action.payload.editName.target.value,
    };
  }

  if (action.type === "save") {
    // 해당하는 아이템 인덱스 찾기
    const stateItem = state.list.findIndex((state) => {
      return state.id === action.payload.id;
    });

    // 해당하는 아이템 변경
    state.list[stateItem].name = action.payload.name;
  }

  if (action.type === "delete") {
    // 해당하는 아이템 삭제
    const stateItem = state.list.filter((state) => {
      return state.id !== action.payload.id;
    });

    return {
      ...state,
      list: [...stateItem],
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;

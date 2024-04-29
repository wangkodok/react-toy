import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const modal =
  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 bg-slate-200 p-2";

export default function Modal({ id }) {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.list;
  });

  const stateItem = list.findIndex((state) => {
    return state.id === id;
  });

  console.log(list[stateItem].name, "해당하는 아이템의 모달창 클릭");

  function handleModalOnClick() {
    dispatch({
      type: "modal",
      payload: list[stateItem].name,
    });
  }

  return (
    <div className={modal}>
      <p className="mb-2">변경하시겠습니까?</p>
      <Link to={`${id}`} className="mr-2" onClick={handleModalOnClick}>
        변경
      </Link>
      <button className="mr-2">취소</button>
    </div>
  );
}

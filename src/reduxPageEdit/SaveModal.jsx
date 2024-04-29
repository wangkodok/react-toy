import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const modal = " border-2 bg-slate-200 p-2";

export default function SaveModal({ editNameValue, id }) {
  const dispatch = useDispatch();

  // const list = useSelector((state) => {
  //   return state.list;
  // });

  function handleSaveOnClick() {
    dispatch({
      type: "save",
      payload: {
        name: editNameValue,
        id: id,
      },
    });
  }

  return (
    <div className={modal}>
      <p className="mb-2">변경하시겠습니까?</p>
      <Link to={"/react"} className="mr-2" onClick={handleSaveOnClick}>
        저장
      </Link>
      <Link to={"/react"} className="mr-2">
        취소
      </Link>
    </div>
  );
}

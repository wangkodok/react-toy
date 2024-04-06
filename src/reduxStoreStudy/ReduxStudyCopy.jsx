import { useSelector, useDispatch } from "react-redux";

// 코드 생략하지 않고 작성
export default function ReduxStudy() {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.name;
  });

  const phone = useSelector((state) => {
    return state.phone;
  });

  const array = useSelector((state) => {
    return state.array;
  });

  function nameHandler(event) {
    dispatch({ type: "name", payload: event });
  }

  function phoneHandler(event) {
    dispatch({ type: "phone", payload: event });
  }

  function formHandler(event) {
    event.preventDefault();
    dispatch({
      type: "form",
      payload: { name: name, phone: phone, id: Date.now() },
    });
  }

  console.log(array);

  return (
    <section>
      <h1># input + Redux 공부 및 연습</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="name">
          이름
          <input type="text" id="name" onChange={nameHandler} />
        </label>
        <br />

        <label htmlFor="phone">
          휴대폰
          <input type="number" id="phone" onChange={phoneHandler} />
        </label>
        <br />

        <button>버튼</button>
      </form>

      {array.map((data) => {
        return (
          <div key={data.id}>
            <p>
              이름：{data.name} 휴대폰：{data.phone}
            </p>
          </div>
        );
      })}
    </section>
  );
}

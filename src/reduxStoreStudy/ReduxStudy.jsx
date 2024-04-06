import { useSelector, useDispatch } from "react-redux";

// 코드 생략하고 작성
export default function ReduxStudy() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const phone = useSelector((state) => state.phone);
  const array = useSelector((state) => state.array);

  const nameHandler = (event) => dispatch({ type: "name", payload: event });
  const phoneHandler = (event) => dispatch({ type: "phone", payload: event });
  const formHandler = (event) =>
    dispatch({
      type: "form",
      payload: { name: name, phone: phone, id: Date.now() },
      event: event,
    });

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

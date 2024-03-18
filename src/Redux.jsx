import { useSelector, useDispatch } from "react-redux";

export default function Redux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <section>
      <h1># 리덕스</h1>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={increaseHandler}>+5</button>
      <p>{counter}</p>
    </section>
  );
}

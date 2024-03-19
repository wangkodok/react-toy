import { useSelector, useDispatch } from "react-redux";

export default function Redux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });
  const show = useSelector((state) => {
    return state.showCounter;
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

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  // console.log(show);

  return (
    <section>
      <h1># 리덕스</h1>
      <button onClick={toggleCounterHandler}>show</button>
      {show && <p>show popup</p>}
      <button onClick={decrementHandler}>-1</button>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={increaseHandler}>+5</button>
      {show && <p>{counter}</p>}
    </section>
  );
}

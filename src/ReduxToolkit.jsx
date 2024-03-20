import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "./reduxToolkitStore/index";

export default function Redux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter.counter;
  });
  const show = useSelector((state) => {
    console.log(state);
    return state.counter.showCounter;
  });

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(100));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // console.log(show);

  return (
    <section>
      <h1># 리덕스 툴킷</h1>
      <button onClick={toggleCounterHandler}>show</button>
      {show && <p>show popup</p>}
      <button onClick={decrementHandler}>-1</button>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={increaseHandler}>+100</button>
      {show && <p>{counter}</p>}
    </section>
  );
}

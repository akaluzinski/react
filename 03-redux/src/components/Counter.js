import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: INCREASE, value: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

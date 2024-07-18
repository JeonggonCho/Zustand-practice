import {useCounterStore} from "../store/useCounterStore";

const Counter = () => {
  const {count, increase, decrease, reset, setNumber} = useCounterStore();

  const clear = () => {
    useCounterStore.persist.clearStorage();
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={clear}>clear Storage</button>
    </div>
  );
};

export default Counter;
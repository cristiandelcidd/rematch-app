const Counter = ({
  count: { value },
  increment,
  incrementAsync,
  decrement,
}) => {
  return (
    <div>
      The count is {value}
      <button onClick={increment}>increment</button>
      <button onClick={incrementAsync}>incrementAsync</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;

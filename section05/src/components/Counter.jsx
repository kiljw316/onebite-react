import { useState } from "react";

const Counter = () => {
  const [count, setSount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setSount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

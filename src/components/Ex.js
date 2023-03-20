import React from "react";
import { useEffect } from "react";

const Ex = () => {
  const [count, setCount] = useEffect([0]);
  //   useEffect(() => {
  //     setCount(count++);
  //   });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count++)}>Increment</button>
    </div>
  );
};

export default Ex;

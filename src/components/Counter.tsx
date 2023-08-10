"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
    </>
  );
}

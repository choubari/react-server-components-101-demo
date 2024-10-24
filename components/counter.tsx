"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    console.log("client count ", count + 1);
    setCount(count + 1);
  };
  return (
    <button className="bg-blue-700 rounded p-1 px-2" onClick={incrementCount}>
      Count:
      {count}
    </button>
  );
}

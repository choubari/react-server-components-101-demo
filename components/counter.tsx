"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    console.log("count ", count + 1);
    setCount(count + 1);
  };
  return (
    <div className="p-2 flex items-baseline gap-3">
      <p className="mb-5">Count: {count}</p>
      <button onClick={incrementCount} className="bg-blue-700 rounded p-1 px-2">
        Increase Count
      </button>
    </div>
  );
}

"use client";

import React, { useState } from "react";
// import Label from "./label";

interface Props {
  label?: React.ReactNode;
}

export default function Counter({ label }: Props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    console.log("client count ", count + 1);
    setCount(count + 1);
  };
  return (
    <button className="bg-blue-700 rounded p-1 px-2" onClick={incrementCount}>
      {/* Will convert Label to Client boundary */}
      {/* <Label /> */}

      {/* Passing label as props will keep the component running on the server only */}
      {label}
      {count}
    </button>
  );
}

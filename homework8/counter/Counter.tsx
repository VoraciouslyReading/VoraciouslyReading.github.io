"use client";
import { useState } from "react";

export default function Counter({ step, color }) {
  const [count, setCount] = useState(0);

  function bump() {
    const newValue = count + step;
    if (newValue > 10) setCount(0);
    else setCount(newValue);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <p>Count: {count}</p>
      <button 
        onClick={bump}
        style={{ backgroundColor: color, padding: "6px 12px" }}>
        +{step}
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer); // 🛑 Stop at 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // ✅ Cleanup on unmount
  }, []); // Only run once on mount

  return (
    <div className="counter-wrap">
      <h1>{count}</h1>
    </div>
  );
}

export default Countdown;

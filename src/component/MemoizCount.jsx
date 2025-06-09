import { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // 🔄 Simulate a heavy computation
  const expensiveCalculation = (num) => {
    console.log("⚙️ Running heavy calculation...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += Math.sqrt(num + i);
    }
    return total;
  };

  // ✅ Memoize the result
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>useMemo Demo: Expensive Calculation</h2>
      <p><strong>Result:</strong> {memoizedValue}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number ({number})
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Unrelated Count ({count})
      </button>
    </div>
  );
}

export default ExpensiveComponent;

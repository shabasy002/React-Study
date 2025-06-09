import { useMemo, useState } from "react";

function MemoizMultiply() {
  const num = [3, 6, 9];
  const [res, setRes] = useState(0);
    const [triggerCalc, setTriggerCalc] = useState(false);


   const result = useMemo(() => {
    return num.reduce((acc, curr) => acc * curr, 1);
  }, [num]);

  return (
    <div>
      <h1>Result: {result}</h1>
     <button onClick={() => setTriggerCalc(prev => !prev)}>Multiply</button>

    </div>
  );
}

export default MemoizMultiply;

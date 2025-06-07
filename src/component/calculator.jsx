import { useState } from "react";

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers");
      return;
    }

    if (operation === "+") {
      setResult(num1 + num2);
    } else if (operation === "-") {
      setResult(num1 - num2);
    } else if (operation === "/") {
      if (num2 === 0) {
        setResult("Cannot divide by 0");
      } else {
        setResult(num1 / num2);
      }
    }
  };

  return (
    <>
      <div className="calc">
        <input
          className="input1"
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          className="input2"
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <h2 className="result">Result: {result}</h2>
      </div>
      <div className="buttons">
        <button className="add" onClick={() => calculate("+")}>Add</button>
        <button className="minus" onClick={() => calculate("-")}>Minus</button>
        <button className="divide" onClick={() => calculate("/")}>Divide</button>
      </div>
    </>
  );
}

export default Calculator;

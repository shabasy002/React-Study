import { useState, useEffect } from "react";

function GameTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000); // run every 1 second
    }

    // 🧹 cleanup: stop interval when isRunning becomes false or component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]); // re-run if isRunning changes

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "sans-serif" }}>
      <h2>⏱️ Game Timer</h2>
      <h1>{seconds} seconds</h1>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>
        ▶️ Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        ⏸️ Stop
      </button>
      <button onClick={() => { setSeconds(0); setIsRunning(false); }}>
        🔁 Reset
      </button>
    </div>
  );
}

export default GameTimer;

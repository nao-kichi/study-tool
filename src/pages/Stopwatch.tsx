import React, { useState, useEffect } from "react";
import "../App.css";
import "../css/Stopwatch.css";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime((currentTime - startTime) / 1000);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);

  const handleStart = () => {
    if (isRunning) {
      console.log("ストップウォッチは既に動作しています。");
      return;
    }

    setStartTime(Date.now());
    setIsRunning(true);
    console.log("ストップウォッチを開始しました。");
  };

  const handleStop = () => {
    if (!isRunning) {
      console.log("ストップウォッチは動作していません。");
      return;
    }

    setIsRunning(false);
    console.log("ストップウォッチを停止しました。");
  };

  const handleReset = () => {
    setStartTime(0);
    setIsRunning(false);
    setElapsedTime(0);
    console.log("ストップウォッチをリセットしました。");
  };

  return (
    <div>
      <h1>Stopwatch App</h1>
      <div className="stopwatch">
        <span className="time">{elapsedTime.toFixed(2)}</span>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

import React, { useState, useEffect } from "react";
import "../App.css";
import "../css/Alarm.css";

const Alarm = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      setCurrentTime(time);

      if (isAlarmSet && time === alarmTime) {
        setIsAlarmTriggered(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isAlarmSet, alarmTime]);

  const handleSetAlarm = () => {
    if (!isAlarmSet) {
      setIsAlarmSet(true);
      setIsAlarmTriggered(false);
    }
  };

  const handleAlarmTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlarmTime(e.target.value);
  };

  return (
    <div>
      <h1>Alarm App</h1>
      <div className="alarm-container">
        <div className="current-time">
          <h2>Current Time</h2>
          <p>{currentTime}</p>
        </div>
        <div className="alarm-form">
          <h2>Set Alarm</h2>
          <input
            type="time"
            value={alarmTime}
            onChange={handleAlarmTimeChange}
          />
          <button onClick={handleSetAlarm}>Set Alarm</button>
        </div>
        {isAlarmTriggered && <p className="alarm-triggered">Alarm Triggered!</p>}
      </div>
    </div>
  );
};

export default Alarm;

import React, { useState } from "react";
import "../App.css";
import "../css/Record.css";

interface StudyRecord {
  date: string;
  studyTime: number;
}

const Record = () => {
  const [studyRecords, setStudyRecords] = useState<StudyRecord[]>([]);

  const addStudyRecord = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentRecord = studyRecords.find((record) => record.date === currentDate);

    if (currentRecord) {
      // 既に今日の記録が存在する場合は時間を追加する
      const updatedRecords = studyRecords.map((record) => {
        if (record.date === currentDate) {
          return {
            ...record,
            studyTime: record.studyTime + 1, // 勉強時間を1時間追加する（仮の値）
          };
        }
        return record;
      });

      setStudyRecords(updatedRecords);
    } else {
      // 今日の記録が存在しない場合は新たに追加する
      const newRecord: StudyRecord = {
        date: currentDate,
        studyTime: 1, // 勉強時間を1時間として記録する（仮の値）
      };

      setStudyRecords([...studyRecords, newRecord]);
    }
  };

  return (
    <div>
      <h1>Study Records</h1>
      <div className="record-container">
        {studyRecords.map((record) => (
          <div key={record.date} className="record-item">
            <span className="date">{record.date}</span>
            <span className="study-time">{record.studyTime} hours</span>
          </div>
        ))}
        <button onClick={addStudyRecord}>Add Study Record</button>
      </div>
    </div>
  );
};

export default Record;

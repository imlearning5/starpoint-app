
import React, { useState } from "react";

const students = [
  { name: "Liam_1", class: "M-1A" },
  { name: "Emma_2", class: "M-1A" },
  { name: "Noah_3", class: "M-1A" },
];

const tasks = [
  { label: "숙제 완료", points: 5 },
  { label: "발표", points: 2 },
  { label: "수업 참여도", points: 1 },
  { label: "수업 태도", points: 1 },
  { label: "특별 도전", points: 5 },
  { label: "오늘의 루틴 완수", points: 3 },
];

export default function App() {
  const [scores, setScores] = useState({});

  const addPoint = (studentName, task) => {
    setScores((prev) => ({
      ...prev,
      [studentName]: (prev[studentName] || 0) + task.points,
    }));
  };

  const renderStars = (score) => {
    const stars = [];
    for (let i = 0; i < score; i++) {
      stars.push("⭐");
    }
    return stars.join(" ");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>StarPoint 체크</h1>
      {students.map((student) => (
        <div key={student.name} style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <h2>{student.name} ({student.class})</h2>
            <div>{renderStars(scores[student.name] || 0)}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {tasks.map((task) => (
              <button key={task.label} onClick={() => addPoint(student.name, task)} style={{ padding: "0.5rem", borderRadius: "4px", backgroundColor: "#f0f0f0", border: "1px solid #ccc" }}>
                {task.label} +{task.points}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

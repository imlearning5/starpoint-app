
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

export default function StarPointApp() {
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
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">StarPoint 체크</h1>
      {students.map((student) => (
        <Card key={student.name}>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">
                {student.name} ({student.class})
              </h2>
              <div className="text-lg font-bold">
                {renderStars(scores[student.name] || 0)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tasks.map((task) => (
                <Button
                  key={task.label}
                  onClick={() => addPoint(student.name, task)}
                >
                  {task.label} +{task.points}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

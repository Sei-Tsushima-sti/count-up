import "./styles.css";
import { useState } from "react";

import { ScoreInputField } from "./components/ScoreInputField";
import { TotalScoreDisplay } from "./components/TotalScoreDisplay";
import { TopBar } from "./components/TopBar";

export default function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <TopBar score={score} setScore={setScore} />
      <br />
      <TotalScoreDisplay score={score} />
      <ScoreInputField score={score} setScore={setScore} />
    </>
  );
}

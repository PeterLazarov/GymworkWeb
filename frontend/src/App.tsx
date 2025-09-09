import React from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "../styled-system/css";
import { ExerciseList } from "./components/ExerciseSelect";
import { Workout } from "./components/Workout";
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>

      <Routes>
        <Route path={ROUTES.WORKOUT} element={<Workout />} />
        <Route path={ROUTES.EXERCISES} element={<ExerciseList />} />
      </Routes>
    </>
  );
}

export default App;

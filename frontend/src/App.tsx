import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExerciseList } from "./components/ExerciseSelect";
import { Workout } from "./components/Workout";
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      <div className="text-2xl font-bold">Hello 🐼!</div>

      <Routes>
        <Route path={ROUTES.WORKOUT} element={<Workout />} />
        <Route path={ROUTES.EXERCISES} element={<ExerciseList />} />
      </Routes>
    </>
  );
}

export default App;

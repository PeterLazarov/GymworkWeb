import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExerciseList } from "./components/ExerciseSelect";
import { Workout } from "./components/Workout";
import { WorkoutCalendar } from "./components/WorkoutCalendar";
import { BaseLayout } from "./layouts/BaseLayout";
import { ROUTES } from "./routes";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTES.WORKOUT} element={<Workout />} />
        <Route path={ROUTES.EXERCISES} element={<ExerciseList />} />
        <Route path={ROUTES.CALENDAR} element={<WorkoutCalendar />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;

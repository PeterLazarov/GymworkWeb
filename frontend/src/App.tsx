import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExerciseList } from "./components/ExerciseSelect";
import { Settings } from "./components/Settings";
import { Statistics } from "./components/Statistics";
import { Workout } from "./components/Workout";
import { WorkoutCalendar } from "./components/WorkoutCalendar";
import { WorkoutHistory } from "./components/WorkoutHistory";
import { BaseLayout } from "./layouts/BaseLayout";
import { ROUTES } from "./routes";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTES.WORKOUT} element={<Workout />} />
        <Route path={ROUTES.EXERCISES} element={<ExerciseList />} />
        <Route path={ROUTES.CALENDAR} element={<WorkoutCalendar />} />
        <Route path={ROUTES.HISTORY} element={<WorkoutHistory />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.STATISTICS} element={<Statistics />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;

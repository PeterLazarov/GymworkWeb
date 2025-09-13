import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExerciseList } from "./components/ExerciseSelect";
import { Workout } from "./components/Workout";
import { BaseLayout } from "./layouts/BaseLayout";
import { ROUTES } from "./routes";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTES.WORKOUT} element={<Workout />} />
        <Route path={ROUTES.EXERCISES} element={<ExerciseList />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;

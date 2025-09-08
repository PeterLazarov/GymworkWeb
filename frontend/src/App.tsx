import React from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "../styled-system/css";
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
      </Routes>
    </>
  );
}

export default App;

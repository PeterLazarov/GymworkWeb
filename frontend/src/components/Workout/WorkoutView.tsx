import React from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { WorkoutsByDateQuery } from "../../generated/graphql";

type Props = {
  workout: NonNullable<WorkoutsByDateQuery["workouts"][0]>;
};

export const WorkoutView: React.FC<Props> = ({ workout }) => {
  return (
    <div className={css({ padding: "4" })}>
      {workout.steps.map((step) => (
        <div
          key={step.id}
          className={css({
            marginBottom: "4",
            padding: "4",
            borderRadius: "md",
            backgroundColor: "gray.100",
          })}
        >
          <div className={css({ fontWeight: "bold", marginBottom: "2" })}>
            {step.exercises[0]?.name}
          </div>
          <div className={flex({ direction: "column", gap: "2" })}>
            {step.sets.map((set) => (
              <div
                key={set.id}
                className={flex({
                  gap: "4",
                  alignItems: "center",
                })}
              >
                <span>{set.reps} reps</span>
                <span>{set.weightMcg / 1000000} kg</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { feelingTexts, painTexts } from "../../constants/enums";
import { IWorkoutsHistoryQuery } from "../../generated/graphql";
import { formatDateIso } from "../../utils/date";
import { Card, CardContent, CardHeader, CardTitle } from "../shared";
import { MuscleMap } from "./MuscleMap";

type Workout = NonNullable<
  NonNullable<
    NonNullable<IWorkoutsHistoryQuery["workouts"]["edges"]>[number]
  >["node"]
>;

type WorkoutCardProps = {
  workout: Workout;
  onClick?: () => void;
};
export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  onClick,
}) => {
  return (
    <Card onClick={onClick} variant="secondary" className="w-full">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex gap-2 ml-4">
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            id={`front-map-${workout.date}`}
            className="h-24"
          />
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            id={`back-map-${workout.date}`}
            back
            className="h-24"
          />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{formatDateIso(workout.date, "long")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {workout.feeling && (
                  <span>
                    <b>Feeling:</b> {feelingTexts[workout.feeling]}
                  </span>
                )}
                {workout.rpe && (
                  <span>
                    <b>RPE:</b> {workout.rpe}
                  </span>
                )}
                {workout.pain && (
                  <span>
                    <b>Pain:</b> {painTexts[workout.pain]}
                  </span>
                )}
              </div>
              <span>
                <b>Notes:</b> {workout.notes}
              </span>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

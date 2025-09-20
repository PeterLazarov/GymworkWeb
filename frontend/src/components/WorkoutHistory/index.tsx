import { gql, useQuery } from "@apollo/client";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutsHistoryQuery } from "../../generated/graphql";
import { Card, CardContent, CardHeader, CardTitle } from "../shared";
import { WorkoutDayModal } from "../WorkoutCalendar";
import { MuscleMap } from "./MuscleMap";

const WORKOUTS_QUERY = gql`
  query WorkoutsHistory {
    workouts {
      id
      date
      feeling
      rpe
      notes
      pain
      hasComments
      muscles
      muscleAreas
    }
  }
`;

type Workout = WorkoutsHistoryQuery["workouts"][number];

export const WorkoutHistory: React.FC = () => {
  const { data, refetch, loading, error } = useQuery(WORKOUTS_QUERY);
  const navigate = useNavigate();
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  const workoutDates = useMemo(
    () => data?.workouts.map((workout) => workout.date),
    [data]
  );
  if (loading) return <div>Loading workouts...</div>;
  if (error) return <div>Error loading workouts: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center p-4 items-center">
        <h1 className="text-xl font-bold">History</h1>
      </div>
      <div className="flex flex-col gap-4 justify-center p-4 items-center overflow-y-auto">
        {data?.workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            onClick={() => setOpenedWorkoutDate(workout.date)}
          />
        ))}
      </div>
      {openedWorkoutDate && (
        <WorkoutDayModal
          isOpen={!!openedWorkoutDate}
          onClose={() => setOpenedWorkoutDate(null)}
          date={openedWorkoutDate}
        />
      )}
    </>
  );
};

type WorkoutItemProps = {
  workout: Workout;
  onClick: () => void;
};
const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout, onClick }) => {
  return (
    <Card onClick={onClick} variant="secondary" className="w-full">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex gap-2 ml-4">
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            className="h-24"
          />
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            back
            className="h-24"
          />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{workout.date}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {workout.feeling && (
                  <span>
                    <b>Feeling:</b> {workout.feeling}
                  </span>
                )}
                {workout.rpe && (
                  <span>
                    <b>RPE:</b> {workout.rpe}
                  </span>
                )}
                {workout.pain && (
                  <span>
                    <b>Pain:</b> {workout.pain}
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

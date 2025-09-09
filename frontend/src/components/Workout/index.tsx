import { DateTime } from "luxon";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import {
  useCreateWorkoutMutation,
  useWorkoutsByDateQuery,
} from "../../generated/graphql";
import {
  formatDate,
  formatDateIso,
  formatStringDateToIso,
} from "../../utils/date";
import { Button, Header } from "../shared";
import { WorkoutView } from "./WorkoutView";

type Props = {
  date?: string;
};
const WorkoutHeader: React.FC<Props> = ({ date }) => {
  const navigate = useNavigate();
  const currentDate = date ? DateTime.fromISO(date) : DateTime.now();
  const dateLabel = date
    ? formatDateIso(date, "long")
    : formatDate(currentDate, "long");

  const navigateToDate = (daysToAdd: number) => {
    const newDate = currentDate.plus({ days: daysToAdd });
    navigate(`/${newDate.toISODate()}`);
  };

  return (
    <Header
      className={flex({
        justifyContent: "space-around",
        gap: "4",
      })}
    >
      <Button onClick={() => navigateToDate(-1)}>{"<"}</Button>
      <span>{dateLabel}</span>
      <Button onClick={() => navigateToDate(1)}>{">"}</Button>
    </Header>
  );
};

export const Workout = () => {
  const { date } = useParams();
  const currentDate = date || DateTime.now().toISODate();
  const { data, loading, error, refetch } = useWorkoutsByDateQuery({
    variables: { date: currentDate },
    skip: !currentDate,
  });

  const [createWorkout, { loading: creating, error: createError }] =
    useCreateWorkoutMutation();

  const workout = data?.workouts[0];

  const handleCreateWorkout = async () => {
    try {
      const result = await createWorkout({
        variables: {
          date: formatStringDateToIso(currentDate),
        },
      });

      if (result.data?.createWorkout?.errors?.length) {
        console.error(
          "Failed to create workout:",
          result.data.createWorkout.errors
        );
        return;
      }

      refetch();
    } catch (err) {
      console.error("Failed to create workout:", err);
    }
  };

  return (
    <div className={css({})}>
      <WorkoutHeader date={date} />
      {(loading || creating) && <div>Loading...</div>}
      {(error || createError) && <div>Error loading workout</div>}
      {!loading && !error && !workout && !creating && (
        <div className={css({ textAlign: "center", padding: "4" })}>
          <div className={css({ marginBottom: "4" })}>
            No workout found for this date
          </div>
          <Button onClick={handleCreateWorkout}>Create Workout</Button>
        </div>
      )}
      {workout && <WorkoutView workout={workout} />}
    </div>
  );
};

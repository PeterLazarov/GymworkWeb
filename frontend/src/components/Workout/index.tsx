import { gql, useMutation, useQuery } from "@apollo/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DateTime } from "luxon";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  formatDate,
  formatDateIso,
  formatStringDateToIso,
} from "../../utils/date";
import { Button, Header } from "../shared";
import { WorkoutView } from "./WorkoutView";

const WORKOUTS_BY_DATE_QUERY = gql`
  query WorkoutsByDate($date: ISO8601Date!) {
    workouts(date: $date) {
      id
      date
      feeling
      rpe
      notes
      pain
      hasComments
      steps {
        id
        exercises {
          id
          name
          measurements
        }
        sets {
          id
          reps
          weightMcg
        }
      }
    }
  }
`;

const CREATE_WORKOUT_MUTATION = gql`
  mutation CreateWorkout($date: ISO8601DateTime!) {
    createWorkout(input: { date: $date }) {
      workout {
        id
        date
        feeling
        rpe
        notes
        pain
        hasComments
        steps {
          id
          exercises {
            id
            name
          }
          sets {
            id
            reps
            weightMcg
          }
        }
      }
      errors
    }
  }
`;

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
    <Header className="flex justify-between gap-4">
      <Button variant="secondary" onClick={() => navigateToDate(-1)}>
        <ChevronLeftIcon /> {formatDate(currentDate.minus({ days: 1 }), "long")}
      </Button>
      <span>{dateLabel}</span>
      <Button variant="secondary" onClick={() => navigateToDate(1)}>
        {formatDate(currentDate.plus({ days: 1 }), "long")}
        <ChevronRightIcon />
      </Button>
    </Header>
  );
};

export const Workout = () => {
  const { date } = useParams();
  const currentDate = date || DateTime.now().toISODate();
  const { data, loading, error, refetch } = useQuery(WORKOUTS_BY_DATE_QUERY, {
    variables: { date: currentDate },
    skip: !currentDate,
  });

  const [createWorkout, { loading: creating, error: createError }] =
    useMutation(CREATE_WORKOUT_MUTATION);

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
    <>
      <WorkoutHeader date={date} />
      {(loading || creating) && <div>Loading...</div>}
      {(error || createError) && <div>Error loading workout</div>}
      {!loading && !error && !workout && !creating && (
        <div className="text-center p-4">
          <div className="mb-4">No workout found for this date</div>
          <Button onClick={handleCreateWorkout}>Create Workout</Button>
        </div>
      )}
      {workout && <WorkoutView workout={workout} />}
    </>
  );
};

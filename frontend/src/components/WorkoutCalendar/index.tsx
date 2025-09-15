import { gql, useQuery } from "@apollo/client";
import { ChevronLeft, DotIcon } from "lucide-react";
import { DateTime } from "luxon";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WorkoutByDate } from "../../generated/graphql";
import { Button, Calendar, Modal } from "../shared";
import { WorkoutView } from "../Workout/WorkoutView";

const WORKOUTS_QUERY = gql`
  query Workouts {
    workouts {
      id
      date
    }
  }
`;

export const WorkoutCalendar: React.FC = () => {
  const { data, refetch, loading, error } = useQuery(WORKOUTS_QUERY);
  const navigate = useNavigate();
  const { date } = useParams();
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  const workoutDates = useMemo(
    () => data?.workouts.map((workout) => workout.date),
    [data]
  );
  if (loading) return <div>Loading workouts...</div>;
  if (error) return <div>Error loading workouts: {error.message}</div>;

  const checkIfWorkoutExists = (date: Date) => {
    return workoutDates?.includes(DateTime.fromJSDate(date).toISODate());
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleDayClick = (date: Date) => {
    const day = DateTime.fromJSDate(date);

    if (checkIfWorkoutExists(date)) {
      setOpenedWorkoutDate(date);
    } else {
      navigate(`/${day.toISODate()}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <Button variant="default" size="icon" onClick={handleBack}>
          <ChevronLeft />
          <span className="sr-only">Go back</span>
        </Button>
        <h1 className="text-xl font-bold">Calendar</h1>
      </div>
      <Calendar
        mode="single"
        selected={DateTime.fromISO(date)}
        components={{
          DayButton: ({ day, modifiers }) => (
            <Button
              variant={
                modifiers.selected
                  ? "default"
                  : modifiers.today
                    ? "secondary"
                    : "ghost"
              }
              size="icon"
              onClick={() => handleDayClick(day.date)}
            >
              {day.date.getDate()}
              {checkIfWorkoutExists(day.date) && (
                <DotIcon className="absolute bottom-0" />
              )}
            </Button>
          ),
        }}
      />
      {openedWorkoutDate && (
        <WorkoutDayModal
          isOpen={!!openedWorkoutDate}
          onClose={() => setOpenedWorkoutDate(null)}
          date={openedWorkoutDate}
        />
      )}
    </div>
  );
};

type WorkoutDayModalProps = {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
};
const WorkoutDayModal: React.FC<WorkoutDayModalProps> = ({
  isOpen,
  onClose,
  date,
}) => {
  const navigate = useNavigate();
  const day = DateTime.fromJSDate(date);

  const { data, loading, error, refetch } = useQuery(WorkoutByDate, {
    variables: { date: day.toISODate() },
  });

  const workout = data?.workouts[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={day.toFormat("dd-MM-yyyy")}
      description="Do you want to navigate to this day?"
      cancelText="Close"
      confirmText="Navigate"
      onSubmit={() => navigate(`/${day.toISODate()}`)}
    >
      {workout && <WorkoutView workout={workout} readonly />}
    </Modal>
  );
};

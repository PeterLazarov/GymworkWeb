import { gql, TypedDocumentNode, useQuery } from "@apollo/client";
import { ChevronLeft, DotIcon } from "lucide-react";
import { DateTime } from "luxon";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  IWorkoutsQuery,
  IWorkoutsQueryVariables,
  WorkoutByDate,
} from "../../generated/graphql";
import { formatDate } from "../../utils/date";
import { Button, Calendar, Modal } from "../shared";
import { WorkoutView } from "../Workout/WorkoutView";

const WORKOUTS_QUERY: TypedDocumentNode<
  IWorkoutsQuery,
  IWorkoutsQueryVariables
> = gql`
  query Workouts($first: Int, $after: String) {
    workouts(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          date
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const WorkoutCalendar: React.FC = () => {
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const { date } = useParams();
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  const { data, loading, error, fetchMore } = useQuery(WORKOUTS_QUERY, {
    variables: {
      first: 50,
    },
  });

  const loadMore = () => {
    if (!hasMore || loading || !data?.workouts.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        first: 50,
        after: data.workouts.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        setHasMore(fetchMoreResult.workouts.pageInfo.hasNextPage);

        return {
          ...prev,
          workouts: {
            ...fetchMoreResult.workouts,
            edges: [
              ...(prev.workouts?.edges || []),
              ...(fetchMoreResult.workouts?.edges || []),
            ],
          },
        };
      },
    });
  };

  const workoutDates = useMemo(
    () => data?.workouts.edges.map(({ node }) => node.date),
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
export const WorkoutDayModal: React.FC<WorkoutDayModalProps> = ({
  isOpen,
  onClose,
  date,
}) => {
  const navigate = useNavigate();
  const day = DateTime.fromJSDate(date);

  const { data } = useQuery(WorkoutByDate, {
    variables: { date: day.toISODate() },
  });

  const workout = data?.workout;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={formatDate(day, "long")}
      description="Do you want to navigate to this day?"
      cancelText="Close"
      confirmText="Navigate"
      onSubmit={() => navigate(`/${day.toISODate()}`)}
    >
      {workout && <WorkoutView workout={workout} readonly />}
    </Modal>
  );
};

import { gql, useMutation, useQuery } from "@apollo/client";
import { CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { IWorkoutsQuery, Workouts } from "../../generated/graphql";
import { formatStringDateToIso } from "../../utils/date";
import { useInfiniteScroll } from "../../utils/useInfiniteScroll";
import { Button, Modal, Spinner } from "../shared";
import { WorkoutCard } from "../WorkoutHistory/WorkoutCard";

const COPY_WORKOUT_MUTATION = gql`
  mutation CopyWorkout($sourceWorkoutId: ID!, $targetDate: ISO8601DateTime!) {
    copyWorkout(
      input: { sourceWorkoutId: $sourceWorkoutId, targetDate: $targetDate }
    ) {
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

type Workout = IWorkoutsQuery["workouts"]["edges"][number]["node"];

type CopyWorkoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  targetDate: string;
  onWorkoutCopied?: () => void;
};

export const CopyWorkoutModal: React.FC<CopyWorkoutModalProps> = ({
  isOpen,
  onClose,
  targetDate,
  onWorkoutCopied,
}) => {
  const [copying, setCopying] = useState<string | null>(null);

  const { data, fetchMore, loading, error } = useQuery(Workouts, {
    variables: {
      filter: { isTemplate: false },
      first: 10,
      after: "",
    },
    skip: !isOpen,
  });

  const [copyWorkout] = useMutation(COPY_WORKOUT_MUTATION);

  const { containerRef, loading: infiniteScrollLoading } = useInfiniteScroll({
    data: data?.workouts as any,
    loading,
    fetchMore: (options) =>
      fetchMore({
        variables: {
          ...options.variables,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
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
      }),
    connectionKey: "workouts",
    pageSize: 20,
    threshold: 200,
  });

  const handleCopyWorkout = async (sourceWorkout: Workout) => {
    if (copying) return;

    setCopying(sourceWorkout.id);

    try {
      const result = await copyWorkout({
        variables: {
          sourceWorkoutId: sourceWorkout.id,
          targetDate: formatStringDateToIso(targetDate),
        },
      });

      if (result.data?.copyWorkout?.errors?.length) {
        console.error(
          "Failed to copy workout:",
          result.data.copyWorkout.errors
        );
        alert(
          `Failed to copy workout: ${result.data.copyWorkout.errors.join(", ")}`
        );
        return;
      }

      onWorkoutCopied?.();
      onClose();
    } catch (err) {
      console.error("Failed to copy workout:", err);
      alert("Failed to copy workout. Please try again.");
    } finally {
      setCopying(null);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Copy Existing Workout"
      description="Select a workout to copy to the current date"
      hideFooter
    >
      <div className="flex flex-col gap-4">
        {loading && !infiniteScrollLoading && (
          <div className="flex justify-center p-4">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-4">
            Error loading workouts: {error.message}
          </div>
        )}

        {data?.workouts.edges.length === 0 && !loading && (
          <div className="text-center p-4 text-muted-foreground">
            No workouts found to copy
          </div>
        )}

        <div className="flex flex-col gap-3 overflow-y-auto" ref={containerRef}>
          {data?.workouts.edges
            .filter((edge) => edge.node.date !== targetDate)
            .map(({ node: workout }) => {
              return (
                <div key={workout.id} className="relative">
                  <WorkoutCard
                    workout={workout}
                    scientificMuscleNamesEnabled={
                      data?.settings.scientificMuscleNamesEnabled
                    }
                    onClick={() => handleCopyWorkout(workout)}
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyWorkout(workout);
                      }}
                      disabled={copying === workout.id}
                    >
                      {copying === workout.id ? <Spinner /> : <CopyIcon />}
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>

        {infiniteScrollLoading && (
          <div className="flex justify-center p-2">
            <Spinner />
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">
          {data?.workouts.totalCount || 0} workouts available
        </div>
      </div>
    </Modal>
  );
};

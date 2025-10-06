import { gql, TypedDocumentNode, useQuery } from "@apollo/client";
import { ArrowDownIcon, ArrowUpIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import {
  IMuscleAreaStatsQuery,
  IMuscleAreaStatsQueryVariables,
  IWorkoutsByMuscleAreaQuery,
  IWorkoutsByMuscleAreaQueryVariables,
} from "../../generated/graphql";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Spinner,
} from "../shared";
import { WorkoutCard } from "../WorkoutHistory/WorkoutCard";

const WORKOUTS_BY_MUSCLE_AREA_QUERY: TypedDocumentNode<
  IWorkoutsByMuscleAreaQuery,
  IWorkoutsByMuscleAreaQueryVariables
> = gql`
  query WorkoutsByMuscleArea($filter: WorkoutFilter) {
    settings {
      scientificMuscleNamesEnabled
    }
    workouts(filter: $filter) {
      edges {
        node {
          id
          date
          name
          feeling
          rpe
          notes
          pain
          hasComments
          muscles
          muscleAreas
        }
      }
    }
  }
`;

const MUSCLE_AREA_STATS_QUERY: TypedDocumentNode<
  IMuscleAreaStatsQuery,
  IMuscleAreaStatsQueryVariables
> = gql`
  query MuscleAreaStats($ascending: Boolean) {
    muscleAreaStats(ascending: $ascending) {
      muscleArea
      percentage
      workoutCount
      totalWorkouts
    }
  }
`;

type MuscleAreaStat = IMuscleAreaStatsQuery["muscleAreaStats"][number];

export const Statistics: React.FC = () => {
  const [isDescending, setIsDescending] = useState(true);
  const [selectedMuscleArea, setSelectedMuscleArea] = useState<string | null>();

  const { data, loading, error } = useQuery(MUSCLE_AREA_STATS_QUERY, {
    variables: { ascending: !isDescending },
  });

  const { data: workoutsData, loading: workoutsLoading } = useQuery(
    WORKOUTS_BY_MUSCLE_AREA_QUERY,
    {
      variables: {
        filter: { muscleAreas: [selectedMuscleArea!], isTemplate: false },
      },
      skip: !selectedMuscleArea,
    }
  );

  if (loading) return <div>Loading statistics...</div>;
  if (!data) return <div>No workouts data</div>;
  if (error) return <div>Error loading statistics: {error.message}</div>;

  const stats = data?.muscleAreaStats || [];

  const toggleSort = () => {
    setIsDescending(!isDescending);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col p-4 items-center space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Muscle Training Statistics</h1>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={toggleSort}
          >
            {isDescending ? (
              <ArrowDownIcon size={16} />
            ) : (
              <ArrowUpIcon size={16} />
            )}
          </Button>
        </div>
      </div>

      {stats.length === 0 ? (
        <div className="text-center text-gray-500">
          No workout data available yet. Start training to see your statistics!
        </div>
      ) : (
        <div className="gap-4 overflow-y-auto grid grid-cols-3 ">
          {stats.map((stat) => (
            <MuscleAreaStat
              key={stat.muscleArea}
              stat={stat}
              onViewWorkouts={setSelectedMuscleArea}
            />
          ))}
        </div>
      )}

      <Dialog
        open={!!selectedMuscleArea}
        onOpenChange={(open) => !open && setSelectedMuscleArea(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Workouts Training {selectedMuscleArea}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {workoutsLoading ? (
              <Spinner />
            ) : (
              workoutsData?.workouts.edges.map(({ node: workout }) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                  scientificMuscleNamesEnabled={
                    workoutsData?.settings.scientificMuscleNamesEnabled
                  }
                />
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const MuscleAreaStat = ({
  stat,
  onViewWorkouts,
}: {
  stat: MuscleAreaStat;
  onViewWorkouts: (muscleArea: string) => void;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-medium">{stat.muscleArea}</span>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onViewWorkouts(stat.muscleArea)}
          >
            <EyeIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${stat.percentage}%` }}
        />
      </div>
      <span className="text-sm text-gray-500"></span>
      <div className="w-full text-sm font-medium">
        <span>
          {stat.workoutCount} / {stat.totalWorkouts} workouts
        </span>
        <span className="float-right">{stat.percentage}%</span>
      </div>
    </div>
  );
};

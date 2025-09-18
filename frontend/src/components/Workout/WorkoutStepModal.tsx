import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ExerciseSets, WorkoutByDateQuery } from "../../generated/graphql";
import { cn } from "../../lib/utils";
import { formatDateIso } from "../../utils/date";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  IncrementalEditor,
  Modal,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../shared";
import { ExerciseStatsChart } from "./ExerciseStatsChart";

type Workout = WorkoutByDateQuery["workouts"][number];
type WorkoutStep = Workout["steps"][number];
type Set = WorkoutStep["sets"][number];

const ADD_SET_MUTATION = gql`
  mutation AddSet(
    $workoutStepId: ID!
    $exerciseId: ID!
    $date: ISO8601DateTime!
    $reps: Int
    $weightMcg: Int
  ) {
    addSet(
      input: {
        workoutStepId: $workoutStepId
        exerciseId: $exerciseId
        date: $date
        reps: $reps
        weightMcg: $weightMcg
      }
    ) {
      set {
        id
        reps
        weightMcg
      }
      errors
    }
  }
`;

const UPDATE_SET_MUTATION = gql`
  mutation UpdateSet($input: UpdateSetInput!) {
    updateSet(input: $input) {
      set {
        id
        reps
        weightMcg
      }
      errors
    }
  }
`;

const DELETE_SET_MUTATION = gql`
  mutation DeleteSet($input: DeleteSetInput!) {
    deleteSet(input: $input) {
      success
      errors
    }
  }
`;

type WorkoutStepModalProps = {
  isOpen: boolean;
  onClose: () => void;
  step: WorkoutStep;
  workout: Workout;
};

export const WorkoutStepModal: React.FC<WorkoutStepModalProps> = ({
  isOpen,
  onClose,
  step,
  workout,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step.exercises[0]?.name}
      description={`Add a set for ${step.exercises[0]?.name}`}
      hideFooter
    >
      <Tabs defaultValue="track" className="flex flex-col flex-1 gap-2">
        <div className="flex items-center justify-center">
          <TabsList>
            <TabsTrigger value="track">Track</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="chart">Chart</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 overflow-y-auto">
          <TabsContent value="track">
            <TrackStepTab step={step} workout={workout} />
          </TabsContent>
          <TabsContent value="records">
            <RecordsStepTab step={step} />
          </TabsContent>
          <TabsContent value="history" className="flex-1 overflow-hidden">
            <HistoryStepTab step={step} />
          </TabsContent>
          <TabsContent value="chart">
            <ExerciseStatsChart exerciseId={step.exercises[0]!.id} />
          </TabsContent>
        </div>
      </Tabs>
    </Modal>
  );
};

const TrackStepTab: React.FC<{ step: WorkoutStep; workout: Workout }> = ({
  step,
  workout,
}) => {
  const [focusedSet, setFocusedSet] = useState<Set | undefined>();

  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const [addSet] = useMutation(ADD_SET_MUTATION);
  const [updateSet] = useMutation(UPDATE_SET_MUTATION);
  const [deleteSet] = useMutation(DELETE_SET_MUTATION);

  const handleUpdateSet = async () => {
    if (!focusedSet) return;

    const weightMcg = weight * 1000000; // Convert kg to mcg
    const result = await updateSet({
      variables: {
        input: {
          setId: focusedSet.id,
          reps,
          weightMcg,
        },
      },
    });

    if (result.data?.updateSet?.errors.length) {
      console.error("Failed to update set:", result.data.updateSet.errors);
      return;
    }

    if (!result.data?.updateSet?.set) {
      console.error("Failed to update set: No set data returned");
      return;
    }

    setFocusedSet(undefined);
  };

  const handleDeleteSet = async () => {
    if (!focusedSet) return;

    const result = await deleteSet({
      variables: {
        input: {
          setId: focusedSet.id,
        },
      },
    });

    if (result.data?.deleteSet?.errors.length) {
      console.error("Failed to delete set:", result.data.deleteSet.errors);
      return;
    }

    if (!result.data?.deleteSet?.success) {
      console.error("Failed to delete set");
      return;
    }

    setFocusedSet(undefined);
  };

  const handleAddSet = async () => {
    const weightMcg = weight * 1000000; // Convert kg to mcg
    const result = await addSet({
      variables: {
        workoutStepId: step.id,
        exerciseId: step.exercises[0]?.id || "",
        date: workout.date,
        reps,
        weightMcg,
      },
    });

    if (result.data?.addSet?.errors.length) {
      console.error("Failed to add set:", result.data.addSet.errors);
      return;
    }

    if (!result.data?.addSet?.set) {
      console.error("Failed to add set: No set data returned");
      return;
    }

    setReps(0);
    setWeight(0);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {step.sets.map((set, index) => (
          <div
            key={set.id}
            className={cn(
              "flex gap-2 px-2 py-0.5 rounded-md",
              focusedSet?.id === set.id && "bg-gray-200"
            )}
            onClick={() => {
              setFocusedSet(focusedSet?.id === set.id ? undefined : set);
              setReps(set.reps ?? 0);
              setWeight((set.weightMcg ?? 0) / 1000000);
            }}
          >
            <span>{index + 1}.</span>
            {set.reps !== undefined && <h2>{set.reps} reps</h2>}
            {set.weightMcg && <h2>{set.weightMcg / 1000000} kg</h2>}
          </div>
        ))}
      </div>

      <IncrementalEditor
        value={reps}
        onChange={(value) => setReps(value ?? 0)}
        unit="reps"
      />
      <IncrementalEditor
        value={weight}
        onChange={(value) => setWeight(value ?? 0)}
        step={5}
        unit="kg"
      />
      {focusedSet && (
        <div className="w-full flex gap-2">
          <Button className="flex-1" onClick={handleUpdateSet}>
            Update Set
          </Button>
          <Button
            variant="destructive"
            className="flex-1"
            onClick={handleDeleteSet}
          >
            Remove Set
          </Button>
        </div>
      )}
      {!focusedSet && <Button onClick={handleAddSet}>Add Set</Button>}
    </div>
  );
};

const EXERCISE_RECORDS_QUERY = gql`
  query ExerciseRecords($exerciseId: ID!) {
    exerciseRecords(exerciseId: $exerciseId) {
      id
      reps
      weightMcg
      date
    }
  }
`;

const RecordsStepTab: React.FC<{ step: WorkoutStep }> = ({ step }) => {
  const { data, loading, error } = useQuery(EXERCISE_RECORDS_QUERY, {
    variables: { exerciseId: step.exercises[0]!.id },
  });

  if (loading) return <div>Loading records...</div>;
  if (error) return <div>Error loading records</div>;
  if (!data?.exerciseRecords) return <div>No records found</div>;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Personal Records</h3>
      <div className="space-y-2">
        {data.exerciseRecords.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{record.reps} reps</span>
              <span className="font-medium">
                {record.weightMcg / 1000000} kg
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {new Date(record.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistoryStepTab: React.FC<{ step: WorkoutStep }> = ({ step }) => {
  const { data, loading, error } = useQuery(ExerciseSets, {
    variables: { exerciseId: step.exercises[0]!.id },
  });

  if (loading) return <div>Loading sets...</div>;
  if (error) return <div>Error loading sets</div>;
  if (!data?.exercises) return <div>No sets found</div>;

  const exercise = data.exercises[0];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">History</h3>
      <div className="space-y-2">
        {exercise.steps.map((step) => (
          <Card key={step.id} variant="secondary">
            <CardHeader>
              <CardTitle>{formatDateIso(step.sets[0].date, "long")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              {step.sets?.map((set) => (
                <div key={set.id} className="flex gap-4 items-center">
                  {set.reps && <span>{set.reps} reps</span>}
                  {set.weightMcg && <span>{set.weightMcg / 1000000} kg</span>}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

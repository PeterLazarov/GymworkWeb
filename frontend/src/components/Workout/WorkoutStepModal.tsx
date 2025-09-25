import { gql, useMutation, useQuery } from "@apollo/client";
import { EllipsisIcon } from "lucide-react";
import React, { useState } from "react";
import {
  ExerciseSets,
  IWorkoutByDateQuery,
  WorkoutSetFragment,
} from "../../generated/graphql";
import { formatDateIso } from "../../utils/date";
import { msToTimeString, timeStringToMs } from "../../utils/time";
import { EditExerciseModal } from "../ExerciseSelect/EditExerciseModal";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  IncrementalEditor,
  Modal,
  NumericInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TimeInput,
} from "../shared";
import { ExerciseStatsChart } from "./ExerciseStatsChart";
import { SetListItem } from "./SetListItem";

type Workout = NonNullable<IWorkoutByDateQuery["workout"]>;
type WorkoutStep = Workout["steps"][number];
type Set = WorkoutStep["sets"][number];

const ADD_SET_MUTATION = gql`
  mutation AddSet($input: AddSetInput!) {
    addSet(input: $input) {
      set {
        ...WorkoutSetFragment
      }
      errors
    }
  }
  ${WorkoutSetFragment}
`;

const EXERCISE_RECORDS_QUERY = gql`
  query ExerciseRecords($exerciseId: ID!) {
    exerciseRecords(exerciseId: $exerciseId) {
      id
      reps
      weightMcg
      weight
      date
    }
  }
`;

const UPDATE_SET_MUTATION = gql`
  mutation UpdateSet($input: UpdateSetInput!) {
    updateSet(input: $input) {
      set {
        ...WorkoutSetFragment
      }
      errors
    }
  }
  ${WorkoutSetFragment}
`;

const DELETE_SET_MUTATION = gql`
  mutation DeleteSet($input: DeleteSetInput!) {
    deleteSet(input: $input) {
      success
      errors
    }
  }
`;

const DELETE_STEP_MUTATION = gql`
  mutation DeleteStep($stepId: ID!) {
    deleteStep(input: { stepId: $stepId }) {
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
  const [isEditExerciseOpen, setIsEditExerciseOpen] = useState(false);
  const [deleteStep] = useMutation(DELETE_STEP_MUTATION);

  const handleDeleteStep = async () => {
    if (!window.confirm("Are you sure you want to delete this step?")) return;

    const result = await deleteStep({
      variables: {
        stepId: step.id,
      },
    });

    if (result.data?.deleteStep?.errors?.length) {
      console.error("Failed to delete step:", result.data.deleteStep.errors);
      return;
    }

    if (!result.data?.deleteStep?.success) {
      console.error("Failed to delete step");
      return;
    }

    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={step.exercises[0]?.name}
        description={`Add a set for ${step.exercises[0]?.name}`}
        hideFooter
        Actions={
          <StepActions
            onEditExercise={() => setIsEditExerciseOpen(true)}
            onDeleteStep={handleDeleteStep}
          />
        }
      >
        <div className="flex flex-col gap-4">
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
        </div>
      </Modal>

      <EditExerciseModal
        isOpen={isEditExerciseOpen}
        onClose={() => setIsEditExerciseOpen(false)}
        onSuccess={() => setIsEditExerciseOpen(false)}
        exerciseId={step.exercises[0]?.id || ""}
      />
    </>
  );
};

type StepActionsProps = {
  onEditExercise: () => void;
  onDeleteStep: () => void;
};
const StepActions: React.FC<StepActionsProps> = ({
  onEditExercise,
  onDeleteStep,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <EllipsisIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={onEditExercise}
          >
            Edit Exercise
          </Button>
          <Button
            variant="destructive"
            className="w-full justify-start"
            onClick={onDeleteStep}
          >
            Remove Step
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const TrackStepTab: React.FC<{ step: WorkoutStep; workout: Workout }> = ({
  step,
  workout,
}) => {
  const [focusedSet, setFocusedSet] = useState<Set | undefined>();

  const exercise = step.exercises[0]!;
  const [reps, setReps] = useState(exercise.measurements.reps ? 0 : undefined);
  const [weight, setWeight] = useState(
    exercise.measurements.weight ? 0 : undefined
  );
  const [duration, setDuration] = useState(
    exercise.measurements.duration ? 0 : undefined
  );
  const [distance, setDistance] = useState(
    exercise.measurements.distance ? 0 : undefined
  );

  const [addSet] = useMutation(ADD_SET_MUTATION);
  const [updateSet] = useMutation(UPDATE_SET_MUTATION);
  const [deleteSet] = useMutation(DELETE_SET_MUTATION);

  const handleUpdateSet = async () => {
    if (!focusedSet) return;

    const result = await updateSet({
      variables: {
        input: {
          setId: focusedSet.id,
          reps,
          weightMcg: weight ? weight * 1000000000 : undefined,
          durationMs: duration,
          distanceMm: distance,
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
    const result = await addSet({
      variables: {
        input: {
          workoutStepId: step.id,
          exerciseId: exercise.id,
          date: workout.date,
          reps,
          weightMcg: weight ? weight * 1000000000 : undefined,
          durationMs: duration,
          distanceMm: distance,
        },
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

    setReps(exercise.measurements.reps ? 0 : undefined);
    setWeight(exercise.measurements.weight ? 0 : undefined);
    setDuration(exercise.measurements.duration ? 0 : undefined);
    setDistance(exercise.measurements.distance ? 0 : undefined);
  };

  const onSetClick = (set: Set) => {
    setFocusedSet(focusedSet?.id === set.id ? undefined : set);
    setReps(exercise.measurements.reps ? set.reps ?? 0 : undefined);
    setWeight(
      exercise.measurements.weight
        ? (set.weightMcg ?? 0) / 1000000000
        : undefined
    );
    setDuration(
      exercise.measurements.duration ? set.durationMs ?? 0 : undefined
    );
    setDistance(
      exercise.measurements.distance ? set.distanceMm ?? 0 : undefined
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {step.sets.map((set, index) => (
          <SetListItem
            key={set.id}
            set={set}
            measurements={exercise.measurements}
            isFocused={focusedSet?.id === set.id}
            onSetClick={onSetClick}
            number={index + 1}
          />
        ))}
      </div>

      {exercise.measurements.reps && (
        <IncrementalEditor
          value={reps!}
          onChange={(value) => setReps(value ?? 0)}
          unit={exercise.measurements.reps.unit ?? undefined}
        />
      )}
      {exercise.measurements.weight && (
        <IncrementalEditor
          value={weight!}
          onChange={(value) => setWeight(value ?? 0)}
          step={exercise.measurements.weight.step}
          unit={exercise.measurements.weight.unit ?? undefined}
        />
      )}
      {exercise.measurements.duration && (
        <TimeInput
          id="time-picker"
          value={msToTimeString(duration!)}
          onChange={(e) => setDuration(timeStringToMs(e.target.value))}
        />
      )}
      {exercise.measurements.distance && (
        <NumericInput
          value={distance!}
          onChange={(value) => setDistance(value ?? 0)}
        />
      )}
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

const RecordsStepTab: React.FC<{ step: WorkoutStep }> = ({ step }) => {
  const exercise = step.exercises[0]!;
  const { data, loading, error } = useQuery(EXERCISE_RECORDS_QUERY, {
    variables: { exerciseId: exercise.id },
  });

  if (loading) return <div>Loading records...</div>;
  if (error) return <div>Error loading records</div>;
  if (!data?.exerciseRecords) return <div>No records found</div>;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Personal Records</h3>
      <div className="space-y-2">
        {data.exerciseRecords.map((record) => (
          <SetListItem
            key={record.id}
            set={record}
            measurements={exercise.measurements}
            showDate
          />
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
  if (!data?.exercise) return <div>No sets found</div>;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">History</h3>
      <div className="space-y-2">
        {data.exercise.steps.map((step) => (
          <Card key={step.id} variant="secondary">
            <CardHeader>
              <CardTitle>{formatDateIso(step.sets[0].date, "long")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              {step.sets?.map((set, index) => (
                <SetListItem
                  key={set.id}
                  set={set}
                  measurements={data.exercise.measurements}
                  number={index + 1}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

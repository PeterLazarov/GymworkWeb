import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutsByDateQuery } from "../../generated/graphql";
import { cn } from "../../lib/utils";
import {
  Button,
  IncrementalEditor,
  Label,
  Modal,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "../shared";

const UPDATE_WORKOUT_MUTATION = gql`
  mutation UpdateWorkout($input: UpdateWorkoutInput!) {
    updateWorkout(input: $input) {
      workout {
        id
        feeling
        rpe
        notes
        pain
      }
      errors
    }
  }
`;

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

type Workout = NonNullable<WorkoutsByDateQuery["workouts"][number]>;
type WorkoutStep = Workout["steps"][number];
type Set = WorkoutStep["sets"][number];

type Props = {
  workout: NonNullable<WorkoutsByDateQuery["workouts"][0]>;
};

export const WorkoutView: React.FC<Props> = ({ workout }) => {
  const navigate = useNavigate();
  const [focusedStep, setFocusedStep] = useState<WorkoutStep | undefined>();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT_MUTATION);

  return (
    <div className="p-4">
      {workout.hasComments && (
        <div
          className="mb-4 p-4 rounded-md bg-gray-100"
          onClick={() => setIsDetailsModalOpen(true)}
        >
          <div className="font-bold mb-2">Comments</div>
          <div className="flex flex-col gap-2">
            {workout.notes && (
              <div className="text-sm text-gray-500">{workout.notes}</div>
            )}
            {workout.feeling && (
              <div className="text-sm text-gray-500">{workout.feeling}</div>
            )}
            {workout.rpe && (
              <div className="text-sm text-gray-500">RPE: {workout.rpe}</div>
            )}
            {workout.pain && (
              <div className="text-sm text-gray-500">Pain: {workout.pain}</div>
            )}
          </div>
        </div>
      )}
      {workout.steps.map((step) => (
        <div
          key={step.id}
          onClick={() => setFocusedStep(step)}
          className="mb-4 p-4 rounded-md bg-gray-100"
        >
          <div className="font-bold mb-2">{step.exercises[0]?.name}</div>
          <div className="flex flex-col gap-2">
            {step.sets.map((set) => (
              <div key={set.id} className="flex gap-4 items-center">
                {set.reps && <span>{set.reps} reps</span>}
                {set.weightMcg && <span>{set.weightMcg / 1000000} kg</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <Button onClick={() => navigate(`/${workout.date}/exercises`)}>
          Add Exercise
        </Button>
        <Button onClick={() => setIsDetailsModalOpen(true)}>Add Comment</Button>
      </div>
      {focusedStep && (
        <WorkoutStepModal
          isOpen={!!focusedStep}
          onClose={() => setFocusedStep(undefined)}
          step={focusedStep}
          workout={workout}
        />
      )}
      <WorkoutDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        workout={workout}
        onSave={async (details) => {
          const result = await updateWorkout({
            variables: {
              input: {
                workoutId: workout.id,
                ...details,
              },
            },
          });

          if (result.data?.updateWorkout?.errors?.length) {
            console.error(
              "Failed to update workout:",
              result.data.updateWorkout.errors
            );
            return;
          }

          setIsDetailsModalOpen(false);
        }}
      />
    </div>
  );
};

type WorkoutStepModalProps = {
  isOpen: boolean;
  onClose: () => void;
  step: WorkoutStep;
  workout: Workout;
};

type WorkoutDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  workout: Workout;
  onSave: (details: {
    feeling?: string;
    rpe?: number;
    notes?: string;
    pain?: string;
  }) => void;
};

const WorkoutDetailsModal: React.FC<WorkoutDetailsModalProps> = ({
  isOpen,
  onClose,
  workout,
  onSave,
}) => {
  const [feeling, setFeeling] = useState(workout.feeling || "");
  const [rpe, setRpe] = useState(workout.rpe?.toString() || "");
  const [notes, setNotes] = useState(workout.notes || "");
  const [pain, setPain] = useState(workout.pain || "");

  const handleSave = () => {
    onSave({
      feeling: feeling || undefined,
      rpe: rpe ? parseInt(rpe, 10) : undefined,
      notes: notes || undefined,
      pain: pain || undefined,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Workout Details"
      description="Enter notes about your workout"
      hideFooter
    >
      <div className="space-y-4">
        <div>
          <Label>Feeling</Label>
          <Select value={feeling} onValueChange={setFeeling}>
            <SelectTrigger>
              <SelectValue placeholder="How are you feeling?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="great">Great</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="okay">Okay</SelectItem>
              <SelectItem value="tired">Tired</SelectItem>
              <SelectItem value="exhausted">Exhausted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>RPE (Rate of Perceived Exertion)</Label>
          <Select value={rpe} onValueChange={setRpe}>
            <SelectTrigger>
              <SelectValue placeholder="Select RPE (1-10)" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Pain Level</Label>
          <Select value={pain} onValueChange={setPain}>
            <SelectTrigger>
              <SelectValue placeholder="Any pain?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="mild">Mild</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="severe">Severe</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Notes</Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes about your workout..."
            className="h-32"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Modal>
  );
};

const WorkoutStepModal: React.FC<WorkoutStepModalProps> = ({
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
      <Tabs defaultValue="track">
        <TabsList>
          <TabsTrigger value="track">Track</TabsTrigger>
          <TabsTrigger value="records">Records</TabsTrigger>
        </TabsList>
        <TabsContent value="track">
          <TrackStepTab step={step} workout={workout} />
        </TabsContent>
        <TabsContent value="records">
          <RecordsStepTab step={step} />
        </TabsContent>
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
      <div>
        {step.sets.map((set, index) => (
          <div
            key={set.id}
            className={cn(
              "flex gap-2",
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

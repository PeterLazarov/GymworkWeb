import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutsByDateQuery } from "../../generated/graphql";
import { cn } from "../../lib/utils";
import { Button, IncrementalEditor, Modal } from "../shared";

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

  return (
    <div className="p-4">
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
      <Button onClick={() => navigate(`/${workout.date}/exercises`)}>+</Button>
      {focusedStep && (
        <WorkoutStepModal
          isOpen={!!focusedStep}
          onClose={() => setFocusedStep(undefined)}
          step={focusedStep}
          workout={workout}
        />
      )}
    </div>
  );
};

type WorkoutStepModalProps = {
  isOpen: boolean;
  onClose: () => void;
  step: WorkoutStep;
  workout: Workout;
};

const WorkoutStepModal: React.FC<WorkoutStepModalProps> = ({
  isOpen,
  onClose,
  step,
  workout,
}) => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const [focusedSet, setFocusedSet] = useState<Set | undefined>();

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step.exercises[0]?.name}
      description={`Add a set for ${step.exercises[0]?.name}`}
      hideFooter
    >
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
                setWeight(set.weightMcg / 1000000 ?? 0);
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
    </Modal>
  );
};

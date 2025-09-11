import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import {
  WorkoutsByDateQuery,
  useAddSetMutation,
} from "../../generated/graphql";
import { Button, IncrementalEditor, Modal } from "../shared";

type Workout = NonNullable<WorkoutsByDateQuery["workouts"][0]>;
type WorkoutStep = Workout["steps"][0];

type Props = {
  workout: NonNullable<WorkoutsByDateQuery["workouts"][0]>;
};

export const WorkoutView: React.FC<Props> = ({ workout }) => {
  const navigate = useNavigate();
  const [focusedStep, setFocusedStep] = useState<WorkoutStep | undefined>();
  console.log(workout.steps);

  return (
    <div className={css({ padding: "4" })}>
      {workout.steps.map((step) => (
        <div
          key={step.id}
          onClick={() => setFocusedStep(step)}
          className={css({
            marginBottom: "4",
            padding: "4",
            borderRadius: "md",
            backgroundColor: "gray.100",
          })}
        >
          <div className={css({ fontWeight: "bold", marginBottom: "2" })}>
            {step.exercises[0]?.name}
          </div>
          <div className={flex({ direction: "column", gap: "2" })}>
            {step.sets.map((set) => (
              <div
                key={set.id}
                className={flex({
                  gap: "4",
                  alignItems: "center",
                })}
              >
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

  const onSubmit = async () => {
    console.log("onSubmit");
  };

  const [addSet] = useAddSetMutation();
  console.log(step);
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

    // Reset form
    setReps(0);
    setWeight(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step.exercises[0]?.name}
      description={`Add a set for ${step.exercises[0]?.name}`}
      onSubmit={onSubmit}
    >
      <div>
        {step.sets.map((set, index) => (
          <div key={set.id} className={flex({ gap: "2" })}>
            <span>{index + 1}.</span>
            {set.reps !== undefined && <h2>{set.reps} reps</h2>}
            {set.weightMcg && <h2>{set.weightMcg / 1000000} kg</h2>}
          </div>
        ))}
      </div>

      <IncrementalEditor value={reps} onChange={setReps} unit="reps" />
      <IncrementalEditor
        value={weight}
        onChange={setWeight}
        step={5}
        unit="kg"
      />
      <Button onClick={handleAddSet}>Add Set</Button>
    </Modal>
  );
};

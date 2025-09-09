import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import {
  Exercise,
  useAddStepMutation,
  useExercisesQuery,
} from "../../generated/graphql";
import { Button } from "../shared";
import { AddExerciseModal } from "./AddExerciseModal";

export const ExerciseList: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { data, refetch, loading, error } = useExercisesQuery();
  const navigate = useNavigate();

  if (loading) return <div>Loading exercises...</div>;
  if (error) return <div>Error loading exercises: {error.message}</div>;

  return (
    <div>
      <div
        className={flex({
          justifyContent: "space-between",
          padding: "4",
          alignItems: "center",
        })}
      >
        <h1 className={css({ fontSize: "xl", fontWeight: "bold" })}>
          Exercises
        </h1>
        <Button onClick={() => setShowCreateForm(true)}>Create Exercise</Button>
      </div>

      <div className={css({ padding: "4" })}>
        {data?.exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))}
      </div>

      <AddExerciseModal
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSuccess={() => {
          setShowCreateForm(false);
          // Refetch the exercises list
          refetch();
        }}
      />
    </div>
  );
};

const ExerciseItem: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const navigate = useNavigate();
  const { date } = useParams();
  const [addStep] = useAddStepMutation();

  const handleClick = async () => {
    if (!date) {
      console.error("No workout date provided");
      return;
    }

    try {
      const result = await addStep({
        variables: {
          workoutDate: date,
          exerciseIds: [exercise.id],
        },
      });

      if (result.data?.addStep?.errors?.length) {
        console.error(
          "Failed to create workout step:",
          result.data.addStep.errors
        );
        return;
      }

      navigate(`/${date}`);
    } catch (error) {
      console.error("Failed to add step:", error);
    }
  };

  return (
    <div
      key={exercise.id}
      onClick={handleClick}
      className={css({
        padding: "4",
        marginBottom: "2",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "gray.200",
        _hover: {
          backgroundColor: "gray.50",
          cursor: "pointer",
        },
      })}
    >
      <div
        className={flex({
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div>
          <h3 className={css({ fontSize: "lg", fontWeight: "semibold" })}>
            {exercise.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

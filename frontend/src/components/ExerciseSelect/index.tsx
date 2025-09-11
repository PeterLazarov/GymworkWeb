import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-xl font-bold">Exercises</h1>
        <Button onClick={() => setShowCreateForm(true)}>Create Exercise</Button>
      </div>

      <div className="p-4">
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
      className="p-4 mb-2 rounded-md border border-gray-200 hover:bg-gray-50 hover:cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{exercise.name}</h3>
        </div>
      </div>
    </div>
  );
};

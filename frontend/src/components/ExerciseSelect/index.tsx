import { gql, useMutation, useQuery } from "@apollo/client";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Exercise } from "../../generated/graphql";
import { Button } from "../shared";
import { AddExerciseModal } from "./AddExerciseModal";

const EXERCISES_QUERY = gql`
  query Exercises {
    exercises {
      id
      name
    }
  }
`;

const ADD_STEP_MUTATION = gql`
  mutation AddStep($workoutDate: String!, $exerciseIds: [ID!]!) {
    addStep(input: { workoutDate: $workoutDate, exerciseIds: $exerciseIds }) {
      step {
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
      errors
    }
  }
`;

export const ExerciseList: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { data, refetch, loading, error } = useQuery(EXERCISES_QUERY);
  const navigate = useNavigate();

  if (loading) return <div>Loading exercises...</div>;
  if (error) return <div>Error loading exercises: {error.message}</div>;

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <Button variant="default" size="icon" onClick={handleBack}>
          <ChevronLeft />
          <span className="sr-only">Go back</span>
        </Button>
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
  const [addStep] = useMutation(ADD_STEP_MUTATION);

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

import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Modal } from "../shared";
import { ExerciseForm, ExerciseFormData } from "./ExerciseForm";

const EXERCISE_QUERY = gql`
  query Exercise($id: ID!) {
    exercise(id: $id) {
      id
      name
      muscleAreas
      muscles
      instructions
      measurements
      images
    }
  }
`;

const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExercise(
    $exerciseId: ID!
    $name: String!
    $muscleAreas: [String!]
    $muscles: [String!]
    $instructions: [String!]
    $measurements: JSON
  ) {
    updateExercise(
      input: {
        exerciseId: $exerciseId
        name: $name
        muscleAreas: $muscleAreas
        muscles: $muscles
        instructions: $instructions
        measurements: $measurements
      }
    ) {
      exercise {
        id
        name
        muscleAreas
        muscles
        instructions
        measurements
      }
      errors
    }
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  exerciseId: string;
};

export const EditExerciseModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
  exerciseId,
}) => {
  const [formData, setFormData] = useState<ExerciseFormData | undefined>(
    undefined
  );
  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(EXERCISE_QUERY, {
    variables: { id: exerciseId },
    skip: !isOpen || !exerciseId,
  });
  useEffect(() => {
    if (data?.exercise) {
      setFormData(data.exercise);
    }
  }, [data]);

  const [updateExercise, { loading, error: mutationError }] = useMutation(
    UPDATE_EXERCISE_MUTATION
  );

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const result = await updateExercise({
        variables: {
          exerciseId,
          ...formData,
        },
      });

      if (result.data?.updateExercise?.errors?.length) {
        console.error(
          "Failed to update exercise:",
          result.data.updateExercise.errors
        );
        return;
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Failed to update exercise:", err);
    }
  };

  const isLoaded = !queryLoading && !queryError && data?.exercise;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Exercise"
      description="Edit exercise details"
      onSubmit={handleSubmit}
      confirmDisabled={loading}
    >
      {queryLoading && <div>Loading exercise...</div>}
      {queryError && <div>Error loading exercise: {queryError.message}</div>}
      {!data?.exercise && <div>Exercise not found</div>}
      {isLoaded && formData && (
        <ExerciseForm
          exercise={formData}
          onChange={setFormData}
          error={mutationError}
        />
      )}
    </Modal>
  );
};

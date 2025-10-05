import { gql, TypedDocumentNode, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  IExerciseQuery,
  IExerciseQueryVariables,
  MeasurementsFragment,
} from "../../generated/graphql";
import { excludeField } from "../../utils/object";
import { Modal } from "../shared";
import { ExerciseForm, ExerciseFormData } from "./ExerciseForm";

const EXERCISE_QUERY: TypedDocumentNode<
  IExerciseQuery,
  IExerciseQueryVariables
> = gql`
  query Exercise($id: ID!) {
    settings {
      scientificMuscleNamesEnabled
    }
    exercise(id: $id) {
      id
      name
      muscleAreas
      muscles
      instructions
      measurements {
        ...MeasurementsFragment
      }
      images
    }
  }
  ${MeasurementsFragment}
`;

const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExercise($input: UpdateExerciseInput!) {
    updateExercise(input: $input) {
      exercise {
        id
        name
        muscleAreas
        muscles
        instructions
        measurements {
          ...MeasurementsFragment
        }
      }
      errors
    }
  }
  ${MeasurementsFragment}
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
  const [formData, setFormData] = useState<ExerciseFormData | undefined>();
  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(EXERCISE_QUERY, {
    variables: { id: exerciseId },
    skip: !isOpen || !exerciseId,
    onCompleted: (data) => {
      if (data.exercise) {
        setFormData({
          name: data.exercise.name,
          muscleAreas: data.exercise.muscleAreas,
          muscles: data.exercise.muscles,
          instructions: data.exercise.instructions,
          measurements: excludeField(
            "__typename",
            data.exercise.measurements,
            true
          ) as any,
        });
      }
    },
  });

  const [updateExercise, { loading, error: mutationError }] = useMutation(
    UPDATE_EXERCISE_MUTATION
  );

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const result = await updateExercise({
        variables: {
          input: {
            exerciseId,
            ...formData,
          },
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
          scientificMuscleNamesEnabled={
            data?.settings.scientificMuscleNamesEnabled
          }
        />
      )}
    </Modal>
  );
};

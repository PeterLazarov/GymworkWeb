import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { measurementDefaults } from "../../constants/measurements";
import { Modal } from "../shared";
import { ExerciseForm, ExerciseFormData } from "./ExerciseForm";

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExercise(
    $name: String!
    $muscleAreas: [String!]!
    $muscles: [String!]!
    $instructions: [String!]
    $measurements: JSON!
  ) {
    createExercise(
      input: {
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
};

export const AddExerciseModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<ExerciseFormData>({
    name: "",
    muscleAreas: [],
    muscles: [],
    instructions: [],
    measurements: {
      reps: measurementDefaults.reps,
      weight: measurementDefaults.weight,
    },
  });

  const [createExercise, { loading, error }] = useMutation(
    CREATE_EXERCISE_MUTATION
  );

  const onSubmit = async () => {
    try {
      const result = await createExercise({
        variables: {
          ...formData,
        },
      });

      if (result.data?.createExercise?.errors?.length) {
        console.error(
          "Failed to create exercise:",
          result.data.createExercise.errors
        );
        return;
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Failed to create exercise:", err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Exercise"
      description="Create a new exercise to track your progress"
      onSubmit={onSubmit}
      confirmDisabled={loading}
    >
      <ExerciseForm exercise={formData} onChange={setFormData} error={error} />
    </Modal>
  );
};

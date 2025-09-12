import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Modal } from "../shared";

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExercise(
    $name: String!
    $muscleAreas: [String!]!
    $muscles: [String!]!
    $instructions: [String!]!
  ) {
    createExercise(
      input: {
        name: $name
        muscleAreas: $muscleAreas
        muscles: $muscles
        instructions: $instructions
      }
    ) {
      exercise {
        id
        name
      }
      errors
    }
  }
`;

type FormData = {
  name: string;
  muscleAreas: string[];
  muscles: string[];
  instructions: string[];
};

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    muscleAreas: [],
    muscles: [],
    instructions: [""],
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
        // Handle errors
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

  const handleArrayInput = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Exercise"
      onSubmit={onSubmit}
      confirmDisabled={loading}
    >
      {error && <div className="text-red-500 mb-4">{error.message}</div>}

      <div className="mb-4">
        <label className="block mb-2">
          Name *
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Muscle Areas (comma-separated) *
          <input
            type="text"
            value={formData.muscleAreas.join(", ")}
            onChange={(e) => handleArrayInput("muscleAreas", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Muscles (comma-separated) *
          <input
            type="text"
            value={formData.muscles.join(", ")}
            onChange={(e) => handleArrayInput("muscles", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Instructions (comma-separated) *
          <textarea
            value={formData.instructions.join(", ")}
            onChange={(e) => handleArrayInput("instructions", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1 min-h-[100px]"
            required
          />
        </label>
      </div>
    </Modal>
  );
};

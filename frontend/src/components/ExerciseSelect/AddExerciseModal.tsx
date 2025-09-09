import React, { useState } from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { useCreateExerciseMutation } from "../../generated/graphql";
import { Modal } from "../shared";

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

  const [createExercise, { loading, error }] = useCreateExerciseMutation();

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
      {error && (
        <div className={css({ color: "red.500", marginBottom: "4" })}>
          {error.message}
        </div>
      )}

      <div className={css({ marginBottom: "4" })}>
        <label className={css({ display: "block", marginBottom: "2" })}>
          Name *
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className={css({
              width: "100%",
              padding: "2",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "md",
              marginTop: "1",
            })}
            required
          />
        </label>
      </div>

      <div className={css({ marginBottom: "4" })}>
        <label className={css({ display: "block", marginBottom: "2" })}>
          Muscle Areas (comma-separated) *
          <input
            type="text"
            value={formData.muscleAreas.join(", ")}
            onChange={(e) => handleArrayInput("muscleAreas", e.target.value)}
            className={css({
              width: "100%",
              padding: "2",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "md",
              marginTop: "1",
            })}
            required
          />
        </label>
      </div>

      <div className={css({ marginBottom: "4" })}>
        <label className={css({ display: "block", marginBottom: "2" })}>
          Muscles (comma-separated) *
          <input
            type="text"
            value={formData.muscles.join(", ")}
            onChange={(e) => handleArrayInput("muscles", e.target.value)}
            className={css({
              width: "100%",
              padding: "2",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "md",
              marginTop: "1",
            })}
            required
          />
        </label>
      </div>

      <div className={css({ marginBottom: "4" })}>
        <label className={css({ display: "block", marginBottom: "2" })}>
          Instructions (comma-separated) *
          <textarea
            value={formData.instructions.join(", ")}
            onChange={(e) => handleArrayInput("instructions", e.target.value)}
            className={css({
              width: "100%",
              padding: "2",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "md",
              marginTop: "1",
              minHeight: "100px",
            })}
            required
          />
        </label>
      </div>

      <div className={css({ marginBottom: "4" })}>
        <label className={flex({ alignItems: "center", gap: "2" })}>
          <input
            type="checkbox"
            checked={formData.isFavorite}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, isFavorite: e.target.checked }))
            }
          />
          Favorite
        </label>
      </div>
    </Modal>
  );
};

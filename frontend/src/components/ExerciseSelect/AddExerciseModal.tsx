import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import {
  measurementDefaults,
  measurementUnits,
} from "../../constants/measurements";
import { CreateExerciseInput } from "../../generated/graphql";
import {
  Checkbox,
  Modal,
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
  NumericInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shared";
import { ExerciseMeasurementType } from "./ExerciseMeasurementType";

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExercise(
    $name: String!
    $muscleAreas: [String!]!
    $muscles: [String!]!
    $instructions: [String!]!
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
  measurements: ("reps" | "weight" | "duration" | "distance" | "speed")[];
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
  const [formData, setFormData] = useState<CreateExerciseInput>({
    name: "",
    muscleAreas: [],
    muscles: [],
    instructions: [""],
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
      console.log(formData);
      // const result = await createExercise({
      //   variables: {
      //     ...formData,
      //   },
      // });

      // if (result.data?.createExercise?.errors?.length) {
      //   // Handle errors
      //   console.error(
      //     "Failed to create exercise:",
      //     result.data.createExercise.errors
      //   );
      //   return;
      // }

      // onSuccess();
      // onClose();
    } catch (err) {
      console.error("Failed to create exercise:", err);
    }
  };
  const handleMeasurementsInput = (measurements: string[]) => {
    setFormData((prev) => ({
      ...prev,
      measurements: measurements.reduce((acc, measurement) => {
        acc[measurement] = measurementDefaults[measurement];
        return acc;
      }, {}),
    }));
  };

  const onMeasurementChange = (
    measurementKey: keyof ExerciseMeasurementType,
    measurement: ExerciseMeasurementType[keyof ExerciseMeasurementType]
  ) => {
    setFormData((prev) => ({
      ...prev,
      measurements: { ...prev.measurements, [measurementKey]: measurement },
    }));
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
      description="Create a new exercise to track your progress"
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
          Measurements
          <MultiSelect
            values={Object.keys(formData.measurements)}
            onValuesChange={handleMeasurementsInput}
          >
            <MultiSelectTrigger className="w-full">
              <MultiSelectValue placeholder="Select measurements" />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectItem value="reps">Repetitions</MultiSelectItem>
              <MultiSelectItem value="weight">Weight</MultiSelectItem>
              <MultiSelectItem value="duration">Duration</MultiSelectItem>
              <MultiSelectItem value="distance">Distance</MultiSelectItem>
              <MultiSelectItem value="speed">Speed</MultiSelectItem>
            </MultiSelectContent>
          </MultiSelect>
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Muscle Areas (comma-separated) *
          <input
            type="text"
            value={formData.muscleAreas?.join(", ")}
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
            value={formData.muscles?.join(", ")}
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
            value={formData.instructions?.join(", ")}
            onChange={(e) => handleArrayInput("instructions", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1 min-h-[100px]"
            required
          />
        </label>
      </div>
      {Object.keys(formData.measurements).map((measurement) => (
        <MeasurementSection
          key={measurement}
          measurementKey={measurement as keyof ExerciseMeasurementType}
          measurement={formData.measurements[measurement]}
          onChange={onMeasurementChange}
        />
      ))}
    </Modal>
  );
};

type MeasurementSectionProps<Key extends keyof ExerciseMeasurementType> = {
  measurementKey: Key;
  measurement: ExerciseMeasurementType[Key];
  onChange: (key: Key, measurement: ExerciseMeasurementType[Key]) => void;
};

const MeasurementSection = <Key extends keyof ExerciseMeasurementType>({
  measurementKey,
  measurement,
  onChange,
}: MeasurementSectionProps<Key>) => {
  const canChangeUnit =
    measurementKey === "distance" || measurementKey === "weight";

  const handleChange = (field: string, value: any) => {
    onChange(measurementKey, { ...measurement, [field]: value });
  };

  return (
    <>
      <div>
        <span>{measurementKey}</span>
      </div>
      {canChangeUnit && (
        <div className="mb-4">
          <label className="block mb-2">
            Unit
            <Select
              value={measurement.unit}
              onValueChange={(value) => handleChange("unit", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(measurementUnits[measurementKey]).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2">
          More is better
          <Checkbox
            checked={measurement.moreIsBetter}
            onCheckedChange={(checked) => handleChange("moreIsBetter", checked)}
          />
        </label>
      </div>
      {measurementKey === "weight" && (
        <div className="mb-4">
          <label className="block mb-2">
            Weight Increment
            <NumericInput
              value={(measurement as ExerciseMeasurementType["weight"]).step}
              onChange={(value) => handleChange("step", value)}
            />
          </label>
        </div>
      )}
    </>
  );
};

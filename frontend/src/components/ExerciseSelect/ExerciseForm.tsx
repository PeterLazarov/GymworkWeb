import React from "react";
import {
  measurementDefaults,
  measurementUnits,
} from "../../constants/measurements";
import {
  Checkbox,
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

export type ExerciseFormData = {
  name: string;
  muscleAreas: string[];
  muscles: string[];
  instructions: string[];
  measurements: Record<string, any>;
};

type Props = {
  exercise: ExerciseFormData;
  onChange: (data: ExerciseFormData) => void;
  error?: Error;
};

export const ExerciseForm: React.FC<Props> = ({
  exercise,
  onChange,
  error,
}) => {
  const handleMeasurementsInput = (measurements: string[]) => {
    onChange({
      ...exercise,
      measurements: measurements.reduce((acc, measurement) => {
        acc[measurement] = measurementDefaults[measurement];
        return acc;
      }, {}),
    });
  };

  const onMeasurementChange = (
    measurementKey: keyof ExerciseMeasurementType,
    measurement: ExerciseMeasurementType[keyof ExerciseMeasurementType]
  ) => {
    onChange({
      ...exercise,
      measurements: { ...exercise.measurements, [measurementKey]: measurement },
    });
  };

  const handleArrayInput = (field: keyof ExerciseFormData, value: string) => {
    onChange({
      ...exercise,
      [field]: value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {error && <div className="text-red-500 mb-4">{error.message}</div>}

      <div className="mb-4">
        <label className="block mb-2">
          Name *
          <input
            type="text"
            value={exercise.name}
            onChange={(e) => onChange({ ...exercise, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Measurements
          <MultiSelect
            values={Object.keys(exercise.measurements)}
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
          Muscle Areas
          <input
            type="text"
            value={exercise.muscleAreas?.join(", ")}
            onChange={(e) => handleArrayInput("muscleAreas", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Muscles
          <input
            type="text"
            value={exercise.muscles?.join(", ")}
            onChange={(e) => handleArrayInput("muscles", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Instructions
          <textarea
            value={exercise.instructions.join(",")}
            onChange={(e) =>
              onChange({ ...exercise, instructions: e.target.value.split(",") })
            }
            className="w-full p-2 border border-gray-300 rounded-md mt-1 min-h-[100px]"
          />
        </label>
      </div>

      {Object.keys(exercise.measurements).map((measurement) => (
        <MeasurementSection
          key={measurement}
          measurementKey={measurement as keyof ExerciseMeasurementType}
          measurement={exercise.measurements[measurement]}
          onChange={onMeasurementChange}
        />
      ))}
    </div>
  );
};

const measurementHeadlines = {
  reps: "Rep Measurement Settings",
  weight: "Weight Measurement Settings",
  duration: "Duration Measurement Settings",
  distance: "Distance Measurement Settings",
  speed: "Speed Measurement Settings",
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
      <span className="block mb-2 text-lg font-medium text-muted-foreground">
        {measurementHeadlines[measurementKey]}
      </span>
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
      <div className="mb-4 flex items-center gap-2">
        <Checkbox
          id={measurementKey}
          checked={measurement.moreIsBetter}
          onCheckedChange={(checked) => handleChange("moreIsBetter", checked)}
        />
        <label htmlFor={measurementKey}>More is better</label>
      </div>
      {measurementKey === "weight" && (
        <div className="mb-4">
          <label className="block mb-2">
            Weight Increment
            <NumericInput
              value={(measurement as ExerciseMeasurementType["weight"]).step}
              onChange={(value) => handleChange("step", value)}
              className="w-full"
            />
          </label>
        </div>
      )}
    </>
  );
};

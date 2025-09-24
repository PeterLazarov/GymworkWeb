import { BicepsFlexedIcon } from "lucide-react";
import React, { useState } from "react";
import {
  measurementDefaults,
  measurementUnits,
} from "../../constants/measurements";
import { muscleAreas, muscles } from "../../constants/muscles";
import {
  Button,
  Checkbox,
  Input,
  Label,
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
  NumericInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "../shared";
import { MuscleMap } from "../WorkoutHistory/MuscleMap";
import { ExerciseMeasurementType } from "./ExerciseMeasurementType";

export type ExerciseFormData = {
  name: string;
  muscleAreas: string[];
  muscles: string[];
  instructions: string[];
  measurements: Record<string, any>;
  activeMeasurements: string[];
};

type Props = {
  exercise: ExerciseFormData;
  onChange: (data: ExerciseFormData) => void;
  scientificMuscleNamesEnabled?: boolean;
  error?: Error;
};

export const ExerciseForm: React.FC<Props> = ({
  exercise,
  onChange,
  scientificMuscleNamesEnabled,
  error,
}) => {
  const [showMuscleMap, setShowMuscleMap] = useState(false);
  const handleMeasurementsInput = (measurements: string[]) => {
    const updatedMeasurements = measurements.reduce((acc, measurement) => {
      acc[measurement] = measurementDefaults[measurement];
      return acc;
    }, {});
    onChange({
      ...exercise,
      measurements: updatedMeasurements,
      activeMeasurements: Object.keys(updatedMeasurements),
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

  return (
    <div className="max-w-2xl mx-auto p-4">
      {error && <div className="text-red-500 mb-4">{error.message}</div>}

      <div className="mb-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={exercise.name}
          onChange={(e) => onChange({ ...exercise, name: e.target.value })}
          required
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="measurements">Measurements</Label>
        <MultiSelect
          values={exercise.activeMeasurements}
          onValuesChange={handleMeasurementsInput}
        >
          <MultiSelectTrigger id="measurements" className="w-full">
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
      </div>

      {!scientificMuscleNamesEnabled && (
        <div className="mb-4">
          <div className="flex justify-between">
            <Label htmlFor="muscleAreas">Muscle Areas</Label>
            <Button
              variant={showMuscleMap ? "default" : "ghost"}
              size="sm"
              className="ml-auto h-auto p-1 text-xs"
              onClick={(e) => {
                e.preventDefault();
                setShowMuscleMap(!showMuscleMap);
              }}
            >
              <BicepsFlexedIcon />
            </Button>
          </div>

          <MultiSelect
            values={exercise.muscleAreas}
            onValuesChange={(values) =>
              onChange({ ...exercise, muscleAreas: values })
            }
          >
            <MultiSelectTrigger id="muscleAreas" className="w-full">
              <MultiSelectValue placeholder="Select muscle areas..." />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {muscleAreas.map((muscleArea) => (
                  <MultiSelectItem key={muscleArea} value={muscleArea}>
                    {muscleArea}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>
      )}

      {scientificMuscleNamesEnabled && (
        <div className="mb-4">
          <div className="flex justify-between">
            <Label htmlFor="muscles">Muscles</Label>
            <Button
              variant={showMuscleMap ? "default" : "ghost"}
              size="sm"
              className="ml-auto h-auto p-1 text-xs"
              onClick={(e) => {
                e.preventDefault();
                setShowMuscleMap(!showMuscleMap);
              }}
            >
              <BicepsFlexedIcon />
            </Button>
          </div>

          <MultiSelect
            values={exercise.muscles}
            onValuesChange={(values) =>
              onChange({ ...exercise, muscles: values })
            }
          >
            <MultiSelectTrigger id="muscles" className="w-full">
              <MultiSelectValue placeholder="Select muscles..." />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {muscles.map((muscle) => (
                  <MultiSelectItem key={muscle} value={muscle}>
                    {muscle}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>
      )}

      {showMuscleMap && (
        <div className="mb-4 flex gap-4 justify-center">
          <MuscleMap
            id="muscle-map"
            muscles={exercise.muscles}
            muscleAreas={exercise.muscleAreas}
            className="h-24"
          />
          <MuscleMap
            id="muscle-map"
            muscles={exercise.muscles}
            muscleAreas={exercise.muscleAreas}
            className="h-24"
            back
          />
        </div>
      )}

      <div className="mb-4">
        <Label htmlFor="instructions">Instructions</Label>
        <Textarea
          id="instructions"
          value={exercise.instructions.join(",")}
          onChange={(e) =>
            onChange({ ...exercise, instructions: e.target.value.split(",") })
          }
          className="w-full"
        />
      </div>

      {Object.keys(measurementUnits)
        .filter((measurement) => !!exercise.measurements[measurement])
        .map((measurement) => {
          return (
            <MeasurementSection
              key={measurement}
              measurementKey={measurement as keyof ExerciseMeasurementType}
              measurement={exercise.measurements[measurement]}
              onChange={onMeasurementChange}
            />
          );
        })}
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

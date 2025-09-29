import { ExerciseMeasurementType } from "../components/ExerciseSelect/ExerciseMeasurementType";

export const getActiveMeasurements = (
  measurements: ExerciseMeasurementType
) => {
  return Object.entries(measurements)
    .filter(([_, value]) => value)
    .map(([key]) => key);
};

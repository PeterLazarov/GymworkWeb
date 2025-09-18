import { measurementUnits } from "../../constants/measurements";

export type ExerciseMeasurementType = {
  reps: {
    unit: "reps";
    moreIsBetter: boolean;
  };
  weight: {
    unit: (typeof measurementUnits.weight)[keyof typeof measurementUnits.weight];
    moreIsBetter: boolean;
    step: number;
  };
  duration: {
    unit: (typeof measurementUnits.duration)[keyof typeof measurementUnits.duration];
    moreIsBetter: boolean;
  };
  distance: {
    unit: (typeof measurementUnits.distance)[keyof typeof measurementUnits.distance];
    moreIsBetter: boolean;
  };
  speed: {
    unit: (typeof measurementUnits.speed)[keyof typeof measurementUnits.speed];
    moreIsBetter: boolean;
  };
};

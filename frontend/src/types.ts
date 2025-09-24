interface BaseMeasurementConfig {
  unit?: string;
  moreIsBetter: boolean;
}

interface WeightMeasurementConfig extends BaseMeasurementConfig {
  step?: number;
}

export interface Measurements {
  weight?: WeightMeasurementConfig;
  reps?: BaseMeasurementConfig;
  duration?: BaseMeasurementConfig;
  distance?: BaseMeasurementConfig;
  speed?: BaseMeasurementConfig;
}

export type JSONValue =
  | Measurements
  | { [key: string]: JSONValue }
  | JSONValue[]
  | string
  | number
  | boolean
  | null;

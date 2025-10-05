import React from "react";
import { IWorkoutByDateQuery } from "../../generated/graphql";
import { cn } from "../../lib/utils";
import { msToTimeString } from "../../utils/time";

type WorkoutStep = IWorkoutByDateQuery["workout"]["steps"][number];
type Set = WorkoutStep["sets"][number];
type Measurements = WorkoutStep["exercises"][number]["measurements"];

type SetListItemProps = {
  set: Set;
  isFocused?: boolean;
  onSetClick?: (set: Set) => void;
  number?: number;
  measurements: Measurements;
  showDate?: boolean;
};
export const SetListItem: React.FC<SetListItemProps> = ({
  set,
  isFocused,
  onSetClick,
  number,
  measurements,
  showDate,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-0.5 rounded-md",
        isFocused && "bg-gray-200 dark:bg-gray-800"
      )}
      onClick={() => onSetClick?.(set)}
    >
      {number && <span>{number}.</span>}
      {measurements.reps && <h2>{set.reps} reps</h2>}
      {measurements.weight && (
        <h2>
          {set.weight} {measurements.weight.unit}
        </h2>
      )}
      {set.durationMs !== undefined && set.durationMs !== null && (
        <h2>{msToTimeString(set.durationMs)}</h2>
      )}
      {measurements.distance && (
        <h2>
          {set.distance} {measurements.distance.unit}
        </h2>
      )}

      {showDate && (
        <div className="text-sm text-gray-500">
          {new Date(set.date).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

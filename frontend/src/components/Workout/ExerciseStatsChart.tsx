import { useQuery } from "@apollo/client";
import { groupBy, maxBy } from "lodash";
import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ExerciseSets, IExerciseSetsQuery } from "../../generated/graphql";
import { getActiveMeasurements } from "../../utils/measurements";
import { ExerciseMeasurementType } from "../ExerciseSelect/ExerciseMeasurementType";
import { ChartContainer, ToggleGroup, ToggleGroupItem } from "../shared";

type WorkoutSet = NonNullable<
  IExerciseSetsQuery["exercise"]
>["steps"][number]["sets"][number];

type ExerciseStatsChartProps = {
  exerciseId: string;
};

type SetCharts = {
  date: string;
  reps?: number;
  weight?: number;
  duration?: number;
  distance?: number;
};

type ChartTypes = "reps" | "weight" | "duration" | "distance";

const chartNames = {
  reps: "Reps",
  weight: "Weight",
  duration: "Duration",
  distance: "Distance",
} as const;

export const ExerciseStatsChart: React.FC<ExerciseStatsChartProps> = ({
  exerciseId,
}) => {
  const { data, loading, error } = useQuery(ExerciseSets, {
    variables: { exerciseId },
    onCompleted(data) {
      const exercise = data.exercise!;
      const activeMeasurements = getActiveMeasurements(
        exercise.measurements as ExerciseMeasurementType
      );
      if (activeMeasurements.includes("reps")) {
        setMetric("reps");
      } else if (activeMeasurements.includes("weight")) {
        setMetric("weight");
      } else if (activeMeasurements.includes("distance")) {
        setMetric("distance");
      } else if (activeMeasurements.includes("duration")) {
        setMetric("duration");
      }
    },
  });
  const [metric, setMetric] = useState<ChartTypes>();

  const chartData = useMemo(() => {
    const exercise = data?.exercise;
    if (!exercise) return [];

    const allSets: WorkoutSet[] = exercise.steps.flatMap((step) => step.sets);

    const groupedSets = groupBy(allSets, (set) => set.date);

    return Object.entries(groupedSets).map(([date, sets]) => {
      let setCharts: SetCharts = { date };

      const activeMeasurements = getActiveMeasurements(
        exercise.measurements as ExerciseMeasurementType
      );
      if (activeMeasurements.includes("reps")) {
        setCharts.reps = maxBy(sets, "reps").reps;
      }
      if (activeMeasurements.includes("weight")) {
        setCharts.weight = maxBy(sets, "weightMcg").weightMcg / 1000000;
      }
      if (activeMeasurements.includes("duration")) {
        setCharts.duration = maxBy(sets, "durationMs").durationMs;
      }
      if (activeMeasurements.includes("distance")) {
        setCharts.distance = maxBy(sets, "distanceMm").distanceMm;
      }

      return setCharts;
    });
  }, [data]);

  const activeMeasurements = useMemo(
    () =>
      data?.exercise?.measurements
        ? getActiveMeasurements(
            data?.exercise?.measurements as ExerciseMeasurementType
          )
        : [],
    [data?.exercise?.measurements]
  );

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>{`Error loading data: ${error.message}`}</div>;
  if (!data?.exercise) return <div>No data found</div>;

  return (
    <div>
      <ToggleGroup
        type="single"
        value={metric}
        onValueChange={(value) => value && setMetric(value as ChartTypes)}
      >
        {activeMeasurements.map((measurement) => (
          <ToggleGroupItem key={measurement} value={measurement}>
            {chartNames[measurement]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ChartContainer config={{}}>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={metric} stroke="#82ca9d" />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

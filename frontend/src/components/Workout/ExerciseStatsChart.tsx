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
import { ExerciseSets, ExerciseSetsQuery } from "../../generated/graphql";
import { ChartContainer, ToggleGroup, ToggleGroupItem } from "../shared";

type WorkoutSet =
  ExerciseSetsQuery["exercises"][number]["steps"][number]["sets"][number];

type ExerciseStatsChartProps = {
  exerciseId: string;
};

export const ExerciseStatsChart: React.FC<ExerciseStatsChartProps> = ({
  exerciseId,
}) => {
  const { data, loading, error } = useQuery(ExerciseSets, {
    variables: { exerciseId },
  });
  const [metric, setMetric] = useState<"reps" | "weight">("reps");

  const chartData = useMemo(() => {
    if (!data?.exercises || data.exercises.length === 0) return [];

    const allSets: WorkoutSet[] = data.exercises[0].steps.flatMap(
      (step) => step.sets
    );

    const groupedSets = groupBy(allSets, (set) => set.date);

    return Object.entries(groupedSets).map(([date, sets]) => ({
      date,
      reps: maxBy(sets, "reps").reps,
      weight: maxBy(sets, "weightMcg").weightMcg / 1000000,
    }));
  }, [data]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data?.exercises) return <div>No data found</div>;

  return (
    <div>
      <ToggleGroup
        type="single"
        value={metric}
        onValueChange={(value) =>
          value && setMetric(value as "reps" | "weight")
        }
      >
        <ToggleGroupItem value="reps">Reps</ToggleGroupItem>
        <ToggleGroupItem value="weight">Weight</ToggleGroupItem>
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

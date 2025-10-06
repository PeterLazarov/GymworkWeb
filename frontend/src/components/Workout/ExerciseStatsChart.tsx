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
import { formatDateIso } from "../../utils/date";
import { getActiveMeasurements } from "../../utils/measurements";
import { excludeField } from "../../utils/object";
import { ExerciseMeasurementType } from "../ExerciseSelect/ExerciseMeasurementType";
import { ChartContainer, ToggleGroup, ToggleGroupItem } from "../shared";

type WorkoutSet =
  IExerciseSetsQuery["exercise"]["steps"][number]["sets"][number];

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

const periodOptions = {
  month: "1M",
  threeMonths: "3M",
  year: "1Y",
  all: "All",
} as const;

type PeriodOption = (typeof periodOptions)[keyof typeof periodOptions];
export const ExerciseStatsChart: React.FC<ExerciseStatsChartProps> = ({
  exerciseId,
}) => {
  const [period, setPeriod] = useState<PeriodOption>(periodOptions.month);
  const [metric, setMetric] = useState<ChartTypes>();

  const { data, loading, error, refetch } = useQuery(ExerciseSets, {
    variables: { exerciseId, period },
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

  const chartData = useMemo(() => {
    const exercise = data?.exercise;
    if (!exercise) return [];

    const allSets: WorkoutSet[] = exercise.steps.flatMap((step) => step.sets);

    const groupedSets = groupBy(allSets, (set) => set.date);

    return Object.entries(groupedSets).map(([date, sets]) => {
      let setCharts: SetCharts = { date: formatDateIso(date, "short") };

      const activeMeasurements = getActiveMeasurements(
        exercise.measurements as ExerciseMeasurementType
      );
      if (activeMeasurements.includes("reps")) {
        setCharts.reps = maxBy(sets, "reps").reps;
      }
      if (activeMeasurements.includes("weight")) {
        setCharts.weight = maxBy(sets, "weight").weight;
      }
      if (activeMeasurements.includes("duration")) {
        setCharts.duration = maxBy(sets, "durationMs").durationMs;
      }
      if (activeMeasurements.includes("distance")) {
        setCharts.distance = maxBy(sets, "distance").distance;
      }

      return setCharts;
    });
  }, [data]);

  const activeMeasurements = useMemo(
    () =>
      data?.exercise?.measurements
        ? getActiveMeasurements(
            excludeField(
              "__typename",
              data?.exercise?.measurements
            ) as ExerciseMeasurementType
          )
        : [],
    [data?.exercise?.measurements]
  );

  const metricUnit = useMemo(() => {
    const measurement =
      data?.exercise?.measurements?.[metric as keyof ExerciseMeasurementType];
    return measurement?.unit;
  }, [data?.exercise?.measurements, metric]);

  if (error) return <div>{`Error loading data: ${error.message}`}</div>;
  if (!data?.exercise && !loading) return <div>No data found</div>;

  return (
    <div className="pt-4">
      {loading && <div>Loading data...</div>}
      {!loading && (
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
            <YAxis label={{ value: metricUnit, position: "insideLeft" }} />
            <Tooltip
              formatter={(value) => `${value} ${metricUnit}`}
              contentStyle={{
                backgroundColor:
                  data?.settings?.theme === "dark" ? "#111827" : "#f3f4f6",
                color: data?.settings?.theme === "dark" ? "#f3f4f6" : "#111827",
              }}
            />
            <Line type="monotone" dataKey={metric} stroke="#82ca9d" />
          </LineChart>
        </ChartContainer>
      )}
      <div className="flex justify-around">
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

        <ToggleGroup
          type="single"
          value={period}
          onValueChange={(value) => {
            if (value) {
              refetch({ exerciseId, period: value });
              setPeriod(value as PeriodOption);
            }
          }}
        >
          {Object.values(periodOptions).map((value) => (
            <ToggleGroupItem key={value} value={value}>
              {value}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

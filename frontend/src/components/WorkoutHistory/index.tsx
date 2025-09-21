import { gql, useQuery } from "@apollo/client";
import { FilterIcon, SearchIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { muscleAreas, muscles } from "../../constants/muscles";
import { WorkoutsHistoryQuery } from "../../generated/graphql";
import { formatDateIso } from "../../utils/date";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Datepicker,
  Input,
  Label,
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shared";
import { WorkoutDayModal } from "../WorkoutCalendar";
import { MuscleMap } from "./MuscleMap";

const WORKOUTS_QUERY = gql`
  query WorkoutsHistory(
    $feeling: String
    $fromDate: ISO8601Date
    $pain: String
    $toDate: ISO8601Date
    $rpe: String
    $muscles: [String!]
    $muscleAreas: [String!]
    $notes: String
  ) {
    settings {
      scientificMuscleNamesEnabled
    }
    workouts(
      feeling: $feeling
      fromDate: $fromDate
      pain: $pain
      toDate: $toDate
      rpe: $rpe
      muscles: $muscles
      muscleAreas: $muscleAreas
      notes: $notes
    ) {
      id
      date
      feeling
      rpe
      notes
      pain
      hasComments
      muscles
      muscleAreas
    }
  }
`;

type Workout = WorkoutsHistoryQuery["workouts"][number];

type Filter = {
  notes: string;
  feeling: string;
  pain: string;
  rpe: string;
  muscles: string[];
  muscleAreas: string[];
  dateFrom: string;
  dateTo: string;
};

export const WorkoutHistory: React.FC = () => {
  const { data, refetch, loading, error } = useQuery(WORKOUTS_QUERY);
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  const [filters, setFilters] = useState<Filter>({
    notes: "",
    feeling: "",
    pain: "",
    rpe: "",
    muscles: [],
    muscleAreas: [],
    dateFrom: "",
    dateTo: "",
  });

  const onFilterChange = (filters: Filter) => {
    setFilters(filters);
    refetch({
      ...filters,
    });
  };

  if (loading) return <div>Loading workouts...</div>;
  if (error) return <div>Error loading workouts: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center p-4 items-center">
        <h1 className="text-xl font-bold">History</h1>
      </div>

      <div className="px-4 pb-4 flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Filter by notes..."
            value={filters.notes}
            onChange={(e) =>
              onFilterChange({ ...filters, notes: e.target.value })
            }
            icon={<SearchIcon className="h-4 w-4" />}
          />
        </div>

        <AdvancedWorkoutFilter
          filters={filters}
          setFilters={onFilterChange}
          scientificMuscleNamesEnabled={
            data?.settings.scientificMuscleNamesEnabled
          }
        />
      </div>

      <div className="flex flex-col gap-4 px-4 items-center overflow-y-auto">
        {data?.workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            onClick={() => setOpenedWorkoutDate(workout.date)}
          />
        ))}
      </div>
      <div className="h-4">
        <span className="text-sm text-muted-foreground">
          {data?.workouts.length || 0} workouts
        </span>
      </div>
      {openedWorkoutDate && (
        <WorkoutDayModal
          isOpen={!!openedWorkoutDate}
          onClose={() => setOpenedWorkoutDate(null)}
          date={new Date(openedWorkoutDate)}
        />
      )}
    </>
  );
};

type WorkoutItemProps = {
  workout: Workout;
  onClick: () => void;
};
const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout, onClick }) => {
  return (
    <Card onClick={onClick} variant="secondary" className="w-full">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex gap-2 ml-4">
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            id={`front-map-${workout.date}`}
            className="h-24"
          />
          <MuscleMap
            muscles={workout.muscles}
            muscleAreas={workout.muscleAreas}
            id={`back-map-${workout.date}`}
            back
            className="h-24"
          />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{formatDateIso(workout.date, "long")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {workout.feeling && (
                  <span>
                    <b>Feeling:</b> {workout.feeling}
                  </span>
                )}
                {workout.rpe && (
                  <span>
                    <b>RPE:</b> {workout.rpe}
                  </span>
                )}
                {workout.pain && (
                  <span>
                    <b>Pain:</b> {workout.pain}
                  </span>
                )}
              </div>
              <span>
                <b>Notes:</b> {workout.notes}
              </span>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

type AdvancedWorkoutFiltersProps = {
  filters: Filter;
  setFilters: (filters: Filter) => void;
  scientificMuscleNamesEnabled?: boolean;
};
const AdvancedWorkoutFilter: React.FC<AdvancedWorkoutFiltersProps> = ({
  filters,
  setFilters,
  scientificMuscleNamesEnabled,
}) => {
  const appliedFiltersCount = useMemo(() => {
    return (
      filters.feeling.length +
      filters.pain.length +
      filters.rpe.length +
      filters.muscles.length +
      filters.muscleAreas.length +
      (filters.dateFrom ? 1 : 0) +
      (filters.dateTo ? 1 : 0)
    );
  }, [filters]);

  const rpeOptions = [
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const painOptions = [
    { value: "noPain", label: "No Pain" },
    { value: "discomfort", label: "Discomfort" },
    { value: "pain", label: "Pain" },
  ];
  const feelingOptions = [
    { value: "sad", label: "Neutral" },
    { value: "neutral", label: "Good" },
    { value: "happy", label: "Great" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <FilterIcon className="h-4 w-4 mr-2" />
          Advanced Filters
          {appliedFiltersCount > 0 && (
            <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
              {appliedFiltersCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 mr-4 flex flex-col gap-2">
        <div className="flex-1">
          <Label className="text-sm font-medium">DateFrom</Label>
          <Datepicker
            date={filters.dateFrom ? new Date(filters.dateFrom) : undefined}
            setDate={(date) =>
              setFilters({
                ...filters,
                dateFrom: date.toISOString(),
              })
            }
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <Label className="text-sm font-medium">Date To</Label>
          <Datepicker
            date={filters.dateTo ? new Date(filters.dateTo) : undefined}
            setDate={(date) =>
              setFilters({
                ...filters,
                dateTo: date.toISOString(),
              })
            }
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Feeling</Label>
            {filters.feeling && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 text-xs"
                onClick={() => setFilters({ ...filters, feeling: "" })}
              >
                Clear
              </Button>
            )}
          </div>
          <Select
            key={filters.feeling}
            value={filters.feeling === "" ? undefined : filters.feeling}
            onValueChange={(values) =>
              setFilters({ ...filters, feeling: values || "" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select feeling" />
            </SelectTrigger>
            <SelectContent>
              {feelingOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Pain</Label>
            {filters.pain && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 text-xs"
                onClick={() => setFilters({ ...filters, pain: "" })}
              >
                Clear
              </Button>
            )}
          </div>
          <Select
            key={filters.pain}
            value={filters.pain === "" ? undefined : filters.pain}
            onValueChange={(values) =>
              setFilters({ ...filters, pain: values || "" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select pain level" />
            </SelectTrigger>
            <SelectContent>
              {painOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">RPE</Label>
            {filters.rpe && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 text-xs"
                onClick={() => setFilters({ ...filters, rpe: "" })}
              >
                Clear
              </Button>
            )}
          </div>
          <Select
            key={filters.rpe}
            value={filters.rpe === "" ? undefined : filters.rpe}
            onValueChange={(values) =>
              setFilters({ ...filters, rpe: values || "" })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select RPE" />
            </SelectTrigger>
            <SelectContent>
              {rpeOptions.map((option) => (
                <SelectItem key={option.label} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {scientificMuscleNamesEnabled && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Muscles</Label>
            <MultiSelect
              values={filters.muscles}
              onValuesChange={(values) =>
                setFilters({ ...filters, muscles: values })
              }
            >
              <MultiSelectTrigger className="w-full">
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

        {!scientificMuscleNamesEnabled && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Muscle Areas</Label>
            <MultiSelect
              values={filters.muscleAreas}
              onValuesChange={(values) =>
                setFilters({ ...filters, muscleAreas: values })
              }
            >
              <MultiSelectTrigger className="w-full">
                <MultiSelectValue placeholder="Select muscle areas..." />
              </MultiSelectTrigger>
              <MultiSelectContent>
                <MultiSelectGroup>
                  {muscleAreas.map((area) => (
                    <MultiSelectItem key={area} value={area}>
                      {area}
                    </MultiSelectItem>
                  ))}
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() =>
            setFilters({
              notes: filters.notes,
              feeling: "",
              pain: "",
              rpe: "",
              muscles: [],
              muscleAreas: [],
              dateFrom: "",
              dateTo: "",
            })
          }
        >
          Clear Filters
        </Button>
      </PopoverContent>
    </Popover>
  );
};

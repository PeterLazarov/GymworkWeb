import { gql, useQuery } from "@apollo/client";
import { FilterIcon, SearchIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "../shared";
import { WorkoutDayModal } from "../WorkoutCalendar";
import { MuscleMap } from "./MuscleMap";

const WORKOUTS_QUERY = gql`
  query WorkoutsHistory {
    settings {
      scientificMuscleNamesEnabled
    }
    workouts {
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

// Filter state interface
interface FilterState {
  notes: string;
  feeling: string[];
  pain: string[];
  rpe: string[];
  muscles: string[];
  muscleAreas: string[];
  dateFrom: string;
  dateTo: string;
}

export const WorkoutHistory: React.FC = () => {
  const { data, refetch, loading, error } = useQuery(WORKOUTS_QUERY);
  const navigate = useNavigate();
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    notes: "",
    feeling: [],
    pain: [],
    rpe: [],
    muscles: [],
    muscleAreas: [],
    dateFrom: "",
    dateTo: "",
  });

  // Get unique values for filter options
  const filterOptions = useMemo((): {
    feelings: string[];
    pains: string[];
    rpes: string[];
    muscles: string[];
    muscleAreas: string[];
  } => {
    if (!data?.workouts)
      return {
        feelings: [],
        pains: [],
        rpes: [],
        muscles: [],
        muscleAreas: [],
      };

    const feelings: string[] = [
      ...new Set(
        data.workouts
          .map((w) => w.feeling)
          .filter((f): f is string => Boolean(f))
      ),
    ] as string[];
    const pains: string[] = [
      ...new Set(
        data.workouts.map((w) => w.pain).filter((p): p is string => Boolean(p))
      ),
    ] as string[];
    const rpes: string[] = [
      ...new Set(
        data.workouts
          .map((w) => w.rpe)
          .filter((r): r is number => Boolean(r))
          .map(String)
      ),
    ] as string[];
    const muscles: string[] = [
      ...new Set(data.workouts.flatMap((w) => w.muscles)),
    ] as string[];
    const muscleAreas: string[] = [
      ...new Set(data.workouts.flatMap((w) => w.muscleAreas)),
    ] as string[];

    return { feelings, pains, rpes, muscles, muscleAreas };
  }, [data]);

  // Filter workouts based on current filters
  const filteredWorkouts = useMemo(() => {
    if (!data?.workouts) return [];

    return data.workouts.filter((workout) => {
      // Filter by date range
      if (filters.dateFrom && workout.date < filters.dateFrom) {
        return false;
      }
      if (filters.dateTo && workout.date > filters.dateTo) {
        return false;
      }

      // Filter by notes
      if (
        filters.notes &&
        !workout.notes?.toLowerCase().includes(filters.notes.toLowerCase())
      ) {
        return false;
      }

      // Filter by feeling
      if (
        filters.feeling.length > 0 &&
        (!workout.feeling || !filters.feeling.includes(workout.feeling))
      ) {
        return false;
      }

      // Filter by pain
      if (
        filters.pain.length > 0 &&
        (!workout.pain || !filters.pain.includes(workout.pain))
      ) {
        return false;
      }

      // Filter by RPE
      if (
        filters.rpe.length > 0 &&
        (!workout.rpe || !filters.rpe.includes(String(workout.rpe)))
      ) {
        return false;
      }

      // Filter by muscles
      if (
        filters.muscles.length > 0 &&
        !filters.muscles.some((muscle) => workout.muscles.includes(muscle))
      ) {
        return false;
      }

      // Filter by muscle areas
      if (
        filters.muscleAreas.length > 0 &&
        !filters.muscleAreas.some((area) => workout.muscleAreas.includes(area))
      ) {
        return false;
      }

      return true;
    });
  }, [data, filters]);

  const workoutDates = useMemo(
    () => data?.workouts.map((workout) => workout.date),
    [data]
  );
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
              setFilters((prev) => ({ ...prev, notes: e.target.value }))
            }
            icon={<SearchIcon className="h-4 w-4" />}
          />
        </div>

        <AdvancedWorkoutFilter
          filters={filters}
          setFilters={setFilters}
          scientificMuscleNamesEnabled={
            data?.settings.scientificMuscleNamesEnabled
          }
          filterOptions={filterOptions}
        />
      </div>

      <div className="flex flex-col gap-4 px-4 items-center overflow-y-auto">
        {filteredWorkouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            onClick={() => setOpenedWorkoutDate(workout.date)}
          />
        ))}
      </div>
      <div className="h-4">
        <span className="text-sm text-muted-foreground">
          {filteredWorkouts.length} workouts
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
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  scientificMuscleNamesEnabled?: boolean;
  filterOptions: {
    feelings: string[];
    pains: string[];
    rpes: string[];
    muscles: string[];
    muscleAreas: string[];
  };
};
const AdvancedWorkoutFilter: React.FC<AdvancedWorkoutFiltersProps> = ({
  filters,
  setFilters,
  scientificMuscleNamesEnabled,
  filterOptions,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <FilterIcon className="h-4 w-4 mr-2" />
          Advanced Filters
          {(filters.notes ? 1 : 0) +
            filters.feeling.length +
            filters.pain.length +
            filters.rpe.length +
            filters.muscles.length +
            filters.muscleAreas.length +
            (filters.dateFrom ? 1 : 0) +
            (filters.dateTo ? 1 : 0) >
            0 && (
            <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
              {(filters.notes ? 1 : 0) +
                filters.feeling.length +
                filters.pain.length +
                filters.rpe.length +
                filters.muscles.length +
                filters.muscleAreas.length +
                (filters.dateFrom ? 1 : 0) +
                (filters.dateTo ? 1 : 0)}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 mr-4 flex flex-col gap-2">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Date Range</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label className="text-xs text-muted-foreground mb-1 block">
                From
              </Label>
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
              <Label className="text-xs text-muted-foreground mb-1 block">
                To
              </Label>
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
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Feeling</Label>
          <MultiSelect
            values={filters.feeling}
            onValuesChange={(values) =>
              setFilters({ ...filters, feeling: values })
            }
          >
            <MultiSelectTrigger className="w-full">
              <MultiSelectValue placeholder="Select feelings..." />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {filterOptions.feelings.map((feeling) => (
                  <MultiSelectItem key={feeling} value={feeling}>
                    {feeling}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Pain</Label>
          <MultiSelect
            values={filters.pain}
            onValuesChange={(values) =>
              setFilters({ ...filters, pain: values })
            }
          >
            <MultiSelectTrigger className="w-full">
              <MultiSelectValue placeholder="Select pain levels..." />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {filterOptions.pains.map((pain) => (
                  <MultiSelectItem key={pain} value={pain}>
                    {pain}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">RPE</Label>
          <MultiSelect
            values={filters.rpe}
            onValuesChange={(values) => setFilters({ ...filters, rpe: values })}
          >
            <MultiSelectTrigger className="w-full">
              <MultiSelectValue placeholder="Select RPE values..." />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {filterOptions.rpes.map((rpe) => (
                  <MultiSelectItem key={rpe} value={rpe}>
                    {rpe}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
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
                  {filterOptions.muscles.map((muscle) => (
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
                  {filterOptions.muscleAreas.map((area) => (
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
              notes: "",
              feeling: [],
              pain: [],
              rpe: [],
              muscles: [],
              muscleAreas: [],
              dateFrom: "",
              dateTo: "",
            })
          }
        >
          Clear All Filters
        </Button>
      </PopoverContent>
    </Popover>
  );
};

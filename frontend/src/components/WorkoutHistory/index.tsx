import { gql, useQuery } from "@apollo/client";
import { FilterIcon, SearchIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { muscleAreas, muscles } from "../../constants/muscles";
import { useInfiniteScroll } from "../../utils/useInfiniteScroll";
import {
  Button,
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
  Spinner,
} from "../shared";
import { WorkoutDayModal } from "../WorkoutCalendar";
import { WorkoutCard } from "./WorkoutCard";

const WORKOUTS_QUERY = gql`
  query WorkoutsHistory($filter: WorkoutFilter, $first: Int, $after: String) {
    settings {
      scientificMuscleNamesEnabled
    }
    workouts(filter: $filter, first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

type Filter = {
  notes: string;
  feeling: string;
  pain: string;
  rpe: string;
  muscles: string[];
  muscleAreas: string[];
  dateFrom?: string;
  dateTo?: string;
};

export const WorkoutHistory: React.FC = () => {
  const [openedWorkoutDate, setOpenedWorkoutDate] = useState<Date | null>(null);

  const [filters, setFilters] = useState<Filter>({
    notes: "",
    feeling: "",
    pain: "",
    rpe: "",
    muscles: [],
    muscleAreas: [],
  });

  const { data, fetchMore, refetch, loading, error } = useQuery(
    WORKOUTS_QUERY,
    {
      variables: {
        filter: filters,
        first: 10,
      },
    }
  );

  const { containerRef, loading: infiniteScrollLoading } = useInfiniteScroll({
    data: data?.workouts,
    loading,
    fetchMore: (options) =>
      fetchMore({
        variables: {
          ...filters,
          ...options.variables,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            workouts: {
              ...fetchMoreResult.workouts,
              edges: [
                ...(prev.workouts?.edges || []),
                ...(fetchMoreResult.workouts?.edges || []),
              ],
            },
          };
        },
      }),
    pageSize: 20,
    threshold: 200,
  });

  const onFilterChange = (filters: Filter) => {
    setFilters(filters);
    refetch({
      ...filters,
      first: 20,
    });
  };

  if (loading && !infiniteScrollLoading) return <div>Loading workouts...</div>;
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

      <div
        className="flex flex-col gap-4 px-4 items-center overflow-y-auto"
        ref={containerRef}
      >
        {data?.workouts.edges.map(({ node: workout }) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onClick={() => setOpenedWorkoutDate(workout.date)}
            scientificMuscleNamesEnabled={
              data?.settings.scientificMuscleNamesEnabled
            }
          />
        ))}
      </div>
      {infiniteScrollLoading && <Spinner />}
      <div className="h-4">
        <span className="text-sm text-muted-foreground">
          {data?.workouts.totalCount || 0} workouts
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
      (filters.feeling !== "" ? 1 : 0) +
      (filters.pain !== "" ? 1 : 0) +
      (filters.rpe !== "" ? 1 : 0) +
      (filters.muscles.length > 0 ? 1 : 0) +
      (filters.muscleAreas.length > 0 ? 1 : 0) +
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

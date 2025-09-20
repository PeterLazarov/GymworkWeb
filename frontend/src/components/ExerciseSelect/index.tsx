import { gql, useMutation, useQuery } from "@apollo/client";
import { debounce } from "lodash";
import { ChevronLeft, InfoIcon, PencilIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Exercise } from "../../generated/graphql";
import { exerciseImages } from "../../utils/exerciseImages";
import { Button, Card, CardHeader, CardTitle, Input } from "../shared";
import { AddExerciseModal } from "./AddExerciseModal";
import { EditExerciseModal } from "./EditExerciseModal";

const EXERCISES_QUERY = gql`
  query Exercises($name: String) {
    exercises(name: $name) {
      id
      name
      images
    }
  }
`;

const ADD_STEP_MUTATION = gql`
  mutation AddStep($workoutDate: String!, $exerciseIds: [ID!]!) {
    addStep(input: { workoutDate: $workoutDate, exerciseIds: $exerciseIds }) {
      step {
        id
        exercises {
          id
          name
        }
        sets {
          id
          reps
          weightMcg
        }
      }
      errors
    }
  }
`;

export const ExerciseList: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingExerciseId, setEditingExerciseId] = useState<string>();
  const { data, refetch, loading, error } = useQuery(EXERCISES_QUERY);
  const navigate = useNavigate();

  if (loading) return <div>Loading exercises...</div>;
  if (error) return <div>Error loading exercises: {error.message}</div>;

  const debouncedSearch = debounce((value: string) => {
    refetch({ name: value });
  }, 500);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <Button variant="default" size="icon" onClick={handleBack}>
          <ChevronLeft />
          <span className="sr-only">Go back</span>
        </Button>
        <h1 className="text-xl font-bold">Exercises</h1>
        <Button onClick={() => setShowCreateForm(true)}>Create Exercise</Button>
      </div>

      <Input
        placeholder="Search exercises"
        onChange={(e) => debouncedSearch(e.target.value)}
        icon={<SearchIcon />}
      />

      <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-2">
        {data?.exercises.map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            onEdit={setEditingExerciseId}
          />
        ))}
      </div>

      <AddExerciseModal
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSuccess={() => {
          setShowCreateForm(false);
          refetch();
        }}
      />
      {editingExerciseId && (
        <EditExerciseModal
          isOpen={!!editingExerciseId}
          onClose={() => setEditingExerciseId(undefined)}
          onSuccess={() => {
            setEditingExerciseId(undefined);
            refetch();
          }}
          exerciseId={editingExerciseId}
        />
      )}
    </>
  );
};

type ExerciseItemProps = {
  exercise: Exercise;
  onEdit: (id: string) => void;
};

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, onEdit }) => {
  const navigate = useNavigate();
  const { date } = useParams();
  const [addStep] = useMutation(ADD_STEP_MUTATION);
  const [imageUrl, setImageUrl] = React.useState<string>();

  React.useEffect(() => {
    const loadImage = async () => {
      if (
        exercise.images[0] &&
        typeof exerciseImages[exercise.images[0]] === "function"
      ) {
        try {
          const importedImage = await exerciseImages[exercise.images[0]]();
          setImageUrl(importedImage.default);
        } catch (error) {
          console.error("Failed to load image:", error);
          // Try loading without the number suffix (e.g., "1" at the end)
          const baseImageKey = exercise.images[0].replace(/[0-9]+$/, "");
          if (typeof exerciseImages[baseImageKey] === "function") {
            try {
              const baseImage = await exerciseImages[baseImageKey]();
              setImageUrl(baseImage.default);
            } catch (fallbackError) {
              console.error("Failed to load fallback image:", fallbackError);
            }
          }
        }
      }
    };
    loadImage();
  }, [exercise.images]);

  const handleClick = async () => {
    if (!date) {
      console.error("No workout date provided");
      return;
    }

    try {
      const result = await addStep({
        variables: {
          workoutDate: date,
          exerciseIds: [exercise.id],
        },
      });

      if (result.data?.addStep?.errors?.length) {
        console.error(
          "Failed to create workout step:",
          result.data.addStep.errors
        );
        return;
      }

      navigate(`/${date}`);
    } catch (error) {
      console.error("Failed to add step:", error);
    }
  };

  const onInfoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const onEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onEdit(exercise.id);
  };

  return (
    <Card
      key={exercise.id}
      onClick={handleClick}
      variant="secondary"
      className="p-1 flex"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={exercise.name}
          className="h-16 w-16 rounded-md object-cover"
        />
      )}
      <CardHeader className="p-2 flex justify-between w-full flex-row">
        <CardTitle>{exercise.name}</CardTitle>
      </CardHeader>
      <div className="flex gap-2">
        <Button variant="secondary" size="icon" onClick={onEditClick}>
          <PencilIcon className="text-muted-foreground" />
          <span className="sr-only">Edit exercise</span>
        </Button>
        <Button variant="secondary" size="icon" onClick={onInfoClick}>
          <InfoIcon className="text-muted-foreground" />
          <span className="sr-only">Exercise info</span>
        </Button>
      </div>
    </Card>
  );
};

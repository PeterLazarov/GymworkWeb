import { gql, useMutation } from "@apollo/client";
import { NotebookPenIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { feelingTexts, painTexts } from "../../constants/enums";
import { IWorkoutByDateQuery } from "../../generated/graphql";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Modal,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from "../shared";
import { SetListItem } from "./SetListItem";
import { WorkoutStepModal } from "./WorkoutStepModal";

const UPDATE_WORKOUT_MUTATION = gql`
  mutation UpdateWorkout($input: UpdateWorkoutInput!) {
    updateWorkout(input: $input) {
      workout {
        id
        feeling
        rpe
        notes
        pain
      }
      errors
    }
  }
`;
type Workout = NonNullable<IWorkoutByDateQuery["workout"]>;
type WorkoutStep = Workout["steps"][number];

const rpeTexts = {
  5: "Feels pretty easy, I could keep going for a while.",
  6: "Starting to feel some effort, but still comfortable.",
  7: "Getting tough now, but I can hang in there.",
  8: "This is hard, I'm pushing, but can still manage.",
  9: "Really tough, almost maxed out, I'm barely hanging on.",
  10: "All-out effort, I've got nothing left to give!",
};

type WorkoutViewProps = {
  workout: Workout;
  readonly?: boolean;
};

export const WorkoutView: React.FC<WorkoutViewProps> = ({
  workout,
  readonly,
}) => {
  const navigate = useNavigate();
  const [focusedStep, setFocusedStep] = useState<WorkoutStep | undefined>();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT_MUTATION);

  return (
    <div className="p-4 flex-1 overflow-hidden flex flex-col gap-4">
      <div className="flex overflow-y-auto flex-col gap-4 flex-1">
        {workout.hasComments && (
          <WorkoutCommentsCard
            workout={workout}
            onClick={() => !readonly && setIsDetailsModalOpen(true)}
          />
        )}
        {workout.steps.map((step) => (
          <WorkoutStepCard
            key={step.id}
            step={step}
            onClick={() => !readonly && setFocusedStep(step)}
          />
        ))}
      </div>

      {!readonly && (
        <div className="flex gap-2 justify-center">
          <Button onClick={() => navigate(`/${workout.date}/exercises`)}>
            <PlusIcon /> Add Exercise
          </Button>
          <Button onClick={() => setIsDetailsModalOpen(true)}>
            <NotebookPenIcon /> Add Comment
          </Button>
        </div>
      )}
      {focusedStep && (
        <WorkoutStepModal
          isOpen={!!focusedStep}
          onClose={() => setFocusedStep(undefined)}
          step={focusedStep}
          workout={workout}
        />
      )}
      <WorkoutDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        workout={workout}
        onSave={async (details) => {
          const result = await updateWorkout({
            variables: {
              input: {
                workoutId: workout.id,
                ...details,
              },
            },
          });

          if (result.data?.updateWorkout?.errors?.length) {
            console.error(
              "Failed to update workout:",
              result.data.updateWorkout.errors
            );
            return;
          }

          setIsDetailsModalOpen(false);
        }}
      />
    </div>
  );
};

type WorkoutCommentsCardProps = {
  workout: Workout;
  onClick?: () => void;
};

const WorkoutCommentsCard: React.FC<WorkoutCommentsCardProps> = ({
  workout,
  onClick,
}) => (
  <Card onClick={onClick} variant="outline">
    <CardHeader>
      <CardTitle>Comments</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {workout.notes && (
        <div className="text-sm text-gray-500">{workout.notes}</div>
      )}
      {workout.feeling && (
        <div className="text-sm text-gray-500">
          Feeling: {feelingTexts[workout.feeling]}
        </div>
      )}
      {workout.rpe && (
        <div className="text-sm text-gray-500">RPE: {workout.rpe}</div>
      )}
      {workout.pain && (
        <div className="text-sm text-gray-500">
          Pain: {painTexts[workout.pain]}
        </div>
      )}
    </CardContent>
  </Card>
);

const WorkoutStepCard: React.FC<{
  step: WorkoutStep;
  onClick?: () => void;
}> = ({ step, onClick }) => (
  <Card onClick={onClick} variant="secondary">
    <CardHeader>
      <CardTitle>{step.exercises[0]?.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-1">
      {step.sets.map((set) => (
        <SetListItem
          key={set.id}
          set={set}
          measurements={step.exercises[0]!.measurements}
        />
      ))}
    </CardContent>
  </Card>
);

type WorkoutDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  workout: Workout;
  onSave: (details: {
    feeling?: string;
    rpe?: number;
    notes?: string;
    pain?: string;
  }) => void;
};

const WorkoutDetailsModal: React.FC<WorkoutDetailsModalProps> = ({
  isOpen,
  onClose,
  workout,
  onSave,
}) => {
  const [feeling, setFeeling] = useState(workout.feeling || "");
  const [rpe, setRpe] = useState(workout.rpe?.toString() || "");
  const [notes, setNotes] = useState(workout.notes || "");
  const [pain, setPain] = useState(workout.pain || "");

  const handleSave = () => {
    onSave({
      feeling: feeling || undefined,
      rpe: rpe ? parseInt(rpe, 10) : undefined,
      notes: notes || undefined,
      pain: pain || undefined,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Workout Details"
      description="Enter notes about your workout"
      hideFooter
    >
      <div className="space-y-4">
        <div>
          <Label>Feeling</Label>
          <Select value={feeling} onValueChange={setFeeling}>
            <SelectTrigger>
              <SelectValue placeholder="How are you feeling?" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(feelingTexts).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Label className="w-full">RPE (Rate of Perceived Exertion)</Label>

          <div className="flex">
            <ToggleGroup
              type="single"
              value={rpe}
              onValueChange={setRpe}
              className="border border-input rounded-md flex"
            >
              <ToggleGroupItem value="5">5</ToggleGroupItem>
              <ToggleGroupItem value="6">6</ToggleGroupItem>
              <ToggleGroupItem value="7">7</ToggleGroupItem>
              <ToggleGroupItem value="8">8</ToggleGroupItem>
              <ToggleGroupItem value="9">9</ToggleGroupItem>
              <ToggleGroupItem value="10">10</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {rpe && <span>{rpeTexts[rpe]}</span>}
        </div>

        <div>
          <Label>Pain Level</Label>
          <Select value={pain} onValueChange={setPain}>
            <SelectTrigger>
              <SelectValue placeholder="Any pain?" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(painTexts).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Notes</Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes about your workout..."
            className="h-32"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Modal>
  );
};

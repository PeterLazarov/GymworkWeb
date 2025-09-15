import { gql, useMutation } from "@apollo/client";
import { NotebookPenIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutsByDateQuery } from "../../generated/graphql";
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
} from "../shared";
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
type Workout = NonNullable<WorkoutsByDateQuery["workouts"][number]>;
type WorkoutStep = Workout["steps"][number];

type WorkoutViewProps = {
  workout: Workout;
};

export const WorkoutView: React.FC<WorkoutViewProps> = ({ workout }) => {
  const navigate = useNavigate();
  const [focusedStep, setFocusedStep] = useState<WorkoutStep | undefined>();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT_MUTATION);

  return (
    <div className="p-4 flex-1 overflow-hidden flex flex-col gap-4">
      <div className="flex overflow-y-auto flex-col gap-4 flex-1">
        {workout.hasComments && (
          <Card onClick={() => setIsDetailsModalOpen(true)} variant="outline">
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {workout.notes && (
                <div className="text-sm text-gray-500">{workout.notes}</div>
              )}
              {workout.feeling && (
                <div className="text-sm text-gray-500">{workout.feeling}</div>
              )}
              {workout.rpe && (
                <div className="text-sm text-gray-500">RPE: {workout.rpe}</div>
              )}
              {workout.pain && (
                <div className="text-sm text-gray-500">
                  Pain: {workout.pain}
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {workout.steps.map((step) => (
          <WorkoutStepCard
            key={step.id}
            step={step}
            onClick={() => setFocusedStep(step)}
          />
        ))}
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={() => navigate(`/${workout.date}/exercises`)}>
          <PlusIcon /> Add Exercise
        </Button>
        <Button onClick={() => setIsDetailsModalOpen(true)}>
          <NotebookPenIcon /> Add Comment
        </Button>
      </div>
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
        <div key={set.id} className="flex gap-4 items-center">
          {set.reps && <span>{set.reps} reps</span>}
          {set.weightMcg && <span>{set.weightMcg / 1000000} kg</span>}
        </div>
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
              <SelectItem value="great">Great</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="okay">Okay</SelectItem>
              <SelectItem value="tired">Tired</SelectItem>
              <SelectItem value="exhausted">Exhausted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>RPE (Rate of Perceived Exertion)</Label>
          <Select value={rpe} onValueChange={setRpe}>
            <SelectTrigger>
              <SelectValue placeholder="Select RPE (1-10)" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Pain Level</Label>
          <Select value={pain} onValueChange={setPain}>
            <SelectTrigger>
              <SelectValue placeholder="Any pain?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="mild">Mild</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="severe">Severe</SelectItem>
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

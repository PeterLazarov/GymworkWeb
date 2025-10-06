import { gql, TypedDocumentNode, useMutation, useQuery } from "@apollo/client";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardPasteIcon,
  CopyIcon,
  PlusIcon,
} from "lucide-react";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IWorkoutTemplatesQuery,
  IWorkoutTemplatesQueryVariables,
  WorkoutByDate,
} from "../../generated/graphql";
import {
  formatDate,
  formatDateIso,
  formatStringDateToIso,
} from "../../utils/date";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Header,
  Modal,
} from "../shared";
import { MuscleMap } from "../WorkoutHistory/MuscleMap";
import { CopyWorkoutModal } from "./CopyWorkoutModal";
import { WorkoutView } from "./WorkoutView";

const WORKOUT_TEMPLATES_QUERY: TypedDocumentNode<
  IWorkoutTemplatesQuery,
  IWorkoutTemplatesQueryVariables
> = gql`
  query WorkoutTemplates {
    workouts(filter: { isTemplate: true }) {
      edges {
        node {
          id
          name
          muscles
        }
      }
      totalCount
    }
  }
`;

const CREATE_WORKOUT_MUTATION = gql`
  mutation CreateWorkout($input: CreateWorkoutInput!) {
    createWorkout(input: $input) {
      workout {
        id
        date
        feeling
        rpe
        notes
        pain
        hasComments
        steps {
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
      }
      errors
    }
  }
`;

type WorkoutTemplate =
  IWorkoutTemplatesQuery["workouts"]["edges"][number]["node"];

type Props = {
  date?: string;
};
const WorkoutHeader: React.FC<Props> = ({ date }) => {
  const navigate = useNavigate();
  const currentDate = date ? DateTime.fromISO(date) : DateTime.now();
  const dateLabel = date
    ? formatDateIso(date, "long")
    : formatDate(currentDate, "long");

  const navigateToDate = (daysToAdd: number) => {
    const newDate = currentDate.plus({ days: daysToAdd });
    navigate(`/${newDate.toISODate()}`);
  };

  return (
    <Header className="grid grid-cols-3 gap-4">
      <div>
        <Button
          variant="secondary"
          className="w-48"
          onClick={() => navigateToDate(-1)}
        >
          <ChevronLeftIcon />{" "}
          {formatDate(currentDate.minus({ days: 1 }), "long")}
        </Button>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Button variant="ghost">
          <Link
            to={`/${currentDate.toISODate()}/calendar`}
            className="flex items-center gap-2"
          >
            <CalendarIcon />
            <span>{dateLabel}</span>
          </Link>
        </Button>
      </div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="w-48"
          onClick={() => navigateToDate(1)}
        >
          {formatDate(currentDate.plus({ days: 1 }), "long")}
          <ChevronRightIcon />
        </Button>
      </div>
    </Header>
  );
};

export const Workout = () => {
  const { date } = useParams();
  const currentDate = date || DateTime.now().toISODate();
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const { data: templatesData } = useQuery(WORKOUT_TEMPLATES_QUERY);
  const { data, loading, error, refetch } = useQuery(WorkoutByDate, {
    variables: { date: currentDate },
    skip: !currentDate,
  });

  const [createWorkout, { loading: creating, error: createError }] =
    useMutation(CREATE_WORKOUT_MUTATION);

  const handleCreateWorkout = async (templateId?: string) => {
    try {
      const result = await createWorkout({
        variables: {
          input: {
            date: formatStringDateToIso(currentDate),
            templateId,
          },
        },
      });

      if (result.data?.createWorkout?.errors?.length) {
        console.error(
          "Failed to create workout:",
          result.data.createWorkout.errors
        );
        return;
      }

      refetch();
    } catch (err) {
      console.error("Failed to create workout:", err);
    }
  };

  return (
    <>
      <WorkoutHeader date={date} />
      {(loading || creating) && <div>Loading...</div>}
      {(error || createError) && (
        <div>
          {`Error loading workout: ${error?.message || createError?.message}`}
        </div>
      )}
      {!loading && !error && !data?.workout && !creating && (
        <div className="text-center p-4">
          <div className="mb-4">No workout found for this date</div>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => setIsTemplateModalOpen(true)}
              disabled={templatesData?.workouts.totalCount === 0}
            >
              <ClipboardPasteIcon className="h-4 w-4" />
              Use template
            </Button>
            <Button onClick={() => handleCreateWorkout()}>
              <PlusIcon className="h-4 w-4" />
              Create Workout
            </Button>
            <Button onClick={() => setIsCopyModalOpen(true)}>
              <CopyIcon className="h-4 w-4" />
              Copy Existing Workout
            </Button>
          </div>
        </div>
      )}
      {data?.workout && <WorkoutView workout={data.workout} />}
      <CopyWorkoutModal
        isOpen={isCopyModalOpen}
        onClose={() => setIsCopyModalOpen(false)}
        targetDate={currentDate}
        onWorkoutCopied={() => {
          refetch();
          setIsCopyModalOpen(false);
        }}
      />
      <TemplateSelectModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelected={(template) => {
          setIsTemplateModalOpen(false);
          handleCreateWorkout(template.id);
        }}
        templates={templatesData?.workouts.edges.map(({ node }) => node) || []}
      />
    </>
  );
};

type TemplateSelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelected: (template: WorkoutTemplate) => void;
  templates: WorkoutTemplate[];
};

const TemplateSelectModal: React.FC<TemplateSelectModalProps> = ({
  isOpen,
  onClose,
  onSelected,
  templates,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Workout Template"
      description="Select a workout template to use"
      hideFooter
    >
      <div className="space-y-2">
        {templates.map((template) => (
          <Card
            key={template.id}
            onClick={() => onSelected(template)}
            variant="secondary"
          >
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <MuscleMap
                muscles={template.muscles}
                id={`muscle-map-${template.id}`}
                className="h-24"
              />
              <MuscleMap
                muscles={template.muscles}
                id={`muscle-map-${template.id}`}
                back
                className="h-24"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </Modal>
  );
};

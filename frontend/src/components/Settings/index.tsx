import { gql, TypedDocumentNode, useMutation, useQuery } from "@apollo/client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ISettingsQuery,
  ISettingsQueryVariables,
} from "../../generated/graphql";
import { Button, Checkbox } from "../shared";

const SETTINGS_QUERY: TypedDocumentNode<
  ISettingsQuery,
  ISettingsQueryVariables
> = gql`
  query Settings {
    settings {
      id
      theme
      scientificMuscleNamesEnabled
      showSetCompletion
      previewNextSet
      measureRest
      showCommentsCard
      showWorkoutTimer
    }
  }
`;

const UPDATE_SETTINGS = gql`
  mutation UpdateSettings($input: UpdateSettingsInput!) {
    updateSettings(input: $input) {
      settings {
        id
        theme
        scientificMuscleNamesEnabled
        showSetCompletion
        previewNextSet
        measureRest
        showCommentsCard
        showWorkoutTimer
      }
      errors
    }
  }
`;

export const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(SETTINGS_QUERY);
  const [updateSettings] = useMutation(UPDATE_SETTINGS);

  if (loading) return <div>Loading settings...</div>;
  if (error) return <div>Error loading settings: {error.message}</div>;
  if (!data?.settings) return <div>No settings found</div>;

  const settings = data.settings;

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggle = async (field: string, checked: boolean) => {
    try {
      await updateSettings({ variables: { input: { [field]: checked } } });
    } catch (error) {
      console.error("Failed to update settings:", error);
    }
  };

  const handleThemeChange = async (theme: string) => {
    try {
      await updateSettings({
        variables: {
          input: { theme },
        },
      });
    } catch (error) {
      console.error("Failed to update theme:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between p-4 items-center">
        <Button variant="default" size="icon" onClick={handleBack}>
          <ChevronLeft />
          <span className="sr-only">Go back</span>
        </Button>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </div>

      <div className="px-4 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Theme</h2>
          <div className="flex gap-4">
            <Button
              variant={settings.theme === "light" ? "default" : "outline"}
              onClick={() => handleThemeChange("light")}
            >
              Light
            </Button>
            <Button
              variant={settings.theme === "dark" ? "default" : "outline"}
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Display Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="scientific-names"
                checked={settings.scientificMuscleNamesEnabled}
                onCheckedChange={(checked) =>
                  handleToggle(
                    "scientificMuscleNamesEnabled",
                    checked as boolean
                  )
                }
              />
              <label
                htmlFor="scientific-names"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Scientific Muscle Names
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="set-completion"
                checked={settings.showSetCompletion}
                onCheckedChange={(checked) =>
                  handleToggle("showSetCompletion", checked as boolean)
                }
              />
              <label
                htmlFor="set-completion"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Set Completion
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="preview-next"
                checked={settings.previewNextSet}
                onCheckedChange={(checked) =>
                  handleToggle("previewNextSet", checked as boolean)
                }
              />
              <label
                htmlFor="preview-next"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Preview Next Set
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="measure-rest"
                checked={settings.measureRest}
                onCheckedChange={(checked) =>
                  handleToggle("measureRest", checked as boolean)
                }
              />
              <label
                htmlFor="measure-rest"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Measure Rest Time
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="show-comments"
                checked={settings.showCommentsCard}
                onCheckedChange={(checked) =>
                  handleToggle("showCommentsCard", checked as boolean)
                }
              />
              <label
                htmlFor="show-comments"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Comments Card
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="show-timer"
                checked={settings.showWorkoutTimer}
                onCheckedChange={(checked) =>
                  handleToggle("showWorkoutTimer", checked as boolean)
                }
              />
              <label
                htmlFor="show-timer"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Workout Timer
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

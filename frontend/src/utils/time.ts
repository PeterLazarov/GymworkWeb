export const msToTimeString = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const timeStringToMs = (timeStr: string): number => {
  const [hours = "0", minutes = "0", seconds = "0"] = timeStr.split(":");
  return (
    (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000
  );
};

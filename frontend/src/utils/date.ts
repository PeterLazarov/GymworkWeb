import { DateTime } from "luxon";
import { capitalize } from "./string";

const dateFormats = {
  short: "MMM dd",
  long: "ccc, MMM dd, yyyy",
  iso: "yyyy-MM-dd",
};

export const formatDateIso = (
  dateIso: string,
  format: keyof typeof dateFormats
) => {
  const date = DateTime.fromISO(dateIso);

  return formatDate(date, format);
};
export const formatDate = (
  date: DateTime,
  format: keyof typeof dateFormats
) => {
  const today = DateTime.now().set({ hour: 0, minute: 0, second: 0 });
  const todayDiff = Math.round(date.diff(today, "days").days);
  const dateLabel =
    Math.abs(todayDiff) < 2
      ? capitalize(date.toRelativeCalendar({ unit: "days" })!)
      : date.toFormat(dateFormats[format]);

  return dateLabel;
};
export const formatStringDateToIso = (dateIso: string) => {
  const date = DateTime.fromISO(dateIso);
  const dateWithoutTime = date.set({ hour: 0, minute: 0, second: 0 });

  return dateWithoutTime.toFormat("yyyy-MM-dd");
};

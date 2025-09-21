"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { HTMLAttributes } from "react";

import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from ".";

type Props = {
  date: Date | undefined;
  setDate: (date: Date) => void;
} & HTMLAttributes<HTMLButtonElement>;
export const Datepicker: React.FC<Props> = ({
  date,
  setDate,
  className,
  ...props
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className={`data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal ${className}`}
          {...props}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} required />
      </PopoverContent>
    </Popover>
  );
};

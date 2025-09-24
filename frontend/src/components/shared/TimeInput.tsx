import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "./Input";

const TimeInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <Input
      type="time"
      id="time-picker"
      step="1"
      className={cn(
        "bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TimeInput.displayName = "TimeInput";

export { TimeInput };

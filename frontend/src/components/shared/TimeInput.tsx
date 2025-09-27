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
      step="1"
      className={cn(
        "pl-[36%] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
        className
      )}
      style={{
        paddingLeft: "calc(50% - 4ch)",
      }}
      ref={ref}
      {...props}
    />
  );
});
TimeInput.displayName = "TimeInput";

export { TimeInput };

import * as React from "react";

import { cn } from "../../lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  unit?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, unit, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            unit && "pr-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {unit && (
          <span className="pointer-events-none absolute right-3 text-sm text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

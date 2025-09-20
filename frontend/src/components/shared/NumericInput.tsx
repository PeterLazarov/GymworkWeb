import * as React from "react";
import { Input } from "./Input";

interface NumericInputProps
  extends Omit<
    React.ComponentProps<"input">,
    "type" | "value" | "onChange" | "defaultValue"
  > {
  value?: number | null;
  defaultValue?: number | null;
  onChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  allowNull?: boolean;
  unit?: string;
}

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      min,
      max,
      step = 1,
      allowNull = false,
      unit,
      ...props
    },
    ref
  ) => {
    // Convert number to string for controlled input
    const stringValue =
      value !== null && value !== undefined ? value.toString() : "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;

      // Handle empty input
      if (!val) {
        if (allowNull) {
          onChange?.(null);
        }
        return;
      }

      // Parse the numeric value
      const num = parseFloat(val);

      // Validate the number
      if (isNaN(num)) {
        return;
      }

      // Apply min/max constraints
      if (min !== undefined && num < min) {
        onChange?.(min);
        return;
      }
      if (max !== undefined && num > max) {
        onChange?.(max);
        return;
      }

      onChange?.(num);
    };

    return (
      <div className="relative w-full">
        <Input
          type="text"
          value={stringValue}
          onChange={handleChange}
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

NumericInput.displayName = "NumericInput";

export { NumericInput };

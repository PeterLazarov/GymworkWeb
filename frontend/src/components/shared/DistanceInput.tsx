import convert, { Length } from "convert";
import * as React from "react";

import { cn } from "../../lib/utils";
import {
  NumericInput,
  NumericInputProps,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./";

interface DistanceInputProps extends NumericInputProps {
  unit: Length;
}

const DistanceInput = React.forwardRef<HTMLInputElement, DistanceInputProps>(
  ({ value, onChange, className, unit: defaultUnit, ...props }, ref) => {
    const [unit, setUnit] = React.useState<Length>(defaultUnit);

    const convertedValue = React.useMemo(() => {
      if (!value) return 0;

      return convert(value, "mm").to(unit);
    }, [value, unit]);

    const onInputChange = (value: number | null) => {
      if (!onChange || !value) return;

      const baseValue = convert(value, unit).to("mm");

      onChange(baseValue);
    };

    return (
      <div className="relative w-full flex gap-2">
        <NumericInput
          value={convertedValue}
          onChange={onInputChange}
          className={cn("flex-1 text-center pl-14", className)}
          ref={ref}
          {...props}
        />

        <Select
          value={unit}
          onValueChange={(value) => setUnit(value as Length)}
        >
          <SelectTrigger className="w-auto text-foreground">
            <SelectValue
              className="w-auto text-foreground"
              placeholder="Unit"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="m">m</SelectItem>
            <SelectItem value="km">km</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }
);
DistanceInput.displayName = "DistanceInput";

export { DistanceInput };

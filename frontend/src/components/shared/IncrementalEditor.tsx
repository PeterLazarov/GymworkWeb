import React from "react";
import { Button, NumericInput } from ".";
type Props = {
  value: number;
  onChange: (value: number | null) => void;
  step?: number;
  unit?: string;
};

export const IncrementalEditor: React.FC<Props> = ({
  value,
  onChange,
  step = 1,
  unit,
}) => (
  <div className="flex w-full">
    <Button
      variant="secondary"
      className="rounded-r-none"
      onClick={() => onChange(value - step < 0 ? 0 : value - step)}
    >
      -
    </Button>
    <NumericInput
      value={value}
      className="rounded-none text-center"
      onChange={onChange}
      unit={unit}
      min={0}
    />
    <Button
      variant="secondary"
      className="rounded-l-none"
      onClick={() => onChange(value + step)}
    >
      +
    </Button>
  </div>
);

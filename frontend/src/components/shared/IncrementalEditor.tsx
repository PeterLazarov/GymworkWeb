import React from "react";
import { Button, Input } from ".";
import { flex } from "../../../styled-system/patterns";

type Props = {
  value: number;
  onChange: (value: number) => void;
  step?: number;
  unit?: string;
};

export const IncrementalEditor: React.FC<Props> = ({
  value,
  onChange,
  step = 1,
  unit,
}) => (
  <div className={flex({ width: "100%" })}>
    <Button
      variant="secondary"
      className="rounded-r-none"
      onClick={() => onChange(value - step)}
    >
      -
    </Button>
    <Input
      type="text"
      value={value}
      className="rounded-none"
      onChange={(e) => onChange(Number(e.target.value))}
      unit={unit}
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

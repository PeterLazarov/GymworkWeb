import React from "react";
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
  <div className={flex({ gap: "2", width: "100%" })}>
    <button onClick={() => onChange(value - step)}>-</button>
    <div className={flex({ gap: "2" })}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {unit && <span>{unit}</span>}
    </div>
    <button onClick={() => onChange(value + step)}>+</button>
  </div>
);

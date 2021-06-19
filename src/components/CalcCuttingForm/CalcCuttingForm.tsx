import React, { ChangeEventHandler } from "react";

import { classnames } from "tailwindcss-classnames";
import { useSnapshot } from "valtio";

import { Input } from "../../elements/Input";
import { store } from "../../stores/store";

export type CalcCuttingFormInputs = {
  width: number;
  height: number;
};

export const CalcCuttingForm = (): JSX.Element => {
  const snap = useSnapshot(store);

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.cutting.width = parseInt(e.currentTarget.value);
  };

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.cutting.height = parseInt(e.currentTarget.value);
  };

  return (
    <div
      className={classnames("grid", "gap-2", "grid-flow-row", "auto-rows-max")}
    >
      <h2>Cutting size</h2>
      <div className={classnames("grid", "gap-4", "grid-cols-2")}>
        <div>
          <Input
            type="number"
            inputMode="numeric"
            label="Width"
            defaultValue={snap.cutting.width}
            onChange={handleWidthChange}
          />
        </div>
        <div>
          <Input
            type="number"
            inputMode="numeric"
            label="Height"
            defaultValue={snap.cutting.height}
            onChange={handleHeightChange}
          />
        </div>
      </div>
    </div>
  );
};

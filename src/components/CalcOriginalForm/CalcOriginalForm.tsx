import React, { ChangeEventHandler } from "react";

import { classnames } from "tailwindcss-classnames";
import { useSnapshot } from "valtio";

import { Input } from "../../elements/Input";
import { store } from "../../stores/store";

export type CalcOriginalFormInputs = {
  width: number;
  height: number;
  price: number;
};

export const CalcOriginalForm = (): JSX.Element => {
  const snap = useSnapshot(store);

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.original.width = parseInt(e.currentTarget.value);
  };

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.original.height = parseInt(e.currentTarget.value);
  };

  const handlePriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.original.price = parseInt(e.currentTarget.value);
  };

  return (
    <div
      className={classnames("grid", "gap-2", "grid-flow-row", "auto-rows-max")}
    >
      <h2>Original size</h2>
      <div className={classnames("grid", "gap-4", "grid-cols-2")}>
        <div>
          <Input
            type="number"
            inputMode="numeric"
            label="Width"
            defaultValue={snap.original.width}
            onChange={handleWidthChange}
          />
        </div>
        <div>
          <Input
            type="number"
            inputMode="numeric"
            label="Height"
            defaultValue={snap.original.height}
            onChange={handleHeightChange}
          />
        </div>
        <div className={classnames("col-span-2")}>
          <Input
            type="number"
            inputMode="numeric"
            label="Price"
            defaultValue={snap.original.price}
            onChange={handlePriceChange}
          />
        </div>
      </div>
    </div>
  );
};

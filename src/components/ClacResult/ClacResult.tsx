import React, { useMemo } from "react";

import { classnames } from "tailwindcss-classnames";
import { useSnapshot } from "valtio";

import { store } from "../../stores/store";

export const ClacResult = (): JSX.Element => {
  const snap = useSnapshot(store);

  const result = useMemo(() => {
    try {
      const result = Math.floor(
        (snap.cutting.width * snap.cutting.height * snap.original.price) /
          (snap.original.width * snap.original.height)
      );

      return Number.isInteger(result) ? `${result}` : "-";
    } catch {
      return "-";
    }
  }, [
    snap.original.width,
    snap.original.height,
    snap.original.price,
    snap.cutting.width,
    snap.cutting.height,
  ]);

  return <div className={classnames("font-bold", "text-5xl")}>{result}</div>;
};

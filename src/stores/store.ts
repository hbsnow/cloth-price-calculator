import { proxy } from "valtio";

import { CalcCuttingFormInputs } from "../components/CalcCuttingForm";
import { CalcOriginalFormInputs } from "../components/CalcOriginalForm";

type Store = {
  original: CalcOriginalFormInputs;
  cutting: CalcCuttingFormInputs;
};

export const initialState: Store = {
  original: {
    width: 0,
    height: 0,
    price: 0,
  },
  cutting: {
    width: 0,
    height: 0,
  },
};

export const store = proxy<Store>(initialState);

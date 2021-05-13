import { createStore, Store, CombinedState } from "redux";

import { rootReducer } from "./reducer";
import { IAppState } from "../interfaces/intrefaces";

export const store: Store<CombinedState<IAppState>, any> =
  createStore(rootReducer);

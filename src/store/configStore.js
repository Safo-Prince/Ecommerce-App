import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./items";

export default function configureAppStore() {
  return configureStore({ reducer: { selctedProducts: createReducer } });
}

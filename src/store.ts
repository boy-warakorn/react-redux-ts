import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import strokes from "./modules/strokes/slice";
import currentStroke from "./modules/currentStroke/slice";
import historyIndex from "./modules/historyIndex/slice";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
  },
  middleware,
});

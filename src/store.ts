import {
  configureStore,
  getDefaultMiddleware,
  Action,
  ThunkAction,
} from "@reduxjs/toolkit";
import strokes from "./modules/strokes/slice";
import projectsList from "./modules/projectsList/slice";
import currentStroke from "./modules/currentStroke/slice";
import historyIndex from "./modules/historyIndex/slice";
import modalVisible from "./modules/modals/slice";
import logger from "redux-logger";
import { RootState } from "./utils/types";

const middleware = [...getDefaultMiddleware(), logger];

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
    modalVisible,
    projectsList,
  },
  middleware,
});

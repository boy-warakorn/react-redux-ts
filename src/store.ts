import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

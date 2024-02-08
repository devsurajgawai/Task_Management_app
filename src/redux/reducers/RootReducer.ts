// reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import { taskSlice } from "./TaskReducer";

const rootReducer = combineReducers({
  ["taskKey"]: taskSlice.reducer,
});

export default rootReducer;

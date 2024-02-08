// reducers/TaskReducer.ts
import { TaskState } from "../types"; // Define your types as needed
import { createSlice } from "@reduxjs/toolkit";
import { addTaskAction } from "../TaskActions";
("../TaskActions");

// Define the initial state for tasks
const initialState: TaskState = {
  tasks: [],
};

// Define your reducer function
export const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTaskAction.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});
// ) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     default:
//       return state;
//   }

// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTaskAction: any = createAsyncThunk(
  "addTaskAction",
  async (payload: {}, { rejectWithValue }): Promise<any> => {
    // service logic
  }
);

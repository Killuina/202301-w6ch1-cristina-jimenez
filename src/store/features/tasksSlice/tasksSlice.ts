import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tasks } from "../../../types";

const initialTasks: Tasks = [];
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    loadTasks: (currentTasks, { payload }: PayloadAction<Tasks>) => [
      ...payload,
    ],
    deleteTask: (currentTasks, { payload }: PayloadAction<number>) =>
      currentTasks.filter(({ id }) => id !== payload),
  },
});

export default tasksSlice;

export const tasksReducer = tasksSlice.reducer;
export const {
  loadTasks: loadTasksActionCreator,
  deleteTask: deleteTaskActionCreator,
} = tasksSlice.actions;

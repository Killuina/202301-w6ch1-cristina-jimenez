import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  isDone: boolean;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, name: "Hacer la colada", isDone: false },
    { id: 2, name: "Hacer la comida", isDone: false },
  ],
  reducers: {
    loadTasks: (currentTasks, { payload }: PayloadAction<Task[]>) => [
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

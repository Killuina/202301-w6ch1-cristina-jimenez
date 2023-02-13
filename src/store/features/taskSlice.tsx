import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  isDone: boolean;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    loadTasks: (currentTask, { payload }: PayloadAction<Task[]>) => [
      ...payload,
    ],
    deleteTask: (currentTask, { payload }: PayloadAction<Task>) =>
      currentTask.filter(({ id }) => id !== payload.id),
  },
});

export default tasksSlice;

export const { loadTasks, deleteTask } = tasksSlice.actions;
export const { reducer: TasksReducer } = tasksSlice;

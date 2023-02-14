import { deleteTaskActionCreator, tasksReducer } from "./tasksSlice";

describe("Given the tasksReducer function", () => {
  describe("When it receives a list of 2 tasks and the action to delete the second task", () => {
    test("Then it should return the list without the second task", () => {
      const firstTask = { id: 1, name: "Hacer la colada", isDone: false };
      const secondTask = { id: 2, name: "Limpiar la cocina", isDone: false };
      const tasks = [firstTask, secondTask];

      const deleteSecondTaskAction = deleteTaskActionCreator(secondTask.id);
      const expectednNewTasks = [firstTask];

      const newTasks = tasksReducer(tasks, deleteSecondTaskAction);

      expect(newTasks).toStrictEqual(expectednNewTasks);
    });
  });
});

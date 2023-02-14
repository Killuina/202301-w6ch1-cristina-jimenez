import { render, screen } from "@testing-library/react";
import TasksList from "./TasksList";

describe("Given the TasksList component", () => {
  describe("When it receives a list of 2 tasks, one with name 'Hacer la colada'", () => {
    test("Then it should render a list of two task cards, one with heading 'Hacer la colada'", () => {
      const tasks = [
        { id: 1, name: "Hacer la colada", isDone: false },
        { id: 2, name: "Hacer la comida", isDone: true },
      ];
      render(<TasksList tasks={tasks} />);

      const expectedTaskHeading = "Hacer la colada";
      const taskHeading = screen.getByRole("heading", {
        name: expectedTaskHeading,
      });

      expect(taskHeading).toBeInTheDocument();
    });
  });
});

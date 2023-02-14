import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given the TaskCard component", () => {
  describe("When it receives a task", () => {
    test("Then it should show its name with a heading", () => {
      const task = { id: 1, name: "Hacer la colada", isDone: false };
      const expectedTaskName = "Hacer la colada";

      render(<TaskCard task={task} />);

      const taskName = screen.getByRole("heading", { name: expectedTaskName });

      expect(taskName).toBeInTheDocument();
    });
  });
});

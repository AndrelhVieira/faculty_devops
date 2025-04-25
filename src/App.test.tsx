import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Task Manager App", () => {
  it("should render the title and main fields", () => {
    render(<App />);
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should add a new task to the list", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  it("should not add an empty task", () => {
    render(<App />);

    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  it("should remove a task from the list", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Task to delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });

  it("should add multiple tasks to the list", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("should clear the input field after adding a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Task to clear" } });
    fireEvent.click(addButton);

    expect(input).toHaveValue("");
  });

  it("should clear the input field after adding a task (duplicate test)", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Task to clear" } });
    fireEvent.click(addButton);

    expect(input).toHaveValue("");
  });
});

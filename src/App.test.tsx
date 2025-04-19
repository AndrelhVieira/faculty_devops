import React from "react";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

test("should renders the header", () => {
  render(<App />);
  screen.getByText(/Task Manager/i);
});

it("should renders the input field and add button", () => {
  render(<App />);

  screen.getByPlaceholderText(/Add a new task/i);
  screen.getByText(/Add/i);
});

it("should allows the user to add a task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/New Task/i);
  expect(taskElement).toBeInTheDocument();
});

it("should clears the input field after adding a task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(inputElement).toHaveValue("");
});

it("should does not add an empty task", () => {
  render(<App />);
  const addButton = screen.getByText(/Add/i);

  fireEvent.click(addButton);

  const taskList = screen.queryByRole("listitem");
  expect(taskList).not.toBeInTheDocument();
});

it("should renders multiple tasks", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "Task 1" } });
  fireEvent.click(addButton);

  fireEvent.change(inputElement, { target: { value: "Task 2" } });
  fireEvent.click(addButton);

  const task1 = screen.getByText(/Task 1/i);
  const task2 = screen.getByText(/Task 2/i);

  expect(task1).toBeInTheDocument();
  expect(task2).toBeInTheDocument();
});

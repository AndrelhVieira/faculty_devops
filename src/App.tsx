import React from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div id="header">
        <h1>Task Manager</h1>

        <div id="add-task">
          <input
            type="text"
            name="task"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="button" onClick={() => handleAddTask()}>
            Add
          </button>
        </div>
      </div>

      <div id="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task}</p>
              <button type="button" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

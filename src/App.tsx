import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <input type="text" name="task" placeholder="Add a new task" />
        <button type="button">Add</button>
      </div>

      <div>
        <h2>Tasks</h2>

        <ul>
          <li>
            <p>Task 1</p>
            <button type="button">Delete</button>
          </li>
          <li>
            <p>Task 2</p>
            <button type="button">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

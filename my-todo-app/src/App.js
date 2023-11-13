import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <nav>
        {/* <button>Add Task</button>
        <button>View Tasks</button> */}
      </nav>
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

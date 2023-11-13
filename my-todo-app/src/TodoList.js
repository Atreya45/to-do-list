// TodoList.js
import React from "react";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task.task}</span>
          <span>{task.deadline}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

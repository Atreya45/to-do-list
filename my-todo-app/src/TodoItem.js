// TodoItem.js
import React from "react";

const TodoItem = ({ index, task, completeTask, removeTask }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.text}</span>
      <div>
        {!task.completed && (
          <button onClick={() => completeTask(index)}>Complete</button>
        )}
        <button onClick={() => removeTask(index)}>Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;

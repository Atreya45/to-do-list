import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, deadline });
    setTask("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </label>
      <label>
        Deadline:
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;

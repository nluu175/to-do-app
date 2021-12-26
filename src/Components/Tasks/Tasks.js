import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

const Tasks = (props) => {
  const { tasks } = props;
  // const { rerender } = props;

  const toShowTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div>
      <ul>
        {toShowTasks.map((task) => (
          // <li key={task.id}>{task.content}</li>
          <Task key={task.id} task={task} />
        ))}
      </ul>
      <button>Show Completed</button>
      <ul>
        {completedTasks.map((task) => (
          // <li key={task.id}>{task.content}</li>
          <Task key={task.id} task={task} />
        ))}{" "}
      </ul>
    </div>
  );
};

export default Tasks;

import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import "./Tasks.css";

const Tasks = (props) => {
  const { tasks, handleRemoveTask, handleCompletedCheck } = props;

  const toShowTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div>
      <ul>
        {toShowTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
            handleCompletedCheck={handleCompletedCheck}
          />
        ))}
      </ul>
      <button>Show Completed</button>
      <ul>
        {completedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
            handleCompletedCheck={handleCompletedCheck}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

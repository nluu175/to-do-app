import { useState } from "react";
import Task from "./Task";
import "./Tasks.css";

const Tasks = (props) => {
  const { tasks, handleRemoveTask, handleCompletedCheck } = props;
  const [showCompleted, setShowCompleted] = useState(false);

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
      <button
        onClick={() => {
          setShowCompleted(!showCompleted);
        }}
      >
        {showCompleted ? "Show Completed" : "Hide Completed"}
      </button>
      {showCompleted ? (
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
      ) : null}
    </div>
  );
};

export default Tasks;

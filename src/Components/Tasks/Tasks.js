import { useState } from "react";
import Task from "./Task";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Tasks = (props) => {
  const { tasks, handleRemoveTask, handleCompletedCheck } = props;
  const [showCompleted, setShowCompleted] = useState(false);

  const toShowTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div>
      <List>
        {toShowTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
            handleCompletedCheck={handleCompletedCheck}
          />
        ))}
      </List>
      <Button
        onClick={() => {
          setShowCompleted(!showCompleted);
        }}
        variant="outlined"
        size="small"
      >
        {showCompleted ? "Hide Completed" : "Show Completed"}
      </Button>
      {showCompleted ? (
        <List>
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleCompletedCheck={handleCompletedCheck}
            />
          ))}
        </List>
      ) : null}
    </div>
  );
};

export default Tasks;

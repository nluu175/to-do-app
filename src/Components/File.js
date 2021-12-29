import React, { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./Tasks/Tasks";
import AddParams from "./AddParams";
import Typography from "@mui/material/Typography";

// Folders contain files
// File is a container that contains Tasks
const File = (props) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.content.value) {
      const addedTask = {
        content: e.target.content.value,
        dueDate: e.target.dueDate.value,
        important: e.target.important.checked,
        completed: false,
      };

      axios
        .post("http://localhost:3001/tasks", addedTask)
        .then((response) => {
          setTasks(tasks.concat(response.data));
          console.log("Submitted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return;
  };

  const handleRemoveTask = (e) => {
    axios
      .delete(`http://localhost:3001/tasks/${e.target.id}`)
      .then((response) => {
        console.log("Removed!");
        setTasks(tasks.filter((task) => task.id !== e.target.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCompletedCheck = (e) => {
    let copiedTasks = [...tasks];

    const targetTask = copiedTasks.filter((task) => task.id === e.target.id)[0];
    targetTask.completed = !targetTask.completed;

    axios
      .put(`http://localhost:3001/tasks/${e.target.id}`, {
        completed: targetTask.completed,
      })
      .then((response) => {
        console.log("Updated Completed!");

        setTasks(
          copiedTasks
            .filter((task) => task.id !== e.target.id)
            .concat(targetTask)
        );
      });
  };

  if (loading) return "Fetching data! Please wait ...";

  return (
    <div className="container">
      <Typography variant="h2" component="h2">
        [Placeholder for List Name]
      </Typography>
      <AddParams handleSubmit={handleSubmit} />
      <Tasks
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleCompletedCheck={handleCompletedCheck}
      />
    </div>
  );
};

export default File;

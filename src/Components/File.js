import React, { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./Tasks/Tasks";
import AddParams from "./AddParams";

// Folders contain files
// File is a container that contains Tasks
const File = ({ ...props }) => {
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
    // console.log(e.target.dueDate.value);
    const addedTask = {
      content: e.target.content.value,
      important: true,
      completed: e.target.important.completed,
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
  };

  const handleRemoveTask = (e) => {
    console.log(e.target.id);
    axios
      .delete(`http://localhost:3001/tasks/${e.target.id}`)
      .then((response) => {
        console.log(response);
        setTasks(tasks.filter((task) => task.id !== e.target.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCompletedCheck = (e) => {
    console.log(e.target.id);
  };

  if (loading) return "Fetching data! Please wait ...";

  return (
    <div className="container">
      <h2>Todo List Name</h2>
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

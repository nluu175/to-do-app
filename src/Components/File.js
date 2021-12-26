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

  if (loading) return "Fetching data! Please wait ...";

  return (
    <div className="container">
      <h2>Todo List Name</h2>
      <AddParams handleSubmit={handleSubmit} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default File;

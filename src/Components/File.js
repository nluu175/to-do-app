import Task from "./Task";
import "./File.css";
import { useState, useEffect } from "react";
import axios from "axios";

const File = (props) => {
  // const initialTasks = [
  //   {
  //     content: "First",
  //     id: 1,
  //     createdDate: Date.now(),
  //     completed: false,
  //     dueDate: Date.now(),
  //   },
  //   {
  //     content: "Second",
  //     id: 2,
  //     createdDate: Date.now(),
  //     completed: true,
  //     dueDate: Date.now(),
  //   },
  //   {
  //     content: "Third",
  //     id: 3,
  //     createdDate: Date.now(),
  //     completed: true,
  //     dueDate: Date.now(),
  //   },
  // ];

  const [tasks, setTasks] = useState([]);
  const [onTypeTask, setOnTypeTask] = useState("");
  const [unCompleted, setUnCompleted] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Use to control whether to update Completed List
  const [updatedCheck, setUpdatedCheck] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/tasks`).then((returnedTasks) => {
      setTasks(returnedTasks.data);
      console.log(returnedTasks.data);
    });

    console.log("Tasks updated!");
    setUnCompleted(tasks.filter((task) => task.completed === false));
    setCompleted(tasks.filter((task) => task.completed === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedCheck]);

  // File Level Event Handlers
  const handleInputChange = (e) => {
    setOnTypeTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (onTypeTask) {
      const id = Math.floor(Math.random() * 10000000000);
      const addedTask = { content: onTypeTask, id: id, completed: false };
      setTasks(tasks.concat(addedTask));
      setOnTypeTask("");
    }
    console.log(tasks);
  };

  // Task Level Event Handlers
  const handleDelete = (e) => {
    const removedId = e.target.id;
    console.log(removedId);
    // Handle for Completed and UnCompleted Tasks cases
    const newTasks = tasks.filter((task) => task.id !== +removedId);
    setTasks(newTasks);
    setUpdatedCheck(!updatedCheck);
  };

  const handleCheck = (e) => {
    const checkedTask = tasks.filter((task) => task.id === +e.target.id)[0];

    // Change the value of completed
    checkedTask.completed = !checkedTask.completed;

    setUpdatedCheck(!updatedCheck);
  };

  const handleTaskChange = (e) => {
    const updatedTasks = [...tasks];
    const edittedTask = updatedTasks.filter(
      (task) => task.id === +e.target.id
    )[0];
    edittedTask.content = e.target.value;
    setTasks(updatedTasks);
  };

  const taskMethod = {
    handleDelete: handleDelete,
    handleCheck: handleCheck,
    handleTaskChange: handleTaskChange,
  };

  return (
    <div className="fileMainPage">
      <h1>[Folder Name]</h1>
      <form>
        <input
          className=""
          placeholder="Enter the task ..."
          value={onTypeTask}
          onChange={handleInputChange}
        />
        <input className="" type="date" />
        <button onClick={handleAdd}>Add</button>
      </form>
      {/* Task Container */}
      <div className="taskContainer">
        <ul>
          {unCompleted.map((task) => (
            <Task key={task.id} task={task} method={taskMethod} />
          ))}
        </ul>
      </div>
      {/* Completed Task */}
      <h2>Completed</h2>
      <div className="taskContainer">
        <ul>
          {completed.map((task) => (
            <Task key={task.id} task={task} method={taskMethod} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default File;

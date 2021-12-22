import Task from "./Task";
import "./File.css";
import { useState, useEffect } from "react";
import Editable from "./Editable";

const File = (props) => {
  const initialTasks = [
    {
      content: "First",
      id: 1,
      createdDate: Date.now(),
      completed: false,
      dueDate: Date.now(),
    },
    {
      content: "Second",
      id: 2,
      createdDate: Date.now(),
      completed: true,
      dueDate: Date.now(),
    },
    {
      content: "Third",
      id: 3,
      createdDate: Date.now(),
      completed: true,
      dueDate: Date.now(),
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [onTypeTask, setOnTypeTask] = useState("");
  const [unCompleted, setUnCompleted] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    console.log("tasks updated!");
    setUnCompleted(tasks.filter((task) => task.completed === false));
    setCompleted(tasks.filter((task) => task.completed === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  // File Level Event Handlers
  const handleInputChange = (e) => {
    setOnTypeTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (onTypeTask) {
      const id = Math.floor(Math.random() * 100);
      const addedTask = { content: onTypeTask, id: id, completed: false };
      setTasks(tasks.concat(addedTask));
      setOnTypeTask("");
    }
    console.log(tasks);
  };

  // Task Level Event Handlers
  const handleDelete = (e) => {
    const removedId = e.target.id;
    // Handle for Completed and UnCompleted Tasks cases
    const newTasks = tasks.filter((task) => task.id !== +removedId);
    setTasks(newTasks);
  };

  const handleCheck = (e) => {
    const updatedTasks = [...tasks];
    const checkedTask = updatedTasks.filter(
      (task) => task.id === +e.target.id
    )[0];

    // Change the value of completed
    checkedTask.completed = !checkedTask.completed;
    setTasks(updatedTasks);
  };

  const taskMethod = {
    handleDelete: handleDelete,
    handleCheck: handleCheck,
  };

  return (
    <div className="fileMainPage">
      <h1>[Folder Name]</h1>
      <form>
        <Editable placeholder="Enter a date">
          <input
            placeholder="Enter the task ..."
            value={onTypeTask}
            onChange={handleInputChange}
          />
        </Editable>
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

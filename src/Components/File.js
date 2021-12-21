import Task from "./Task";
import Completed from "./Completed";
import "./File.css";
import { useState } from "react";

const File = (props) => {
  const today = new Date();
  const initialTasks = [
    { content: "First", id: 1, createdDate: Date.now() },
    { content: "Second", id: 2, createdDate: Date.now() },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [onTypeTask, setOnTypeTask] = useState("");

  const handleInputChange = (e) => {
    setOnTypeTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (onTypeTask) {
      const addedTask = { content: onTypeTask, id: tasks.length + 1 };
      setTasks(tasks.concat(addedTask));
      setOnTypeTask("");
    }
  };

  const handleDelete = (e) => {
    const removedId = e.target.id;
    const newTasks = tasks.filter((task) => task.id !== +removedId);
    setTasks(newTasks);
  };

  return (
    <div className="fileMainPage">
      <form>
        <input
          placeholder="Enter the task ..."
          value={onTypeTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      {/* Task Container */}
      <div className="taskContainer">
        <ul>
          {tasks.map((task) => (
            <Task task={task} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
      {/* Completed Task */}
      <Completed />
    </div>
  );
};

export default File;

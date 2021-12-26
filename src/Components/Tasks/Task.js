import { useState, useEffect } from "react";
import "./Task.css";

const Task = (props) => {
  const { task, handleRemoveTask } = props;
  // console.log(handleRemoveTask);
  return (
    <li>
      <input name="completed" type="checkbox" />
      {task.content}
      <button id={task.id} onClick={(e) => handleRemoveTask(e)} className="">
        Remove
      </button>
    </li>
  );
};

export default Task;

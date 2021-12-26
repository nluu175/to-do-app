import { useState, useEffect } from "react";

const Task = (props) => {
  const { task } = props;
  return <li>{task.content}</li>;
};

export default Task;

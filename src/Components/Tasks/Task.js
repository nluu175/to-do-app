import "./Task.css";

const Task = (props) => {
  const { task, handleRemoveTask, handleCompletedCheck } = props;
  return (
    <li>
      <input
        name="completed"
        type="checkbox"
        onClick={(e) => handleCompletedCheck(e)}
        id={task.id}
        content={task.content}
      />
      {task.content}
      <button id={task.id} onClick={(e) => handleRemoveTask(e)} className="">
        Remove
      </button>
    </li>
  );
};

export default Task;

import "./Task.css";
// import Editable from "./Editable";
const Task = (props) => {
  const { content, id } = props.task;
  const { handleDelete, handleCheck, handleTaskChange } = props.method;
  return (
    <li>
      <input type="checkbox" id={id} onChange={handleCheck} />
      <input
        className="note content"
        value={content}
        onChange={handleTaskChange}
        id={id}
      />
      <button className="note inline-btn" id={id} onClick={handleDelete}>
        Remove
      </button>
    </li>
  );
};

export default Task;

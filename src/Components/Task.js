import "./Task.css";

const Task = (props) => {
  const { content, id } = props.task;
  const { handleDelete, handleCheck } = props.method;
  return (
    <li>
      <input type="checkbox" id={id} onChange={handleCheck} />
      <p className="note content">{content}</p>
      <button className="note" id={id} onClick={handleDelete}>
        Remove
      </button>
    </li>
  );
};

export default Task;

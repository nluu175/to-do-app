import "./Task.css";

const Task = (props) => {
  const { content, id } = props.task;
  const { handleDelete } = props;
  return (
    <li>
      <input type="checkbox" />
      <p className="note content">{content}</p>
      <button className="note" onClick={handleDelete} id={id}>
        Remove
      </button>
    </li>
  );
};

export default Task;

import "./Task.css";
// import Editable from "./Editable";
const Task = (props) => {
  const { content, id } = props.task;
  const { handleDelete, handleCheck } = props.method;
  return (
    <li>
      <input type="checkbox" id={id} onChange={handleCheck} />
      <p className="note content">{content}</p>
      {/* <Editable> */}
      {/* </Editable> */}
      <button className="note inline-btn">Edit</button>
      <button className="note inline-btn" id={id} onClick={handleDelete}>
        Remove
      </button>
    </li>
  );
};

export default Task;

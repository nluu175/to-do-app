import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const Task = (props) => {
  const { task, handleRemoveTask, handleCompletedCheck } = props;
  const date = new Date(task.dueDate);
  var formattedDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  return (
    <ListItem>
      <Checkbox
        name="important"
        onClick={(e) => handleCompletedCheck(e)}
        id={task.id}
        content={task.content}
      />
      <ListItemText
        primary={task.content}
        secondary={`due on ${formattedDate}`}
      />
      <Button
        id={task.id}
        onClick={(e) => handleRemoveTask(e)}
        variant="outlined"
        size="small"
      >
        Remove
      </Button>
    </ListItem>
  );
};

export default Task;

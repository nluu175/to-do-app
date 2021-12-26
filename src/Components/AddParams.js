import { useState, useEffect } from "react";
import { useForm } from "./custom/useForm";
import axios from "axios";

const AddParams = (props) => {
  const [values, handleChange] = useForm({
    content: "",
    dueDate: "",
  });

  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="content">Content</label>
        <input
          name="content"
          value={values.content}
          onChange={handleChange}
          placeholder="Write something ..."
        />
        <label htmlFor="dueDate">Due Date</label>
        <input
          name="dueDate"
          value={values.dueDate}
          type="date"
          onChange={handleChange}
        />
        <label htmlFor="important">Important</label>
        <input name="important" type="checkbox" />
        <label htmlFor="completed">Completed</label>
        <input name="completed" type="checkbox" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddParams;
